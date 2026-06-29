
(function(){
  // Strategic Presence: baked dotted globe (PNG) + animated SVG flight arcs.
  // The projection below is identical to the image baker, so the arcs and pins
  // register on the baked dots exactly. Globe art: /img/globe-{light,dark}.png.
  var cx=1300, cy=826, Rx=1274, Ry=772, CURV=86, DEG=Math.PI/180;
  var VX=114, VY=31, VW=2453, VH=1326;            // crop box (= SVG viewBox)
  function sweight(sy){ return Math.max(0, Math.min(1.14, 0.52-0.62*sy)); }
  function proj(lat,lng){
    var la=lat*DEG, sy=Math.sin(la), sx=Math.cos(la)*Math.sin(lng*DEG/2);
    return { x:cx+Rx*sx, y:cy-Ry*sy+CURV*sx*sx*sweight(sy) };
  }
  function pct(p){ return { l:(p.x-VX)/VW*100, t:(p.y-VY)/VH*100 }; }

  var NODES={
    dubai:{lat:25.2,lng:55.3}, singapore:{lat:1.3,lng:104}, wonder:{lat:-25.65,lng:28.22},
    na:{lat:42,lng:-100}, eu:{lat:50,lng:12}, af:{lat:9,lng:19},
    sa:{lat:-12,lng:-58}, ea:{lat:35,lng:118}, au:{lat:-25,lng:134}
  };
  var REGIONS=[
    {k:'na',t:'North America'},{k:'eu',t:'Europe'},{k:'af',t:'Africa'},
    {k:'sa',t:'South America'},{k:'ea',t:'East Asia',l:1},{k:'au',t:'Australia',l:1}
  ];
  var PINS=[
    {k:'dubai',city:'Dubai',sub:'UAE'},
    {k:'singapore',city:'Singapore',sub:'Singapore',l:1},
    {k:'wonder',city:'Wonderboom',sub:'South Africa',wh:1,l:1}
  ];
  // [from, to, animateAircraft]
  var ROUTES=[
    ['dubai','singapore',1],['dubai','eu',1],['dubai','na',1],['dubai','ea',0],
    ['dubai','af',0],['dubai','wonder',1],
    ['singapore','ea',1],['singapore','au',1],['singapore','sa',0],
    ['wonder','sa',0],['wonder','eu',0]
  ];

  function initStratGlobe(root){
    if(root.__g) return; root.__g=true;
    var SVGNS='http://www.w3.org/2000/svg';
    var svg=root.querySelector('#amm-routes');
    var ov=root.querySelector('#amm-globe-ov');
    if(!svg || !ov) return;
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function mkPath(d,stroke,w){
      var p=document.createElementNS(SVGNS,'path');
      p.setAttribute('d',d);p.setAttribute('fill','none');
      p.setAttribute('stroke',stroke);p.setAttribute('stroke-width',w);
      p.setAttribute('stroke-linecap','round');svg.appendChild(p);return p;
    }
    function arcD(a,b){
      var pa=proj(NODES[a].lat,NODES[a].lng), pb=proj(NODES[b].lat,NODES[b].lng);
      var lift=Math.min(0.30*Math.hypot(pb.x-pa.x,pb.y-pa.y),340)+30;
      return 'M'+pa.x+' '+pa.y+' Q'+(pa.x+pb.x)/2+' '+((pa.y+pb.y)/2-lift)+' '+pb.x+' '+pb.y;
    }

    // each arc once: blurred glow + core; optional comet highlight + aircraft glyph
    var planeLayer=document.createElementNS(SVGNS,'g');   // appended last -> planes on top
    var comets=[], planes=[];
    ROUTES.forEach(function(r,i){
      var d=arcD(r[0],r[1]);
      var g=mkPath(d,'var(--amm-arc-glow)',9);g.setAttribute('opacity','.5');g.style.filter='blur(5px)';
      var c=mkPath(d,'var(--amm-arc)',3);
      var L=c.getTotalLength();
      if(reduce)return;
      c.style.strokeDasharray=L;c.style.strokeDashoffset=L;
      c.style.transition='stroke-dashoffset 1.5s cubic-bezier(.6,.05,.2,1) '+(0.15*i)+'s';
      requestAnimationFrame(function(){requestAnimationFrame(function(){c.style.strokeDashoffset=0;});});
      var hi=mkPath(d,'var(--amm-arc-core)',4.4);hi.style.opacity='.9';hi.style.strokeDasharray='1 '+L;
      comets.push({el:hi,L:L,off:(0.13*i)%1,spd:0.10+0.012*i});
      if(r[2]){                                           // aircraft reuses the core path for positioning
        var grp=document.createElementNS(SVGNS,'g');
        grp.style.filter='drop-shadow(0 0 4px var(--amm-arc-glow))';
        var pl=document.createElementNS(SVGNS,'path');
        pl.setAttribute('d','M10,0 L-7,-5 L-3,-1.3 L-9,-1.3 L-9,1.3 L-3,1.3 L-7,5 Z');
        pl.setAttribute('fill','var(--amm-plane)');pl.setAttribute('transform','scale(2)');
        grp.appendChild(pl);planeLayer.appendChild(grp);
        planes.push({path:c,g:grp,L:L,t:(0.17*i)%1,spd:0.05+0.008*(i%3)});
      }
    });
    svg.appendChild(planeLayer);

    // region waypoints + hub pins (positioned in % of the viewBox crop)
    REGIONS.forEach(function(r){
      var p=pct(proj(NODES[r.k].lat,NODES[r.k].lng));
      var el=document.createElement('div');
      el.className='amm-gwp'+(r.l?' amm-gwp-l':'');
      el.style.left=p.l+'%';el.style.top=p.t+'%';
      el.innerHTML='<span class="amm-gwp-dot"></span><span class="amm-maplabel">'+r.t+'</span>';
      ov.appendChild(el);
    });
    PINS.forEach(function(pn){
      var p=pct(proj(NODES[pn.k].lat,NODES[pn.k].lng));
      var el=document.createElement('div');
      el.className='amm-gpin'+(pn.l?' amm-gpin-r':'')+(pn.wh?' amm-gpin-wh':'');
      el.style.left=p.l+'%';el.style.top=p.t+'%';
      el.innerHTML='<span class="amm-gpin-drop"></span><span class="amm-gcard"><b>'+pn.city+'</b><span>'+pn.sub+'</span></span>';
      ov.appendChild(el);
    });

    if(!reduce)(function tick(){
      comets.forEach(function(o){o.off=(o.off+o.spd/100)%1;o.el.style.strokeDashoffset=-o.off*o.L;});
      planes.forEach(function(o){
        o.t=(o.t+o.spd/100)%1;
        var at=o.t*o.L,p1=o.path.getPointAtLength(at),p2=o.path.getPointAtLength(Math.min(o.L,at+1));
        var ang=Math.atan2(p2.y-p1.y,p2.x-p1.x)*180/Math.PI;
        o.g.setAttribute('transform','translate('+p1.x+' '+p1.y+') rotate('+ang+')');
      });
      requestAnimationFrame(tick);
    })();
  }

  window.__initStratGlobe = initStratGlobe;
})();
