
(function(){
  var WA_NUMBER='971552637089';
  var btn=document.getElementById('amm-wa');
  if(!btn) return;

  // Per-page base intent
  var PAGE_MSG={
    home:'I\u2019d like to talk to AMMAC about aviation aftermarket & supply chain solutions.',
    products:'I\u2019m interested in AMMAC\u2019s products & services (components, rotables, consumables).',
    repair:'I\u2019d like to enquire about AMMAC\u2019s repair management services.',
    warehousing:'I\u2019d like to discuss AMMAC\u2019s warehousing & supply chain programs.',
    parts:'I\u2019m searching your live parts inventory and would like to send an enquiry.',
    why:'I\u2019d like to learn more about partnering with AMMAC.'
  };

  function currentPage(){
    var p=document.querySelector('.amm-page');
    var vis=Array.prototype.filter.call(document.querySelectorAll('.amm-page'),function(e){return e.style.display!=='none';});
    if(vis[0]) return vis[0].getAttribute('data-page')||'home';
    return 'home';
  }

  // Find the section heading nearest the viewport centre on the active page
  function nearestSection(page){
    var pg=document.querySelector('.amm-page[data-page="'+page+'"]');
    if(!pg) return '';
    var mid=window.innerHeight*0.42;
    var best='', bestDist=1e9;
    var heads=pg.querySelectorAll('h1,h2,h3');
    Array.prototype.forEach.call(heads,function(hd){
      var r=hd.getBoundingClientRect();
      if(r.bottom<0 || r.top>window.innerHeight) return;
      var d=Math.abs(r.top-mid);
      if(d<bestDist){ bestDist=d; best=(hd.textContent||'').replace(/\s+/g,' ').replace(/&(?=\S)/g,'& ').replace(/\s+/g,' ').trim(); }
    });
    return best.length>2 && best.length<90 ? best : '';
  }

  // If a specific CTA element was clicked just before, prefer its label
  var lastCTA='';
  document.addEventListener('click',function(e){
    var t=e.target.closest('a,button');
    if(!t || t.id==='amm-wa' || t.closest('#amm-wa')) return;
    var txt=(t.getAttribute('aria-label')||t.textContent||'').trim().replace(/\s+/g,' ');
    // ignore nav chrome + tiny/empty
    if(t.closest('#amm-desknav')||t.closest('#amm-mobile')||t.closest('#amm-header')) { lastCTA=''; return; }
    if(txt && txt.length>3 && txt.length<70 && !/^(home|menu|close|\u00d7|\/)$/i.test(txt)){ lastCTA=txt; setTimeout(function(){ lastCTA=''; },9000); }
  },true);

  function buildMessage(){
    var page=currentPage();
    var base=PAGE_MSG[page]||PAGE_MSG.home;
    var ctx='';
    // Parts page: include the active search query + filter if present
    if(page==='parts'){
      var q=document.getElementById('ps-search');
      if(q && q.value.trim()) ctx='Searching for: "'+q.value.trim()+'". ';
    }
    var sect = (!lastCTA) ? nearestSection(page) : '';
    var lead='Hello AMMAC team, ';
    var ref='';
    if(lastCTA) ref=' (re: "'+lastCTA+'")';
    else if(sect) ref=' (section: "'+sect+'")';
    return lead+ctx+base+ref;
  }

  function refreshHref(){
    var msg=buildMessage();
    btn.href='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg);
  }

  // Rebuild message right before the link is followed (most accurate context)
  btn.addEventListener('mousedown',refreshHref);
  btn.addEventListener('touchstart',refreshHref,{passive:true});
  btn.addEventListener('focus',refreshHref);
  btn.addEventListener('click',function(){ refreshHref(); /* href now set, default nav proceeds */ });

  // Keep it loosely fresh on scroll/route too
  var raf;
  window.addEventListener('scroll',function(){ cancelAnimationFrame(raf); raf=requestAnimationFrame(refreshHref); },{passive:true});
  window.addEventListener('hashchange',function(){ setTimeout(refreshHref,60); });

  // Reveal the button shortly after load
  setTimeout(function(){ btn.classList.add('show'); refreshHref(); }, 900);
})();
