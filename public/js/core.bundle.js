
/* ===== worldmap-dots ===== */

(function(){
const DOTS=[[0.0111,0.0952],[0.0222,0.0635],[0.0222,0.0952],[0.0333,0.0635],[0.0333,0.0952],[0.0444,0.0635],[0.0444,0.0952],[0.0556,0.0635],[0.0556,0.0952],[0.0667,0.0635],[0.1,0.0952],[0.1,0.127],[0.1111,0.0635],[0.1111,0.0952],[0.1111,0.127],[0.1111,0.1587],[0.1222,0.0635],[0.1222,0.0952],[0.1222,0.127],[0.1222,0.1587],[0.1222,0.1905],[0.1333,0.0635],[0.1333,0.0952],[0.1333,0.127],[0.1333,0.1587],[0.1333,0.1905],[0.1333,0.2222],[0.1333,0.254],[0.1444,0.0635],[0.1444,0.0952],[0.1444,0.127],[0.1444,0.1587],[0.1444,0.1905],[0.1444,0.2222],[0.1444,0.254],[0.1444,0.2857],[0.1556,0.0635],[0.1556,0.0952],[0.1556,0.127],[0.1556,0.1587],[0.1556,0.1905],[0.1556,0.2222],[0.1556,0.254],[0.1556,0.2857],[0.1556,0.3175],[0.1667,0.0635],[0.1667,0.0952],[0.1667,0.127],[0.1667,0.1587],[0.1667,0.1905],[0.1667,0.2222],[0.1667,0.254],[0.1667,0.2857],[0.1667,0.3175],[0.1667,0.3492],[0.1778,0.0635],[0.1778,0.0952],[0.1778,0.127],[0.1778,0.1587],[0.1778,0.1905],[0.1778,0.2222],[0.1778,0.254],[0.1778,0.2857],[0.1778,0.3175],[0.1778,0.3492],[0.1778,0.381],[0.1889,0.0635],[0.1889,0.0952],[0.1889,0.127],[0.1889,0.1587],[0.1889,0.1905],[0.1889,0.2222],[0.1889,0.254],[0.1889,0.2857],[0.1889,0.3175],[0.1889,0.3492],[0.1889,0.381],[0.1889,0.4127],[0.2,0.0635],[0.2,0.0952],[0.2,0.127],[0.2,0.1587],[0.2,0.1905],[0.2,0.2222],[0.2,0.254],[0.2,0.2857],[0.2,0.3175],[0.2,0.3492],[0.2,0.4127],[0.2,0.4444],[0.2111,0.0635],[0.2111,0.0952],[0.2111,0.127],[0.2111,0.1587],[0.2111,0.1905],[0.2111,0.2222],[0.2111,0.254],[0.2111,0.2857],[0.2111,0.3175],[0.2111,0.3492],[0.2111,0.4444],[0.2222,0.0635],[0.2222,0.0952],[0.2222,0.127],[0.2222,0.1587],[0.2222,0.2222],[0.2222,0.254],[0.2222,0.2857],[0.2222,0.3175],[0.2222,0.3492],[0.2333,0.0952],[0.2333,0.127],[0.2333,0.1587],[0.2333,0.2222],[0.2333,0.254],[0.2333,0.2857],[0.2333,0.3175],[0.2333,0.3492],[0.2333,0.4762],[0.2444,0.0952],[0.2444,0.127],[0.2444,0.1587],[0.2444,0.2222],[0.2444,0.254],[0.2444,0.2857],[0.2444,0.3175],[0.2444,0.5079],[0.2556,0.0952],[0.2556,0.127],[0.2556,0.254],[0.2556,0.2857],[0.2556,0.3175],[0.2556,0.5397],[0.2667,0.127],[0.2667,0.254],[0.2667,0.2857],[0.2667,0.5397],[0.2667,0.5714],[0.2667,0.6032],[0.2667,0.6349],[0.2667,0.6667],[0.2667,0.6984],[0.2667,0.7937],[0.2667,0.8254],[0.2667,0.8571],[0.2778,0.5397],[0.2778,0.5714],[0.2778,0.6032],[0.2778,0.6349],[0.2778,0.6667],[0.2778,0.6984],[0.2778,0.7302],[0.2778,0.7937],[0.2778,0.8254],[0.2778,0.8571],[0.2778,0.8889],[0.2778,0.9206],[0.2778,0.9524],[0.2778,0.9841],[0.2889,0.5079],[0.2889,0.5397],[0.2889,0.5714],[0.2889,0.6032],[0.2889,0.6349],[0.2889,0.6667],[0.2889,0.6984],[0.2889,0.7302],[0.2889,0.7937],[0.2889,0.8254],[0.2889,0.8571],[0.2889,0.8889],[0.2889,0.9206],[0.2889,0.9524],[0.3,0.5079],[0.3,0.5397],[0.3,0.5714],[0.3,0.6032],[0.3,0.6349],[0.3,0.6667],[0.3,0.6984],[0.3,0.7302],[0.3,0.7619],[0.3,0.8254],[0.3,0.8571],[0.3,0.8889],[0.3,0.9206],[0.3111,0.5397],[0.3111,0.5714],[0.3111,0.6032],[0.3111,0.6349],[0.3111,0.6667],[0.3111,0.6984],[0.3111,0.7302],[0.3111,0.7619],[0.3111,0.8254],[0.3111,0.8571],[0.3111,0.8889],[0.3222,0.5397],[0.3222,0.5714],[0.3222,0.6667],[0.3222,0.6984],[0.3222,0.7302],[0.3222,0.7619],[0.3222,0.8254],[0.3333,0.6667],[0.3333,0.6984],[0.3333,0.7302],[0.3333,0.7619],[0.3444,0.0317],[0.3444,0.0635],[0.3444,0.0952],[0.3444,0.6667],[0.3444,0.6984],[0.3444,0.7302],[0.3556,0],[0.3556,0.0317],[0.3556,0.0635],[0.3556,0.0952],[0.3556,0.7302],[0.3667,0],[0.3667,0.0317],[0.3667,0.0635],[0.3667,0.0952],[0.3778,0],[0.3778,0.0317],[0.3778,0.0635],[0.3778,0.0952],[0.3889,0],[0.3889,0.0317],[0.3889,0.0635],[0.4,0],[0.4,0.0317],[0.4,0.0635],[0.4111,0.0317],[0.4333,0.4444],[0.4333,0.4762],[0.4333,0.5079],[0.4444,0.4127],[0.4444,0.4444],[0.4444,0.4762],[0.4444,0.5079],[0.4556,0.1587],[0.4556,0.2222],[0.4556,0.254],[0.4556,0.3492],[0.4556,0.381],[0.4556,0.4127],[0.4556,0.4444],[0.4556,0.4762],[0.4556,0.5079],[0.4667,0.1587],[0.4667,0.1905],[0.4667,0.2222],[0.4667,0.254],[0.4667,0.3492],[0.4667,0.381],[0.4667,0.4127],[0.4667,0.4444],[0.4667,0.4762],[0.4667,0.5079],[0.4667,0.5397],[0.4778,0.1905],[0.4778,0.2222],[0.4778,0.3492],[0.4778,0.381],[0.4778,0.4127],[0.4778,0.4444],[0.4778,0.4762],[0.4778,0.5079],[0.4778,0.5397],[0.4778,0.5714],[0.4889,0.127],[0.4889,0.1587],[0.4889,0.1905],[0.4889,0.2222],[0.4889,0.3175],[0.4889,0.3492],[0.4889,0.381],[0.4889,0.4127],[0.4889,0.4444],[0.4889,0.4762],[0.4889,0.5079],[0.4889,0.5397],[0.4889,0.5714],[0.5,0.0952],[0.5,0.127],[0.5,0.1587],[0.5,0.1905],[0.5,0.2222],[0.5,0.254],[0.5,0.3175],[0.5,0.3492],[0.5,0.381],[0.5,0.4127],[0.5,0.4444],[0.5,0.4762],[0.5,0.5079],[0.5,0.5397],[0.5,0.5714],[0.5,0.6032],[0.5,0.6349],[0.5,0.6667],[0.5111,0.0635],[0.5111,0.0952],[0.5111,0.127],[0.5111,0.1587],[0.5111,0.1905],[0.5111,0.2222],[0.5111,0.254],[0.5111,0.3175],[0.5111,0.3492],[0.5111,0.381],[0.5111,0.4127],[0.5111,0.4444],[0.5111,0.4762],[0.5111,0.5079],[0.5111,0.5397],[0.5111,0.5714],[0.5111,0.6032],[0.5111,0.6349],[0.5111,0.6667],[0.5111,0.6984],[0.5111,0.7302],[0.5111,0.7619],[0.5111,0.7937],[0.5222,0.0635],[0.5222,0.0952],[0.5222,0.1587],[0.5222,0.1905],[0.5222,0.2222],[0.5222,0.254],[0.5222,0.3175],[0.5222,0.3492],[0.5222,0.381],[0.5222,0.4127],[0.5222,0.4444],[0.5222,0.4762],[0.5222,0.5079],[0.5222,0.5397],[0.5222,0.5714],[0.5222,0.6032],[0.5222,0.6349],[0.5222,0.6667],[0.5222,0.6984],[0.5222,0.7302],[0.5222,0.7619],[0.5222,0.7937],[0.5222,0.8254],[0.5222,0.8571],[0.5333,0.0635],[0.5333,0.0952],[0.5333,0.1587],[0.5333,0.1905],[0.5333,0.2222],[0.5333,0.254],[0.5333,0.3492],[0.5333,0.381],[0.5333,0.4127],[0.5333,0.4444],[0.5333,0.4762],[0.5333,0.5079],[0.5333,0.5397],[0.5333,0.5714],[0.5333,0.6032],[0.5333,0.6349],[0.5333,0.6667],[0.5333,0.6984],[0.5333,0.7302],[0.5333,0.7619],[0.5333,0.7937],[0.5333,0.8254],[0.5444,0.0635],[0.5444,0.0952],[0.5444,0.1905],[0.5444,0.2222],[0.5444,0.3492],[0.5444,0.381],[0.5444,0.4127],[0.5444,0.4444],[0.5444,0.4762],[0.5444,0.5079],[0.5444,0.5397],[0.5444,0.5714],[0.5444,0.6032],[0.5444,0.6349],[0.5444,0.6667],[0.5444,0.6984],[0.5444,0.7302],[0.5444,0.7619],[0.5444,0.7937],[0.5444,0.8254],[0.5556,0.3492],[0.5556,0.381],[0.5556,0.4127],[0.5556,0.4444],[0.5556,0.4762],[0.5556,0.5079],[0.5556,0.5397],[0.5556,0.5714],[0.5556,0.6032],[0.5556,0.6349],[0.5556,0.6667],[0.5556,0.6984],[0.5556,0.7302],[0.5556,0.7619],[0.5556,0.7937],[0.5667,0.3492],[0.5667,0.4444],[0.5667,0.4762],[0.5667,0.5079],[0.5667,0.5397],[0.5667,0.5714],[0.5667,0.6032],[0.5667,0.6349],[0.5667,0.6667],[0.5667,0.6984],[0.5667,0.7302],[0.5778,0.3175],[0.5778,0.3492],[0.5778,0.381],[0.5778,0.4127],[0.5778,0.4762],[0.5778,0.5079],[0.5778,0.5397],[0.5778,0.5714],[0.5778,0.6032],[0.5778,0.6349],[0.5778,0.6667],[0.5889,0.2857],[0.5889,0.3175],[0.5889,0.3492],[0.5889,0.381],[0.5889,0.4127],[0.5889,0.4444],[0.5889,0.5079],[0.5889,0.5397],[0.5889,0.5714],[0.5889,0.6032],[0.6,0.254],[0.6,0.2857],[0.6,0.3175],[0.6,0.3492],[0.6,0.381],[0.6,0.4127],[0.6,0.4444],[0.6,0.4762],[0.6,0.5079],[0.6,0.5397],[0.6,0.7302],[0.6,0.7619],[0.6111,0.254],[0.6111,0.2857],[0.6111,0.3175],[0.6111,0.381],[0.6111,0.4127],[0.6111,0.4444],[0.6111,0.4762],[0.6222,0.254],[0.6222,0.2857],[0.6222,0.3175],[0.6222,0.381],[0.6222,0.4127],[0.6222,0.4444],[0.6333,0.0635],[0.6333,0.0952],[0.6333,0.127],[0.6333,0.1587],[0.6333,0.2222],[0.6333,0.254],[0.6333,0.2857],[0.6333,0.3175],[0.6333,0.4127],[0.6444,0.0635],[0.6444,0.0952],[0.6444,0.127],[0.6444,0.1587],[0.6444,0.2222],[0.6444,0.254],[0.6444,0.2857],[0.6556,0.0635],[0.6556,0.0952],[0.6556,0.127],[0.6556,0.1587],[0.6556,0.2222],[0.6556,0.254],[0.6556,0.2857],[0.6667,0.0317],[0.6667,0.0635],[0.6667,0.0952],[0.6667,0.127],[0.6667,0.1587],[0.6667,0.2222],[0.6667,0.254],[0.6667,0.2857],[0.6667,0.381],[0.6667,0.4127],[0.6778,0.0317],[0.6778,0.0635],[0.6778,0.0952],[0.6778,0.127],[0.6778,0.1587],[0.6778,0.2222],[0.6778,0.254],[0.6778,0.2857],[0.6778,0.381],[0.6778,0.4127],[0.6778,0.4444],[0.6889,0.0317],[0.6889,0.0635],[0.6889,0.0952],[0.6889,0.127],[0.6889,0.1587],[0.6889,0.1905],[0.6889,0.2222],[0.6889,0.254],[0.6889,0.381],[0.6889,0.4127],[0.6889,0.4444],[0.6889,0.4762],[0.7,0.0317],[0.7,0.0635],[0.7,0.0952],[0.7,0.127],[0.7,0.1587],[0.7,0.1905],[0.7,0.2222],[0.7,0.381],[0.7,0.4127],[0.7,0.4444],[0.7,0.4762],[0.7111,0.0317],[0.7111,0.0635],[0.7111,0.0952],[0.7111,0.127],[0.7111,0.1587],[0.7111,0.1905],[0.7111,0.4127],[0.7222,0.0317],[0.7222,0.0635],[0.7222,0.0952],[0.7222,0.127],[0.7222,0.1587],[0.7333,0.0317],[0.7333,0.0635],[0.7333,0.0952],[0.7333,0.127],[0.7444,0.0317],[0.7444,0.0635],[0.7444,0.0952],[0.7444,0.127],[0.7444,0.3175],[0.7444,0.3492],[0.7444,0.4444],[0.7444,0.5714],[0.7556,0.0317],[0.7556,0.0635],[0.7556,0.0952],[0.7556,0.127],[0.7556,0.3175],[0.7556,0.3492],[0.7556,0.4762],[0.7556,0.5714],[0.7556,0.6032],[0.7667,0.0317],[0.7667,0.0635],[0.7667,0.0952],[0.7667,0.127],[0.7667,0.2857],[0.7667,0.3175],[0.7667,0.3492],[0.7667,0.6032],[0.7778,0.0317],[0.7778,0.0635],[0.7778,0.0952],[0.7778,0.127],[0.7778,0.2857],[0.7778,0.3175],[0.7778,0.3492],[0.7778,0.381],[0.7778,0.6032],[0.7889,0.0317],[0.7889,0.0635],[0.7889,0.0952],[0.7889,0.127],[0.7889,0.2857],[0.7889,0.3175],[0.7889,0.3492],[0.7889,0.381],[0.7889,0.6032],[0.7889,0.6349],[0.7889,0.7619],[0.7889,0.7937],[0.8,0.0317],[0.8,0.0635],[0.8,0.0952],[0.8,0.127],[0.8,0.2857],[0.8,0.3175],[0.8,0.3492],[0.8,0.381],[0.8,0.5397],[0.8,0.6032],[0.8,0.6349],[0.8,0.7619],[0.8,0.7937],[0.8,0.8254],[0.8111,0.0317],[0.8111,0.0635],[0.8111,0.0952],[0.8111,0.127],[0.8111,0.2857],[0.8111,0.3175],[0.8111,0.3492],[0.8111,0.381],[0.8111,0.4762],[0.8111,0.5079],[0.8111,0.5397],[0.8111,0.6349],[0.8111,0.7302],[0.8111,0.7619],[0.8111,0.7937],[0.8111,0.8254],[0.8222,0.0317],[0.8222,0.0635],[0.8222,0.0952],[0.8222,0.4762],[0.8222,0.5079],[0.8222,0.5397],[0.8222,0.6349],[0.8222,0.7302],[0.8222,0.7619],[0.8222,0.7937],[0.8222,0.8254],[0.8222,0.8571],[0.8333,0.0317],[0.8333,0.0635],[0.8333,0.0952],[0.8333,0.6984],[0.8333,0.7302],[0.8333,0.7619],[0.8333,0.7937],[0.8333,0.8254],[0.8333,0.8571],[0.8444,0.0317],[0.8444,0.0635],[0.8444,0.0952],[0.8444,0.2857],[0.8444,0.6984],[0.8444,0.7302],[0.8444,0.7619],[0.8444,0.7937],[0.8444,0.8254],[0.8444,0.8571],[0.8556,0.0317],[0.8556,0.0635],[0.8556,0.0952],[0.8556,0.254],[0.8556,0.2857],[0.8556,0.7302],[0.8556,0.7619],[0.8556,0.7937],[0.8556,0.8254],[0.8556,0.8571],[0.8667,0.0317],[0.8667,0.0635],[0.8667,0.0952],[0.8667,0.254],[0.8667,0.7302],[0.8667,0.7619],[0.8667,0.7937],[0.8667,0.8254],[0.8667,0.8571],[0.8778,0.0317],[0.8778,0.0635],[0.8778,0.0952],[0.8778,0.7619],[0.8778,0.7937],[0.8778,0.8254],[0.8778,0.8571],[0.8889,0.0317],[0.8889,0.0635],[0.9,0.0317],[0.9,0.0635],[0.9111,0.0317],[0.9111,0.0635],[0.9222,0.0317],[0.9222,0.0635],[0.9333,0.0317],[0.9333,0.0635],[0.9444,0.9206]];
function initStratMap(canvas){
  var ctx=canvas.getContext('2d');
  var host=canvas.parentNode;
  var W=0,H=0,dpr=1;
  var st=DOTS.map(function(){return 0;});
  var mx=-9999,my=-9999,has=false;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize(){dpr=Math.min(window.devicePixelRatio||1,2);var r=canvas.getBoundingClientRect();W=r.width;H=r.height;canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  function draw(){ctx.clearRect(0,0,W,H);for(var i=0;i<DOTS.length;i++){var dx=DOTS[i][0]*W,dy=DOTS[i][1]*H,inf=st[i],ox=0,oy=0;if(inf>0.002){var ax=dx-mx,ay=dy-my,d=Math.sqrt(ax*ax+ay*ay)||1;ox=ax/d*inf*4;oy=ay/d*inf*4;}var rr=1.5+inf*1.6;var a=0.3+inf*0.42;var cr=Math.round(120-44*inf),cg=Math.round(124-58*inf),cb=Math.round(190+12*inf);ctx.fillStyle='rgba('+cr+','+cg+','+cb+','+a+')';ctx.beginPath();ctx.arc(dx+ox,dy+oy,rr,0,6.2832);ctx.fill();}}
  function frame(){var R=Math.max(W,H)*0.16,R2=R*R;for(var i=0;i<DOTS.length;i++){var dx=DOTS[i][0]*W,dy=DOTS[i][1]*H,t=0;if(has&&!reduce){var ax=dx-mx,ay=dy-my,dd=ax*ax+ay*ay;if(dd<R2){t=1-Math.sqrt(dd)/R;}}st[i]+=(t-st[i])*0.12;}draw();requestAnimationFrame(frame);}
  function move(e){var r=canvas.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;has=true;}
  function leave(){has=false;}
  host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);
  resize();window.addEventListener('resize',resize);requestAnimationFrame(frame);
}

window.__initStratMap = initStratMap;
})();


/* ===== parts ===== */

/* ===================== PARTS SEARCH APP ===================== */
(function(){
  var ICONS = {
    rotable:'<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="20" stroke="#2f27ce" stroke-width="2.2"/><circle cx="32" cy="32" r="7" stroke="#2f27ce" stroke-width="2.2"/><g stroke="#7c75ff" stroke-width="2"><path d="M32 12v8M32 44v8M12 32h8M44 32h8M18 18l6 6M40 40l6 6M46 18l-6 6M24 40l-6 6"/></g></svg>',
    avionics:'<svg viewBox="0 0 64 64" fill="none"><rect x="12" y="16" width="40" height="32" rx="3" stroke="#2f27ce" stroke-width="2.2"/><path d="M18 24h12M18 30h20M18 36h16" stroke="#7c75ff" stroke-width="2" stroke-linecap="round"/><circle cx="44" cy="26" r="3" fill="#2f27ce"/></svg>',
    gear:'<svg viewBox="0 0 64 64" fill="none"><path d="M32 10v20M32 30l-12 18M32 30l12 18" stroke="#2f27ce" stroke-width="2.4" stroke-linecap="round"/><circle cx="32" cy="10" r="5" stroke="#2f27ce" stroke-width="2.2"/><circle cx="20" cy="50" r="5" stroke="#7c75ff" stroke-width="2.2"/><circle cx="44" cy="50" r="5" stroke="#7c75ff" stroke-width="2.2"/></svg>',
    hydraulic:'<svg viewBox="0 0 64 64" fill="none"><rect x="16" y="20" width="32" height="24" rx="3" stroke="#2f27ce" stroke-width="2.2"/><path d="M24 20v-6M40 20v-6M16 32h-6M54 32h-6" stroke="#7c75ff" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="32" r="6" stroke="#2f27ce" stroke-width="2.2"/></svg>',
    llp:'<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="6" stroke="#2f27ce" stroke-width="2.2"/><g stroke="#2f27ce" stroke-width="2.2"><path d="M32 26c-9-12-9-12 0-16M32 38c9 12 9 12 0 16M26 32c-12 9-12 9-16 0M38 32c12-9 12-9 16 0"/></g></svg>',
    consumable:'<svg viewBox="0 0 64 64" fill="none"><path d="M22 14h20l-2 10H24l-2-10Z" stroke="#2f27ce" stroke-width="2.2" stroke-linejoin="round"/><path d="M24 24l-2 26h20l-2-26" stroke="#2f27ce" stroke-width="2.2" stroke-linejoin="round"/><path d="M26 34h12" stroke="#7c75ff" stroke-width="2" stroke-linecap="round"/></svg>',
    gse:'<svg viewBox="0 0 64 64" fill="none"><path d="M14 40h24l8-12h6v12" stroke="#2f27ce" stroke-width="2.2" stroke-linejoin="round"/><circle cx="22" cy="46" r="5" stroke="#2f27ce" stroke-width="2.2"/><circle cx="44" cy="46" r="5" stroke="#7c75ff" stroke-width="2.2"/><path d="M14 28v12" stroke="#7c75ff" stroke-width="2"/></svg>',
    rotor:'<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="5" fill="#2f27ce"/><g stroke="#2f27ce" stroke-width="2.2" stroke-linecap="round"><path d="M32 27V8M32 37v19M27 32H8M37 32h19"/></g><circle cx="32" cy="8" r="3" fill="#7c75ff"/><circle cx="32" cy="56" r="3" fill="#7c75ff"/></svg>'
  };

  // category -> {label, icon}
  var CATS = {
    all:'All',rotable:'Rotables',avionics:'Avionics',llp:'Life-Limited',consumable:'Consumables',gse:'Tools & GSE',defence:'Defence'
  };

  // sample live inventory (representative, doc-aligned)
  var DATA = [
    {pn:'3-1530-3',  desc:'Main landing gear actuator',          cat:'rotable',  icon:'gear',     platform:'B737 NG',  cond:'OH', trace:'EASA Form 1', status:'avail'},
    {pn:'D2472-1',   desc:'Hydraulic pump, engine-driven',        cat:'rotable',  icon:'hydraulic',platform:'B737 Classic',cond:'SV',trace:'FAA 8130-3',status:'instock'},
    {pn:'622-8971-001',desc:'VHF communications transceiver',     cat:'avionics', icon:'avionics', platform:'ATR 72',   cond:'OH', trace:'EASA Form 1', status:'avail'},
    {pn:'2587M21P03',desc:'HPT turbine disk, life-limited',        cat:'llp',      icon:'llp',      platform:'CFM56-7B', cond:'SV', trace:'Full back-to-birth',status:'instock'},
    {pn:'AS3084',    desc:'Starter generator, 30kVA',             cat:'rotable',  icon:'rotable',  platform:'ATR 42/72',cond:'OH', trace:'EASA Form 1', status:'avail'},
    {pn:'MS21042L3', desc:'Self-locking nut, A286 (pk/100)',      cat:'consumable',icon:'consumable',platform:'Universal',cond:'NE',trace:'C of C',     status:'dispatch'},
    {pn:'69-37590-3',desc:'Flight control actuator, aileron',     cat:'rotable',  icon:'gear',     platform:'B737 MAX', cond:'OH', trace:'EASA Form 1', status:'instock'},
    {pn:'M83248/1-012',desc:'O-ring, fluorocarbon (pk/50)',       cat:'consumable',icon:'consumable',platform:'Universal',cond:'NE',trace:'C of C',     status:'avail'},
    {pn:'BACB30NN5', desc:'Hi-Lok pin, titanium (pk/250)',        cat:'consumable',icon:'consumable',platform:'Boeing family',cond:'NE',trace:'C of C', status:'avail'},
    {pn:'L21-2231',  desc:'Brake control valve assembly',         cat:'rotable',  icon:'hydraulic',platform:'B737 NG',  cond:'SV', trace:'FAA 8130-3',  status:'instock'},
    {pn:'9550-4',    desc:'Compressor blade set, stage 2',        cat:'llp',      icon:'llp',      platform:'PW127',    cond:'SV', trace:'Full trace',  status:'instock'},
    {pn:'3214000-7', desc:'Air data computer (ADC)',              cat:'avionics', icon:'avionics', platform:'B737 NG',  cond:'OH', trace:'EASA Form 1', status:'avail'},
    {pn:'GSE-JK-25', desc:'Tripod aircraft jack, 25-ton',         cat:'gse',      icon:'gse',      platform:'Wide-body',cond:'NE', trace:'C of C',      status:'dispatch'},
    {pn:'BSCP-9',    desc:'Borescope inspection kit',             cat:'gse',      icon:'gse',      platform:'Engine shop',cond:'NE',trace:'C of C',     status:'avail'},
    {pn:'8814-6M17', desc:'Tail rotor gearbox fitting assy',      cat:'defence',  icon:'rotor',    platform:'Mi-17',    cond:'OH', trace:'Mil cert',    status:'instock'},
    {pn:'70400-08145',desc:'Main rotor blade bushing',            cat:'defence',  icon:'rotor',    platform:'UH-60',    cond:'NE', trace:'Mil cert',    status:'avail'},
    {pn:'S92-3201',  desc:'Hydraulic servo, fitting assembly',    cat:'defence',  icon:'rotor',    platform:'Sikorsky S-92',cond:'OH',trace:'Mil cert', status:'instock'},
    {pn:'MIL-PRF-23699',desc:'Turbine engine oil (case/24)',      cat:'consumable',icon:'consumable',platform:'POL — MIL spec',cond:'NE',trace:'C of C / batch',status:'avail'},
    {pn:'PLASTI-GRIT-20',desc:'Plastic blast media, type V',      cat:'consumable',icon:'consumable',platform:'MRO',     cond:'NE', trace:'C of C',      status:'dispatch'},
    {pn:'42100-100', desc:'APU fuel control unit',                cat:'rotable',  icon:'rotable',  platform:'ATR 72',   cond:'OH', trace:'EASA Form 1', status:'instock'},
    {pn:'10-62092-3',desc:'Proximity sensor, landing gear',       cat:'avionics', icon:'avionics', platform:'B737 NG',  cond:'NE', trace:'FAA 8130-3',  status:'avail'},
    {pn:'2-301-5',   desc:'Wheel assembly, main',                 cat:'rotable',  icon:'rotable',  platform:'B737 Classic',cond:'OH',trace:'EASA Form 1',status:'avail'},
    {pn:'NAS1149',   desc:'Flat washer, CRES (pk/500)',           cat:'consumable',icon:'consumable',platform:'Universal',cond:'NE',trace:'C of C',     status:'avail'},
    {pn:'TQW-340',   desc:'Digital torque wrench, calibrated',    cat:'gse',      icon:'gse',      platform:'Line maint',cond:'NE',trace:'Cal cert',    status:'instock'}
  ];

  /* ============================================================
     EXTENDED PARTS DATABASE (50,000+ records) — virtualized.
     Synthesized deterministically from realistic aviation
     manufacturer / platform / ATA-chapter / category matrices,
     then merged with the curated live DATA above. The full-DB
     table is paginated (the DOM never holds 50k rows at once).
     ============================================================ */
  var XDB = (function(){
    var MFRS=['Honeywell','Collins Aerospace','Safran','GE Aerospace','Parker Hannifin','Eaton','Meggitt','Liebherr','Thales','Moog','Crane Aerospace','Woodward','Triumph Group','RTX','Spirit AeroSystems','Diehl Aviation','GKN Aerospace','Zodiac Aerospace','Goodrich','Ametek'];
    var MFRCODE={Honeywell:'HON',['Collins Aerospace']:'COL',Safran:'SAF',['GE Aerospace']:'GEA',['Parker Hannifin']:'PKR',Eaton:'EAT',Meggitt:'MEG',Liebherr:'LBH',Thales:'THL',Moog:'MOG',['Crane Aerospace']:'CRN',Woodward:'WWD',['Triumph Group']:'TRI',RTX:'RTX',['Spirit AeroSystems']:'SPR',['Diehl Aviation']:'DHL',['GKN Aerospace']:'GKN',['Zodiac Aerospace']:'ZOD',Goodrich:'GDR',Ametek:'AMK'};
    var PLATFORMS=['B737 NG','B737 MAX','B737 Classic','B747-400','B747-8','B757','B767','B777','B787','A220','A319','A320','A321','A320neo','A330','A330neo','A350','A380','ATR 42','ATR 72','E170','E175','E190','E195','CRJ700','CRJ900','Q400','CFM56-7B','CFM56-5B','LEAP-1A','LEAP-1B','V2500','PW127','Trent 700','Trent 1000','GEnx','CF6-80','C130','UH-60','Mi-17','S-92','AW139'];
    var ATA=[['21','Air Conditioning'],['22','Auto Flight'],['23','Communications'],['24','Electrical Power'],['25','Equipment/Furnishings'],['26','Fire Protection'],['27','Flight Controls'],['28','Fuel'],['29','Hydraulic Power'],['30','Ice & Rain Protection'],['31','Indicating/Recording'],['32','Landing Gear'],['33','Lights'],['34','Navigation'],['35','Oxygen'],['36','Pneumatic'],['38','Water/Waste'],['49','APU'],['52','Doors'],['57','Wings'],['71','Power Plant'],['72','Engine'],['73','Engine Fuel & Control'],['77','Engine Indicating'],['79','Oil']];
    var CATKEYS=['rotable','avionics','llp','consumable','gse','defence'];
    var COMPS={
      rotable:['Actuator','Valve assembly','Pump','Servo','Motor','Gearbox','Wheel assembly','Brake assembly','Heat exchanger','Generator','Control unit','Manifold','Selector valve','Accumulator','Reservoir'],
      avionics:['Transceiver','Air data computer','Display unit','Receiver','Flight management computer','Proximity sensor','Antenna','Control panel','Power supply','Processor module','Transponder','Radio altimeter','Inertial reference unit'],
      llp:['Turbine disk','Compressor blade set','HPT seal','Fan disk','Spool assembly','Shaft','Combustor liner','Turbine nozzle','Compressor disk'],
      consumable:['O-ring kit','Self-locking nut','Hi-Lok pin','Flat washer','Bonded seal','Filter element','Bracket','Clamp','Bushing','Gasket set','Bearing','Hose assembly'],
      gse:['Tripod jack','Borescope kit','Torque wrench','Test set','Ground power unit','Tow bar','Calibration kit','Hydraulic cart','Engine stand','Sling assembly'],
      defence:['Rotor fitting','Gearbox fitting','Servo assembly','Blade bushing','Armament bracket','Mount assembly','Hydraulic servo','Sensor housing']
    };
    var CONDS=['NE','OH','SV','RP','AR'];
    var TRACE={NE:'C of C',OH:'EASA Form 1',SV:'FAA 8130-3',RP:'FAA 8130-3',AR:'Tag / as-removed'};
    var STAT=['avail','instock','dispatch'];
    // deterministic PRNG (mulberry32) so the catalogue is stable across renders
    function rng(seed){ return function(){ seed|=0; seed=seed+0x6D2B79F5|0; var t=Math.imul(seed^seed>>>15,1|seed); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
    var r=rng(0x9E3779B1);
    function pick(a){ return a[Math.floor(r()*a.length)]; }
    var N=50000, list=new Array(N);
    var iconFor={rotable:'rotable',avionics:'avionics',llp:'llp',consumable:'consumable',gse:'gse',defence:'rotor'};
    for(var i=0;i<N;i++){
      var cat=pick(CATKEYS), mfr=pick(MFRS), plat=pick(PLATFORMS), ata=pick(ATA), comp=pick(COMPS[cat]), cond=pick(CONDS);
      var serial=(100000+Math.floor(r()*899999));
      var dash=Math.floor(r()*900+100);
      var pn=MFRCODE[mfr]+'-'+serial.toString().slice(0,4)+'-'+dash;
      var alt=String.fromCharCode(65+Math.floor(r()*26))+Math.floor(r()*90000+10000);
      list[i]={
        pn:pn, alt:alt, desc:comp+', '+plat, mfr:mfr, platform:plat,
        ata:ata[0], ataName:ata[1], cat:cat, icon:iconFor[cat],
        cond:cond, trace:TRACE[cond], status:pick(STAT)
      };
    }
    // merge curated live data at the front (normalize shape)
    var curated=DATA.map(function(d){ return {pn:d.pn, alt:d.alt||'—', desc:d.desc, mfr:d.mfr||'AMMAC sourced', platform:d.platform, ata:d.ata||'—', ataName:d.ataName||'', cat:d.cat, icon:d.icon, cond:d.cond, trace:d.trace, status:d.status}; });
    return curated.concat(list);
  })();

  var state = { q:'', cat:'all', cond:'all', sort:null, dir:1, page:1, per:25 };
  var $ = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }

  function condClass(c){ return c==='NE'?'NE':c==='OH'?'OH':(c==='SV'||c==='RP')?'SV':'AR'; }
  function statusLabel(s){ return s==='avail'?'Available':s==='instock'?'In Stock':'Ready to Dispatch'; }

  function filtered(){
    var q = state.q.trim().toLowerCase();
    var rows = XDB.filter(function(d){
      if(state.cat!=='all' && d.cat!==state.cat) return false;
      if(state.cond!=='all' && condClass(d.cond)!==state.cond) return false;
      if(!q) return true;
      return (d.pn+' '+(d.alt||'')+' '+d.desc+' '+(d.mfr||'')+' '+d.platform+' '+(d.ata||'')+' '+(d.ataName||'')+' '+d.cond+' '+(CATS[d.cat]||'')).toLowerCase().indexOf(q)>=0;
    });
    if(state.sort){
      var k = state.sort==='trace'?'trace':state.sort==='cond'?'cond':state.sort;
      rows.sort(function(a,b){
        var av=(a[k]||'').toString().toLowerCase(), bv=(b[k]||'').toString().toLowerCase();
        return av<bv?-state.dir:av>bv?state.dir:0;
      });
    }
    return rows;
  }

  /* live showcase cards stay on the curated, in-stock inventory */
  function filteredLive(){
    var q = state.q.trim().toLowerCase();
    return DATA.filter(function(d){
      if(state.cat!=='all' && d.cat!==state.cat) return false;
      if(state.cond!=='all' && condClass(d.cond)!==state.cond) return false;
      if(!q) return true;
      return (d.pn+' '+d.desc+' '+d.platform+' '+d.cond+' '+(CATS[d.cat]||'')).toLowerCase().indexOf(q)>=0;
    });
  }

  function renderChips(){
    var wrap = $('#ps-chips'); if(!wrap) return;
    wrap.innerHTML = Object.keys(CATS).map(function(k){
      return '<button class="ps-chip'+(state.cat===k?' is-active':'')+'" data-cat="'+k+'">'+CATS[k]+'</button>';
    }).join('');
    $$('.ps-chip',wrap).forEach(function(b){
      b.onclick=function(){ state.cat=b.dataset.cat; state.page=1; renderChips(); renderAll(); };
    });
    var cond = $('#ps-cond');
    var conds=[['all','All'],['NE','New'],['OH','OH'],['SV','SV/RP'],['AR','AR']];
    cond.innerHTML = conds.map(function(c){
      return '<button class="'+(state.cond===c[0]?'is-active':'')+'" data-cond="'+c[0]+'">'+c[1]+'</button>';
    }).join('');
    $$('button',cond).forEach(function(b){ b.onclick=function(){ state.cond=b.dataset.cond; state.page=1; renderChips(); renderAll(); }; });
  }

  function renderCards(rows){
    var grid = $('#ps-grid'), empty=$('#ps-empty');
    var show = rows.slice(0,8);
    if(rows.length===0){ grid.innerHTML=''; empty.style.display='block'; return; }
    empty.style.display='none';
    grid.innerHTML = show.map(function(d){
      return '<article class="ps-card" data-pn="'+d.pn+'" data-desc="'+d.desc+'" data-cond="'+d.cond+'" data-tilt>'
        +'<div class="ps-card-media" style="background:linear-gradient(135deg,#f4f3fb,#eceaff)">'
        +'<span class="ps-badge '+d.status+'">'+statusLabel(d.status)+'</span>'
        +(ICONS[d.icon]||ICONS.rotable)
        +'<span class="ps-card-sheen"></span></div>'
        +'<div class="ps-card-body">'
        +'<div class="ps-card-pn">'+d.pn+'</div>'
        +'<div class="ps-card-desc">'+d.desc+'</div>'
        +'<div class="ps-card-meta"><span class="ps-tag">'+d.platform+'</span><span class="ps-tag">'+(CATS[d.cat]||'')+'</span></div>'
        +'<div class="ps-card-foot"><span class="ps-card-cond">'+d.cond+' · '+d.trace+'</span>'
        +'<button class="ps-rfqbtn" type="button">RFQ <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
        +'</div></div></article>';
    }).join('');
    $$('.ps-card',grid).forEach(function(card){
      card.onclick=function(){ PARTS.openRFQ({pn:card.dataset.pn,desc:card.dataset.desc,cond:card.dataset.cond}); };
      attachTilt(card);
    });
  }

  function renderTable(rows){
    var tb=$('#ps-tbody'), te=$('#ps-table-empty');
    if(rows.length===0){ tb.innerHTML=''; te.style.display='block'; renderPager(0,0); return; }
    te.style.display='none';
    var per=state.per, total=rows.length, pages=Math.ceil(total/per);
    if(state.page>pages) state.page=pages; if(state.page<1) state.page=1;
    var start=(state.page-1)*per, slice=rows.slice(start,start+per);
    tb.innerHTML = slice.map(function(d){
      return '<tr data-pn="'+esc(d.pn)+'" data-desc="'+esc(d.desc)+'" data-cond="'+d.cond+'">'
        +'<td class="ps-pn-cell">'+esc(d.pn)+(d.alt&&d.alt!=='—'?'<span class="ps-altpn">alt '+esc(d.alt)+'</span>':'')+'</td>'
        +'<td>'+esc(d.desc)+'</td>'
        +'<td class="ps-mfr-cell">'+esc(d.mfr||'—')+'</td>'
        +'<td>'+esc(d.platform)+'</td>'
        +'<td class="ps-ata-cell">'+(d.ata&&d.ata!=='—'?'ATA '+d.ata:'—')+'</td>'
        +'<td><span class="ps-cond-pill ps-cond-'+condClass(d.cond)+'">'+d.cond+'</span></td>'
        +'<td style="text-align:right"><button class="ps-rowrfq" type="button">Send RFQ</button></td>'
        +'</tr>';
    }).join('');
    $$('#ps-tbody tr',tb).forEach(function(tr){
      tr.onclick=function(){ PARTS.openRFQ({pn:tr.dataset.pn,desc:tr.dataset.desc,cond:tr.dataset.cond}); };
    });
    renderPager(total,pages);
  }

  function renderPager(total,pages){
    var el=$('#ps-pager'); if(!el) return;
    if(total===0){ el.innerHTML=''; return; }
    var p=state.page, start=(p-1)*state.per+1, end=Math.min(p*state.per,total);
    function btn(label,target,dis,act){
      return '<button class="ps-pg-btn'+(act?' is-active':'')+'" '+(dis?'disabled':'data-pg="'+target+'"')+'>'+label+'</button>';
    }
    var nums='';
    var win=2, lo=Math.max(1,p-win), hi=Math.min(pages,p+win);
    if(lo>1){ nums+=btn('1',1,false,p===1); if(lo>2) nums+='<span class="ps-pg-ell">…</span>'; }
    for(var i=lo;i<=hi;i++) nums+=btn(String(i),i,false,i===p);
    if(hi<pages){ if(hi<pages-1) nums+='<span class="ps-pg-ell">…</span>'; nums+=btn(String(pages),pages,false,p===pages); }
    el.innerHTML='<div class="ps-pg-info">Showing <strong>'+start.toLocaleString()+'–'+end.toLocaleString()+'</strong> of <strong>'+total.toLocaleString()+'</strong> matching part numbers</div>'
      +'<div class="ps-pg-ctl">'+btn('‹ Prev',p-1,p<=1,false)+nums+btn('Next ›',p+1,p>=pages,false)+'</div>';
    $$('.ps-pg-btn[data-pg]',el).forEach(function(b){
      b.onclick=function(){ state.page=parseInt(b.dataset.pg,10); renderTable(filtered()); var t=$('.ps-table-wrap'); if(t&&t.scrollIntoView) t.scrollIntoView({behavior:'smooth',block:'start'}); };
    });
  }

  function renderAll(){
    var liveRows = filteredLive();
    var dbRows = filtered();
    var c=$('#ps-count'); if(c) c.textContent = dbRows.length.toLocaleString()+' of '+XDB.length.toLocaleString()+' indexed part numbers';
    renderCards(liveRows);
    renderTable(dbRows);
  }

  /* lightweight 3D tilt on cards */
  function attachTilt(el){
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if(window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    var raf;
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect();
      var px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(function(){
        el.style.transform='perspective(800px) rotateY('+(px*7)+'deg) rotateX('+(-py*7)+'deg) translateY(-4px)';
      });
    });
    el.addEventListener('mouseleave',function(){ cancelAnimationFrame(raf); el.style.transform=''; });
  }

  /* sorting */
  function wireSort(){
    $$('.ps-th-sort').forEach(function(th){
      th.onclick=function(){
        var k=th.dataset.sort;
        if(state.sort===k){ state.dir=-state.dir; } else { state.sort=k; state.dir=1; }
        $$('.ps-th-sort').forEach(function(x){ x.classList.remove('asc','desc'); });
        th.classList.add(state.dir>0?'asc':'desc');
        renderAll();
      };
    });
  }

  /* RFQ modal API */
  var PARTS = {
    openRFQ:function(line){
      var modal=$('#ps-rfq'); if(!modal) return;
      $('#ps-rfq-ok').style.display='none';
      $('.ps-form').style.display='grid';
      $('.ps-form-actions').style.display='flex';
      $('.ps-modal-head').style.display='block';
      var lineEl=$('#ps-rfq-line');
      if(line && line.pn){
        $('#rfq-pn').value=line.pn||''; $('#rfq-desc').value=line.desc||'';
        var cmap={NE:'New (NE)',OH:'Overhauled (OH)',SV:'Serviceable (SV)',RP:'Repaired (RP)',AR:'As Removed (AR)'};
        if(line.cond && cmap[line.cond]) $('#rfq-cond').value=cmap[line.cond];
        lineEl.style.display='block';
        lineEl.innerHTML='Requesting quote for <strong>'+line.pn+'</strong> — '+(line.desc||'');
      } else { lineEl.style.display='none'; $('#rfq-pn').value=''; $('#rfq-desc').value=''; }
      modal.style.display='flex';
      document.body.style.overflow='hidden';
      setTimeout(function(){ var f=$('#rfq-email'); if(f) f.focus(); },120);
    },
    closeRFQ:function(){ var m=$('#ps-rfq'); if(m){ m.style.display='none'; document.body.style.overflow=''; } },
    submitRFQ:function(){
      var email=$('#rfq-email').value.trim();
      if(!email || email.indexOf('@')<0){ $('#rfq-email').focus(); $('#rfq-email').style.borderColor='#D92D20'; return; }
      var ref='AMM-'+Date.now().toString(36).toUpperCase().slice(-6);
      var v=function(id){ var el=$('#'+id); return el?el.value.trim():''; };
      // compose the email to AMMAC sales
      var SALES='Sales@AMMACAircraft.com';
      var subject='RFQ '+ref+' — '+(v('rfq-pn')||'parts enquiry')+' ('+(v('rfq-pri')||'')+')';
      var L=[];
      L.push('New RFQ from the AMMAC parts portal');
      L.push('Reference: '+ref);
      L.push('');
      L.push('Part number: '+(v('rfq-pn')||'—'));
      L.push('Description: '+(v('rfq-desc')||'—'));
      L.push('Quantity: '+(v('rfq-qty')||'—'));
      L.push('Condition needed: '+(v('rfq-cond')||'—'));
      L.push('Priority: '+(v('rfq-pri')||'—'));
      L.push('Preferred hub: '+(v('rfq-hub')||'—'));
      L.push('');
      L.push('Requester email: '+email);
      L.push('Company: '+(v('rfq-co')||'—'));
      L.push('Notes: '+(v('rfq-notes')||'—'));
      L.push('');
      L.push('Sent from AMMACAircraft.com parts search.');
      var body=L.join('\r\n');
      var mailto='mailto:'+SALES+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      // open the user's email client with everything pre-filled
      try{ window.location.href=mailto; }catch(e){ window.open(mailto,'_blank'); }
      // persist to the enterprise platform (admin RFQ inbox + CRM)
      try{
        if(window.AMMAC_PLATFORM && window.AMMAC_PLATFORM.recordRFQ){
          window.AMMAC_PLATFORM.recordRFQ({
            ref:ref, pn:v('rfq-pn'), desc:v('rfq-desc'), qty:v('rfq-qty'),
            cond:v('rfq-cond'), priority:v('rfq-pri'), hub:v('rfq-hub'),
            email:email, company:v('rfq-co'), notes:v('rfq-notes')
          });
        }
      }catch(e){}
      // show confirmation
      $('.ps-form').style.display='none';
      $('.ps-form-actions').style.display='none';
      $('.ps-modal-head').style.display='none';
      $('#ps-rfq-line').style.display='none';
      $('#ps-rfq-ok-msg').innerHTML='Reference <strong>'+ref+'</strong>. Your email app is opening a pre-filled RFQ to <strong>Sales@AMMACAircraft.com</strong> — just press send. If nothing opened, email us directly at <a href="'+mailto+'" style="color:#2f27ce;font-weight:600">Sales@AMMACAircraft.com</a>.';
      $('#ps-rfq-ok').style.display='block';
    }
  };
  window.PARTS = PARTS;

  /* keyboard: "/" focuses search, Esc closes modal */
  document.addEventListener('keydown',function(e){
    if(e.key==='/' && document.querySelector('.amm-page[data-page="parts"]') && document.querySelector('.amm-page[data-page="parts"]').style.display!=='none'){
      var f=$('#ps-search'); if(f && document.activeElement!==f){ e.preventDefault(); f.focus(); }
    }
    if(e.key==='Escape'){ PARTS.closeRFQ(); }
  });

  function bootPartsPage(){
    if(window.__partsBooted) return;
    var search=$('#ps-search'); if(!search) return;
    window.__partsBooted=true;
    search.addEventListener('input',function(){
      state.q=search.value; state.page=1;
      $('#ps-clear').style.display = search.value?'block':'none';
      renderAll();
    });
    $('#ps-clear').onclick=function(){ search.value=''; state.q=''; $('#ps-clear').style.display='none'; renderAll(); search.focus(); };
    renderChips(); wireSort(); renderAll();
    // animate hero counters
    animateCounters();
  }
  window.__bootPartsPage = bootPartsPage;

  function animateCounters(){
    $$('.ps-statnum').forEach(function(el){
      var target=parseInt(el.dataset.count,10)||0, suf=el.dataset.suffix||'';
      var dur=1400, t0=null;
      function step(ts){
        if(!t0) t0=ts; var p=Math.min((ts-t0)/dur,1);
        var eased=1-Math.pow(1-p,3);
        el.textContent=Math.round(target*eased).toLocaleString()+ (p>=1?suf:'');
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
})();



/* ===== platform ===== */

/* =================================================================
   AMMAC ENTERPRISE PLATFORM  —  client-side operational core
   Persistence: localStorage (namespaced).  Auth: demo admin/AMMAC@2026.
   Modules: store · auth · dashboard · RFQ · CRM leads · orders ·
            inventory CRUD + bulk CSV · analytics · extended parts DB.
   ================================================================= */
(function(){
  'use strict';

  /* ---------------- STORE ---------------- */
  var NS = 'ammac:v1:';
  function load(key, def){
    try{ var raw = localStorage.getItem(NS+key); return raw ? JSON.parse(raw) : def; }
    catch(e){ return def; }
  }
  function save(key, val){
    try{ localStorage.setItem(NS+key, JSON.stringify(val)); }catch(e){}
  }
  function uid(p){ return (p||'ID')+'-'+Date.now().toString(36).toUpperCase().slice(-5)+Math.random().toString(36).slice(2,4).toUpperCase(); }
  function nowISO(){ return new Date().toISOString(); }
  function fmtDate(iso){ if(!iso) return '—'; var d=new Date(iso); return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
  function fmtDT(iso){ if(!iso) return '—'; var d=new Date(iso); return d.toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}); }
  function money(n){ if(n==null||isNaN(n)) return '—'; return '$'+Number(n).toLocaleString('en-US',{maximumFractionDigits:0}); }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }

  /* ---------------- SEED DATA ---------------- */
  var SEED_INVENTORY = [
    {pn:'3-1530-3',alt:'31530-3',desc:'Main landing gear actuator',mfr:'Collins Aerospace',aircraft:'A320 family',ata:'32',cat:'rotable',cond:'OH',qty:3,loc:'DXB-A12',cost:14200,price:21900,lead:'Stock',cert:'EASA Form 1',status:'avail'},
    {pn:'622-4096-001',alt:'6224096',desc:'VHF comm transceiver',mfr:'Rockwell Collins',aircraft:'B737 NG',ata:'23',cat:'avionics',cond:'SV',qty:6,loc:'DXB-B03',cost:5400,price:8900,lead:'Stock',cert:'FAA 8130-3',status:'instock'},
    {pn:'AV-22008',alt:'',desc:'Static inverter, 115VAC',mfr:'Honeywell',aircraft:'A320 family',ata:'24',cat:'avionics',cond:'OH',qty:2,loc:'SIN-A05',cost:7100,price:11200,lead:'Stock',cert:'EASA Form 1',status:'avail'},
    {pn:'9550-4',alt:'',desc:'Compressor blade set, stage 2',mfr:'Pratt & Whitney',aircraft:'PW127',ata:'72',cat:'llp',cond:'SV',qty:1,loc:'DXB-E01',cost:18600,price:27400,lead:'Stock',cert:'Full trace',status:'instock'},
    {pn:'42100-100',alt:'42100100',desc:'APU fuel control unit',mfr:'Honeywell',aircraft:'ATR 72',ata:'49',cat:'rotable',cond:'OH',qty:4,loc:'SIN-B11',cost:9300,price:14800,lead:'Stock',cert:'EASA Form 1',status:'instock'},
    {pn:'2-301-5',alt:'2301-5',desc:'Wheel assembly, main',mfr:'Safran',aircraft:'B737 Classic',ata:'32',cat:'rotable',cond:'OH',qty:8,loc:'DXB-C07',cost:2100,price:3600,lead:'Stock',cert:'EASA Form 1',status:'avail'},
    {pn:'M83248/1-012',alt:'',desc:'O-ring, fluorocarbon (pk/50)',mfr:'Parker',aircraft:'Universal',ata:'—',cat:'consumable',cond:'NE',qty:240,loc:'DXB-K02',cost:48,price:96,lead:'Stock',cert:'C of C',status:'avail'},
    {pn:'BACB30NN5',alt:'',desc:'Hi-Lok pin, titanium (pk/250)',mfr:'Boeing',aircraft:'B737 family',ata:'—',cat:'consumable',cond:'NE',qty:60,loc:'DXB-K05',cost:310,price:520,lead:'Stock',cert:'C of C',status:'avail'},
    {pn:'3214000-7',alt:'',desc:'Air data computer (ADC)',mfr:'Honeywell',aircraft:'B737 NG',ata:'34',cat:'avionics',cond:'OH',qty:2,loc:'SIN-A02',cost:12700,price:19500,lead:'2 days',cert:'EASA Form 1',status:'avail'},
    {pn:'10-62092-3',alt:'',desc:'Proximity sensor, landing gear',mfr:'Eaton',aircraft:'B737 NG',ata:'32',cat:'avionics',cond:'NE',qty:14,loc:'DXB-B09',cost:880,price:1480,lead:'Stock',cert:'FAA 8130-3',status:'avail'},
    {pn:'L21-2231',alt:'',desc:'Brake control valve assembly',mfr:'Crane',aircraft:'B737 NG',ata:'32',cat:'rotable',cond:'SV',qty:0,loc:'DXB-C03',cost:6200,price:9900,lead:'5-7 days',cert:'FAA 8130-3',status:'low'},
    {pn:'NAS1149',alt:'',desc:'Flat washer, CRES (pk/500)',mfr:'NAS',aircraft:'Universal',ata:'—',cat:'consumable',cond:'NE',qty:500,loc:'DXB-K11',cost:62,price:120,lead:'Stock',cert:'C of C',status:'avail'},
    {pn:'8814-6M17',alt:'',desc:'Tail rotor gearbox fitting assy',mfr:'Mil',aircraft:'Mi-17',ata:'63',cat:'defence',cond:'OH',qty:1,loc:'SIN-D01',cost:21000,price:31500,lead:'Stock',cert:'Mil cert',status:'instock'},
    {pn:'70400-08145',alt:'',desc:'Main rotor blade bushing',mfr:'Sikorsky',aircraft:'UH-60',ata:'62',cat:'defence',cond:'NE',qty:5,loc:'SIN-D04',cost:3400,price:5600,lead:'Stock',cert:'Mil cert',status:'avail'},
    {pn:'TQW-340',alt:'',desc:'Digital torque wrench, calibrated',mfr:'Snap-on',aircraft:'Line maint',ata:'—',cat:'gse',cond:'NE',qty:3,loc:'DXB-G02',cost:640,price:1100,lead:'Stock',cert:'Cal cert',status:'instock'},
    {pn:'GSE-JK-25',alt:'',desc:'Tripod aircraft jack, 25-ton',mfr:'Tronair',aircraft:'Wide-body',ata:'—',cat:'gse',cond:'NE',qty:2,loc:'DXB-G05',cost:8800,price:13200,lead:'7 days',cert:'C of C',status:'low'},
    {pn:'MIL-PRF-23699',alt:'',desc:'Turbine engine oil (case/24)',mfr:'Mobil',aircraft:'POL — MIL spec',ata:'79',cat:'consumable',cond:'NE',qty:36,loc:'DXB-K20',cost:520,price:880,lead:'Stock',cert:'C of C / batch',status:'avail'},
    {pn:'S92-3201',alt:'',desc:'Hydraulic servo, fitting assembly',mfr:'Sikorsky',aircraft:'Sikorsky S-92',ata:'29',cat:'defence',cond:'OH',qty:1,loc:'SIN-D07',cost:15400,price:23100,lead:'Stock',cert:'Mil cert',status:'instock'}
  ];

  var COMPANIES = ['Etihad Engineering','SriLankan Airlines','Garuda Maintenance','Royal Jordanian','Kenya Airways','Air Astana','Vietnam Airlines','Cebu Pacific','Oman Air','flydubai','Gulf Air','Bangkok Airways','Biman Bangladesh','Air Mauritius','Nepal Airlines'];
  var CONTACTS = ['Omar Haddad','Priya Nair','Budi Santoso','Lina Khoury','James Mwangi','Aigerim B.','Tran Minh','Maria Santos','Salim Al-Harthi','Reza Karimi','Fatima Noor','Chai W.','Imran Hossain','David Roux','Bina Shah'];
  var COUNTRIES = ['UAE','Sri Lanka','Indonesia','Jordan','Kenya','Kazakhstan','Vietnam','Philippines','Oman','UAE','Bahrain','Thailand','Bangladesh','Mauritius','Nepal'];
  var LEAD_STAGES = ['New','RFQ','Qualified','Quote Sent','Negotiation','Won','Lost'];
  var STAGE_COLOR = {New:'gray',RFQ:'blue',Qualified:'purple',"Quote Sent":'amber',Negotiation:'amber',Won:'green',Lost:'red'};
  var ORDER_STAGES = ['RFQ Received','Quote Sent','Order Confirmed','Payment Pending','Payment Received','Picking','Packing','Shipped','Delivered','Closed'];

  function seedLeadsOrders(){
    var inv = state.inventory;
    var leads=[], orders=[];
    for(var i=0;i<15;i++){
      var part = inv[i % inv.length];
      var stage = LEAD_STAGES[i % LEAD_STAGES.length];
      var created = new Date(Date.now() - (i*3+2)*86400000).toISOString();
      var lead = {
        id: uid('LEAD'), company:COMPANIES[i], contact:CONTACTS[i], email:(CONTACTS[i].split(' ')[0].toLowerCase())+'@'+COMPANIES[i].toLowerCase().replace(/[^a-z]/g,'')+'.com',
        phone:'+'+(20+i)+' '+(100000000+i*37).toString().slice(0,9), country:COUNTRIES[i], source:['Parts Portal','AOG Desk','Email','Referral','Trade Show'][i%5],
        stage:stage, value: part.price*(1+(i%4)), parts:[{pn:part.pn,desc:part.desc,qty:1+(i%5)}],
        notes:'', created:created, updated:created,
        history:[{t:created,e:'Lead created via '+['Parts Portal','AOG Desk','Email','Referral','Trade Show'][i%5]}]
      };
      if(stage==='Quote Sent'||stage==='Negotiation'||stage==='Won'){ lead.history.push({t:new Date(Date.parse(created)+86400000).toISOString(),e:'Quote sent — '+money(lead.value)}); }
      if(stage==='Won'){ lead.history.push({t:new Date(Date.parse(created)+3*86400000).toISOString(),e:'Deal won'}); }
      leads.push(lead);
      if(stage==='Won' || stage==='Negotiation' || i%3===0){
        var ostageIdx = stage==='Won' ? (6+(i%4)) : (i%6);
        var order = {
          id: uid('ORD'), num:'AM-ORD-'+(1042+i), customer:lead.company, contact:lead.contact, leadId:lead.id,
          parts:lead.parts, qty:lead.parts.reduce(function(a,p){return a+p.qty;},0), value:lead.value,
          stage:ORDER_STAGES[ostageIdx], created:new Date(Date.parse(created)+2*86400000).toISOString(),
          updated:new Date(Date.parse(created)+2*86400000).toISOString(), invoice: ostageIdx>=4?'Paid':'Pending', track: ostageIdx>=7?'TRK'+(80345+i):''
        };
        orders.push(order);
      }
    }
    return {leads:leads, orders:orders};
  }

  /* ---------------- STATE ---------------- */
  var state = {
    auth: false,
    view: 'dashboard',
    inventory: load('inventory', null),
    leads: load('leads', null),
    customers: load('customers', null),
    rfqs: load('rfqs', null),
    orders: load('orders', null),
    _otp: null
  };
  if(!state.inventory){ state.inventory = SEED_INVENTORY.map(function(p){ p.id=uid('PART'); p.images=[]; p.created=nowISO(); return p; }); save('inventory', state.inventory); }
  if(!state.leads || !state.orders){
    var s = seedLeadsOrders();
    if(!state.leads){ state.leads = s.leads; save('leads', state.leads); }
    if(!state.orders){ state.orders = s.orders; save('orders', state.orders); }
  }
  if(!state.customers){ state.customers = []; save('customers', state.customers); }
  if(!state.rfqs){ state.rfqs = []; save('rfqs', state.rfqs); }

  function persist(k){ save(k, state[k]); }

  /* ---------------- UI HELPERS ---------------- */
  var $ = function(s,r){ return (r||document).querySelector(s); };
  var $$ = function(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };
  var toastT;
  function toast(msg){
    var t=$('#pf-toast'); if(!t) return; t.textContent=msg; t.classList.add('show');
    clearTimeout(toastT); toastT=setTimeout(function(){ t.classList.remove('show'); },2400);
  }
  function setCounts(){
    var map={rfqs:state.rfqs.filter(function(r){return r.status!=='closed';}).length,
             leads:state.leads.filter(function(l){return l.stage!=='Won'&&l.stage!=='Lost';}).length,
             orders:state.orders.filter(function(o){return o.stage!=='Closed';}).length,
             inventory:state.inventory.length};
    $$('.pf-count').forEach(function(el){ var k=el.getAttribute('data-count'); if(map[k]!=null) el.textContent=map[k]; });
  }

  /* ---------------- AUTH ---------------- */
  var PF = {};
  PF.login = function(){
    var u=$('#pf-user').value.trim(), p=$('#pf-pass').value, err=$('#pf-login-err');
    if(u==='admin' && p==='AMMAC@2026'){
      state.auth=true; sessionStorage.setItem(NS+'auth','1');
      $('#pf-login-view').style.display='none'; $('#pf-reset-view').style.display='none';
      $('#pf-console-view').style.display='block';
      PF.go(state.view||'dashboard');
    } else {
      err.textContent='Invalid credentials. Use admin / AMMAC@2026.';
      $('#pf-pass').focus();
    }
  };
  PF.logout = function(){
    state.auth=false; sessionStorage.removeItem(NS+'auth');
    $('#pf-console-view').style.display='none'; $('#pf-reset-view').style.display='none';
    $('#pf-login-view').style.display='flex';
    $('#pf-pass').value=''; $('#pf-login-err').textContent='';
  };
  PF.showReset=function(){ $('#pf-login-view').style.display='none'; $('#pf-reset-view').style.display='flex'; $('#pf-otp-step1').style.display='block'; $('#pf-otp-step2').style.display='none'; $('#pf-reset-msg').textContent=''; };
  PF.showLogin=function(){ $('#pf-reset-view').style.display='none'; $('#pf-login-view').style.display='flex'; };
  PF.sendOtp=function(){
    state._otp = (''+Math.floor(100000+Math.random()*900000));
    $('#pf-otp-step1').style.display='none'; $('#pf-otp-step2').style.display='block';
    var m=$('#pf-reset-msg'); m.style.color='var(--pf-green)';
    m.innerHTML='OTP issued to Sales@AMMACAircraft.com. (Demo code: <strong>'+state._otp+'</strong>)';
  };
  PF.verifyOtp=function(){
    var v=$('#pf-otp-input').value.trim(), m=$('#pf-reset-msg');
    if(v===state._otp){ m.style.color='var(--pf-green)'; m.textContent='Verified. In production you would now set a new password.'; setTimeout(PF.showLogin,1600); }
    else { m.style.color='var(--pf-red)'; m.textContent='Incorrect OTP. Try again.'; }
  };

  PF.toggleSide=function(){ $('#pf-side').classList.toggle('open'); };

  /* ---------------- ROUTER (within console) ---------------- */
  PF.go = function(view){
    state.view = view;
    $$('.pf-nav-item').forEach(function(b){ b.classList.toggle('is-active', b.getAttribute('data-view')===view); });
    var el=$('#pf-view'); if(!el) return;
    if(view==='dashboard') el.innerHTML = viewDashboard();
    else if(view==='rfqs') el.innerHTML = viewRFQs();
    else if(view==='leads') el.innerHTML = viewLeads();
    else if(view==='orders') el.innerHTML = viewOrders();
    else if(view==='inventory') el.innerHTML = viewInventory();
    else if(view==='analytics') el.innerHTML = viewAnalytics();
    setCounts();
    wireView(view);
    $('#pf-side').classList.remove('open');
    window.scrollTo(0,0);
  };

  /* ================= DASHBOARD ================= */
  function kpi(lbl,val,delta,dir,icon){
    return '<div class="pf-kpi"><div class="ico">'+icon+'</div><div class="lbl">'+lbl+'</div>'+
      '<div class="val">'+val+'</div>'+
      (delta?'<div class="delta '+dir+'">'+(dir==='up'?'▲':dir==='down'?'▼':'•')+' '+delta+'</div>':'')+'</div>';
  }
  function viewDashboard(){
    var rfqOpen = state.rfqs.filter(function(r){return r.status!=='closed';}).length;
    var quotes = state.leads.filter(function(l){return ['Quote Sent','Negotiation','Won'].indexOf(l.stage)>=0;}).length;
    var won = state.leads.filter(function(l){return l.stage==='Won';});
    var conv = state.leads.length? Math.round(won.length/state.leads.length*100):0;
    var revenue = state.orders.filter(function(o){return o.invoice==='Paid';}).reduce(function(a,o){return a+(o.value||0);},0);
    var lowStock = state.inventory.filter(function(p){return p.status==='low'||p.qty<=2;}).length;
    var openOrders = state.orders.filter(function(o){return o.stage!=='Closed';}).length;

    var ico={rfq:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16M4 12h16M4 19h10"/></svg>',
      quote:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7h8M8 11h8M8 15h5"/><rect x="4" y="3" width="16" height="18" rx="2"/></svg>',
      conv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 17l5-5 4 3 7-8"/></svg>',
      rev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M8 7h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7"/></svg>',
      ord:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h2l2.5 12h11L21 9H6.5"/></svg>',
      low:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>'};

    var h='<div class="pf-topbar"><div><h1 class="pf-h">Operations dashboard</h1><p class="pf-sub">Live view of RFQs, pipeline, orders and inventory health.</p></div>'+
      '<div class="pf-tb-actions"><button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.go(\'rfqs\')">View RFQs</button>'+
      '<button class="pf-btn pf-btn-primary pf-btn-sm" onclick="PF.go(\'inventory\');setTimeout(PF.openPart,50)">+ Add part</button></div></div>';

    h+='<div class="pf-kpis">'+
      kpi('RFQs received', state.rfqs.length, rfqOpen+' open', 'up', ico.rfq)+
      kpi('Quotes sent', quotes, null,'flat', ico.quote)+
      kpi('Conversion rate', conv+'%', won.length+' won','up', ico.conv)+
      kpi('Revenue (paid)', money(revenue), null,'up', ico.rev)+
      kpi('Open orders', openOrders, null,'flat', ico.ord)+
      kpi('Low / out of stock', lowStock, 'review','down', ico.low)+
      '</div>';

    // pipeline + recent rfqs
    h+='<div class="pf-grid2">';
    // pipeline panel
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Sales pipeline</h3><span class="pf-muted" style="font-size:12.5px">'+state.leads.length+' leads</span></div><div class="pf-panel-body"><div class="pf-pipe">';
    LEAD_STAGES.forEach(function(s){
      var inS = state.leads.filter(function(l){return l.stage===s;});
      var val = inS.reduce(function(a,l){return a+(l.value||0);},0);
      h+='<div class="pf-pipe-col"><h4>'+s+'</h4><div class="n">'+inS.length+'</div><div class="v">'+money(val)+'</div><div class="pf-pipe-bar" style="width:'+Math.max(12,Math.min(100,inS.length*16))+'%"></div></div>';
    });
    h+='</div></div></div>';
    // recent RFQ panel
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Latest RFQs</h3><button class="pf-ibtn" onclick="PF.go(\'rfqs\')">All</button></div><div class="pf-panel-body" style="padding:0">';
    var recent = state.rfqs.slice().sort(function(a,b){return b.created<a.created?-1:1;}).slice(0,6);
    if(recent.length===0){ h+='<div class="pf-empty">No RFQs yet. Submit one from the public Parts Search to see it appear here in real time.</div>'; }
    else {
      h+='<table class="pf-table" style="min-width:0"><tbody>';
      recent.forEach(function(r){
        h+='<tr onclick="PF.openRFQ(\''+r.id+'\')" style="cursor:pointer"><td><span class="pf-pn">'+esc(r.ref)+'</span><div class="pf-muted" style="font-size:12px">'+esc(r.pn||'enquiry')+'</div></td>'+
          '<td>'+esc(r.company||r.email)+'</td><td style="text-align:right"><span class="pf-pill '+(r.status==='closed'?'gray':r.status==='quoted'?'amber':'blue')+'">'+(r.status||'new')+'</span></td></tr>';
      });
      h+='</tbody></table>';
    }
    h+='</div></div></div>';

    // order funnel + top movers
    h+='<div class="pf-grid2">';
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Order fulfilment stages</h3></div><div class="pf-panel-body"><div class="pf-bars">';
    var maxO=1; var counts=ORDER_STAGES.map(function(s){ var c=state.orders.filter(function(o){return o.stage===s;}).length; if(c>maxO)maxO=c; return c; });
    ORDER_STAGES.forEach(function(s,i){
      h+='<div class="pf-bar-row"><span class="pf-muted">'+s+'</span><div class="pf-bar-track"><div class="pf-bar-fill" style="width:'+(counts[i]/maxO*100)+'%"></div></div><span class="pf-bar-val">'+counts[i]+'</span></div>';
    });
    h+='</div></div></div>';
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Inventory by category</h3></div><div class="pf-panel-body"><div class="pf-bars">';
    var catMap={}; state.inventory.forEach(function(p){ catMap[p.cat]=(catMap[p.cat]||0)+p.qty; });
    var catNames={rotable:'Rotables',avionics:'Avionics',llp:'Life-limited',consumable:'Consumables',gse:'GSE',defence:'Defence'};
    var maxC=Math.max.apply(null,Object.keys(catMap).map(function(k){return catMap[k];}).concat([1]));
    Object.keys(catMap).forEach(function(k){
      h+='<div class="pf-bar-row"><span class="pf-muted">'+(catNames[k]||k)+'</span><div class="pf-bar-track"><div class="pf-bar-fill" style="width:'+(catMap[k]/maxC*100)+'%"></div></div><span class="pf-bar-val">'+catMap[k]+'</span></div>';
    });
    h+='</div></div></div></div>';

    return h;
  }

  /* ================= RFQs ================= */
  function viewRFQs(){
    var h='<div class="pf-topbar"><div><h1 class="pf-h">RFQ inbox</h1><p class="pf-sub">Every public RFQ lands here and auto-creates a lead, customer and quote-ready record.</p></div>'+
      '<div class="pf-tb-actions"><button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.seedDemoRFQ()">+ Simulate inbound RFQ</button></div></div>';
    h+='<div class="pf-toolbar"><div class="pf-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="pf-rfq-q" placeholder="Search ref, part no, company, email…"></div>'+
      '<select class="pf-select" id="pf-rfq-status"><option value="">All statuses</option><option value="new">New</option><option value="quoted">Quoted</option><option value="closed">Closed</option></select></div>';
    h+='<div class="pf-tablewrap"><table class="pf-table"><thead><tr><th>Reference</th><th>Part</th><th>Company</th><th>Qty</th><th>Priority</th><th>Received</th><th>Status</th><th></th></tr></thead><tbody id="pf-rfq-body"></tbody></table><div class="pf-empty" id="pf-rfq-empty" style="display:none">No RFQs match.</div></div>';
    return h;
  }
  function renderRFQ(){
    var q=($('#pf-rfq-q').value||'').toLowerCase(), st=$('#pf-rfq-status').value;
    var rows=state.rfqs.filter(function(r){
      if(st && (r.status||'new')!==st) return false;
      if(!q) return true;
      return (r.ref+' '+(r.pn||'')+' '+(r.company||'')+' '+(r.email||'')+' '+(r.desc||'')).toLowerCase().indexOf(q)>=0;
    }).sort(function(a,b){return b.created<a.created?-1:1;});
    var tb=$('#pf-rfq-body'), em=$('#pf-rfq-empty');
    if(!rows.length){ tb.innerHTML=''; em.style.display='block'; return; } em.style.display='none';
    tb.innerHTML=rows.map(function(r){
      var sc=r.status==='closed'?'gray':r.status==='quoted'?'amber':'blue';
      var pc=(r.priority||'').indexOf('AOG')>=0?'<span class="pf-pill red">AOG</span>':(r.priority||'').indexOf('Critical')>=0?'<span class="pf-pill amber">Critical</span>':'<span class="pf-pill gray">Routine</span>';
      return '<tr><td><span class="pf-pn">'+esc(r.ref)+'</span></td><td>'+esc(r.pn||'—')+'<div class="pf-muted" style="font-size:12px">'+esc(r.desc||'')+'</div></td>'+
        '<td>'+esc(r.company||'—')+'<div class="pf-muted" style="font-size:12px">'+esc(r.email||'')+'</div></td><td>'+esc(r.qty||'1')+'</td><td>'+pc+'</td>'+
        '<td class="pf-muted">'+fmtDT(r.created)+'</td><td><span class="pf-pill '+sc+'">'+(r.status||'new')+'</span></td>'+
        '<td class="pf-row-actions"><button class="pf-ibtn" onclick="PF.openRFQ(\''+r.id+'\')">Open</button></td></tr>';
    }).join('');
  }
  PF.openRFQ=function(id){
    var r=state.rfqs.filter(function(x){return x.id===id;})[0]; if(!r) return;
    drawer('RFQ '+r.ref, esc(r.company||r.email),
      '<dl class="pf-dl">'+
      row('Part number',esc(r.pn||'—'))+row('Description',esc(r.desc||'—'))+row('Quantity',esc(r.qty||'1'))+
      row('Condition',esc(r.cond||'—'))+row('Priority',esc(r.priority||'—'))+row('Preferred hub',esc(r.hub||'—'))+
      row('Company',esc(r.company||'—'))+row('Contact email',esc(r.email||'—'))+row('Received',fmtDT(r.created))+
      row('Linked lead',r.leadId?('<a style="color:var(--pf-brand);font-weight:600;cursor:pointer" onclick="PF.closeDrawer();PF.go(\'leads\');setTimeout(function(){PF.openLead(\''+r.leadId+'\')},80)">View lead &rarr;</a>'):'—')+
      '</dl>'+
      (r.notes?'<div style="margin-top:14px"><div class="pf-muted" style="font-size:12px;font-weight:600;margin-bottom:4px">Notes</div><div style="font-size:13.5px">'+esc(r.notes)+'</div></div>':'')+
      '<div style="margin-top:18px"><label class="pf-muted" style="font-size:12px;font-weight:600">Update status</label><select class="pf-select" id="pf-rfq-st-edit" style="width:100%;margin-top:6px"><option value="new"'+(r.status==='new'||!r.status?' selected':'')+'>New</option><option value="quoted"'+(r.status==='quoted'?' selected':'')+'>Quoted</option><option value="closed"'+(r.status==='closed'?' selected':'')+'>Closed</option></select></div>',
      [{label:'Convert to order',cls:'pf-btn-ghost',fn:'PF.rfqToOrder(\''+id+'\')'},
       {label:'Save',cls:'pf-btn-primary',fn:'PF.saveRFQ(\''+id+'\')'}]);
  };
  PF.saveRFQ=function(id){
    var r=state.rfqs.filter(function(x){return x.id===id;})[0]; if(!r) return;
    r.status=$('#pf-rfq-st-edit').value; persist('rfqs');
    if(r.leadId){ var l=state.leads.filter(function(x){return x.id===r.leadId;})[0]; if(l && r.status==='quoted' && l.stage==='RFQ'){ l.stage='Quote Sent'; l.history.push({t:nowISO(),e:'Quote prepared from RFQ '+r.ref}); persist('leads'); } }
    PF.closeDrawer(); PF.go('rfqs'); toast('RFQ '+r.ref+' updated');
  };
  PF.rfqToOrder=function(id){
    var r=state.rfqs.filter(function(x){return x.id===id;})[0]; if(!r) return;
    var part=state.inventory.filter(function(p){return p.pn===r.pn;})[0];
    var o={id:uid('ORD'),num:'AM-ORD-'+(1042+state.orders.length+1),customer:r.company||r.email,contact:r.contact||'',leadId:r.leadId||'',
      parts:[{pn:r.pn,desc:r.desc,qty:+r.qty||1}],qty:+r.qty||1,value:(part?part.price:0)*(+r.qty||1),
      stage:'RFQ Received',created:nowISO(),updated:nowISO(),invoice:'Pending',track:''};
    state.orders.unshift(o); persist('orders');
    r.status='closed'; persist('rfqs');
    PF.closeDrawer(); PF.go('orders'); toast('Order '+o.num+' created from RFQ '+r.ref);
  };
  PF.seedDemoRFQ=function(){
    var part=state.inventory[Math.floor(Math.random()*state.inventory.length)];
    var ci=Math.floor(Math.random()*COMPANIES.length);
    AMMAC_PLATFORM.recordRFQ({pn:part.pn,desc:part.desc,qty:1+Math.floor(Math.random()*4),cond:part.cond,
      priority:['AOG — aircraft on ground','Critical (24h)','Routine'][Math.floor(Math.random()*3)],
      hub:['Dubai, UAE','Singapore'][Math.floor(Math.random()*2)],
      email:CONTACTS[ci].split(' ')[0].toLowerCase()+'@'+COMPANIES[ci].toLowerCase().replace(/[^a-z]/g,'')+'.com',
      company:COMPANIES[ci],contact:CONTACTS[ci],notes:'Simulated inbound enquiry.'});
    PF.go('rfqs'); toast('Inbound RFQ received');
  };

  /* ================= LEADS (CRM) ================= */
  function viewLeads(){
    var h='<div class="pf-topbar"><div><h1 class="pf-h">Lead management</h1><p class="pf-sub">CRM pipeline across new, qualified, quoted, negotiation, won and lost.</p></div>'+
      '<div class="pf-tb-actions"><button class="pf-btn pf-btn-primary pf-btn-sm" onclick="PF.openLead()">+ New lead</button></div></div>';
    // pipeline summary
    h+='<div class="pf-pipe" style="margin-bottom:18px">';
    LEAD_STAGES.forEach(function(s){
      var inS=state.leads.filter(function(l){return l.stage===s;});
      h+='<div class="pf-pipe-col"><h4>'+s+'</h4><div class="n">'+inS.length+'</div><div class="v">'+money(inS.reduce(function(a,l){return a+(l.value||0);},0))+'</div></div>';
    });
    h+='</div>';
    h+='<div class="pf-toolbar"><div class="pf-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="pf-lead-q" placeholder="Search company, contact, country…"></div>'+
      '<select class="pf-select" id="pf-lead-stage"><option value="">All stages</option>'+LEAD_STAGES.map(function(s){return '<option>'+s+'</option>';}).join('')+'</select></div>';
    h+='<div class="pf-tablewrap"><table class="pf-table"><thead><tr><th>Company</th><th>Contact</th><th>Country</th><th>Requested</th><th>Value</th><th>Source</th><th>Stage</th><th></th></tr></thead><tbody id="pf-lead-body"></tbody></table><div class="pf-empty" id="pf-lead-empty" style="display:none">No leads match.</div></div>';
    return h;
  }
  function renderLeads(){
    var q=($('#pf-lead-q').value||'').toLowerCase(), st=$('#pf-lead-stage').value;
    var rows=state.leads.filter(function(l){
      if(st && l.stage!==st) return false;
      if(!q) return true;
      return (l.company+' '+l.contact+' '+l.country+' '+l.email).toLowerCase().indexOf(q)>=0;
    }).sort(function(a,b){return b.updated<a.updated?-1:1;});
    var tb=$('#pf-lead-body'), em=$('#pf-lead-empty');
    if(!rows.length){ tb.innerHTML=''; em.style.display='block'; return; } em.style.display='none';
    tb.innerHTML=rows.map(function(l){
      var pn=l.parts&&l.parts[0]?l.parts[0].pn:'—';
      return '<tr style="cursor:pointer" onclick="PF.openLead(\''+l.id+'\')"><td><span style="font-weight:600">'+esc(l.company)+'</span></td>'+
        '<td>'+esc(l.contact)+'<div class="pf-muted" style="font-size:12px">'+esc(l.email)+'</div></td><td>'+esc(l.country)+'</td>'+
        '<td><span class="pf-pn">'+esc(pn)+'</span></td><td class="pf-mono">'+money(l.value)+'</td><td class="pf-muted">'+esc(l.source||'—')+'</td>'+
        '<td><span class="pf-pill '+(STAGE_COLOR[l.stage]||'gray')+'">'+esc(l.stage)+'</span></td>'+
        '<td class="pf-row-actions"><button class="pf-ibtn" onclick="event.stopPropagation();PF.openLead(\''+l.id+'\')">Open</button></td></tr>';
    }).join('');
  }
  PF.openLead=function(id){
    var l = id ? state.leads.filter(function(x){return x.id===id;})[0] : null;
    var isNew=!l;
    if(isNew) l={id:'',company:'',contact:'',email:'',phone:'',country:'',source:'Manual',stage:'New',value:0,parts:[],notes:'',history:[]};
    var stageOpts=LEAD_STAGES.map(function(s){return '<option'+(l.stage===s?' selected':'')+'>'+s+'</option>';}).join('');
    var parts=(l.parts||[]).map(function(p){return '<span class="pf-pill blue" style="margin:2px 4px 2px 0">'+esc(p.pn)+' × '+esc(p.qty)+'</span>';}).join('')||'<span class="pf-muted">None linked</span>';
    var body='<div class="pf-form-grid">'+
      field('Company','full','pf-l-company',l.company)+
      field('Contact person','','pf-l-contact',l.contact)+
      field('Country','','pf-l-country',l.country)+
      field('Email','','pf-l-email',l.email,'email')+
      field('Phone','','pf-l-phone',l.phone)+
      '<div class="full"><label class="pf-muted" style="font-size:12px;font-weight:600">Stage</label><select class="pf-select" id="pf-l-stage" style="width:100%;margin-top:6px">'+stageOpts+'</select></div>'+
      field('Deal value (USD)','','pf-l-value',l.value,'number')+
      field('Source','','pf-l-source',l.source||'')+
      '<div class="full"><label class="pf-muted" style="font-size:12px;font-weight:600">Notes</label><textarea class="pf-input" id="pf-l-notes" style="margin-top:6px">'+esc(l.notes||'')+'</textarea></div>'+
      '<div class="full"><label class="pf-muted" style="font-size:12px;font-weight:600">Requested parts</label><div style="margin-top:6px">'+parts+'</div></div>'+
      '</div>';
    if(!isNew && l.history && l.history.length){
      body+='<div style="margin-top:22px"><div class="pf-muted" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-bottom:10px">Communication history</div><div class="pf-timeline">'+
        l.history.slice().reverse().map(function(ev){return '<div class="pf-tl-item"><div class="tt">'+esc(ev.e)+'</div><div class="dd">'+fmtDT(ev.t)+'</div></div>';}).join('')+'</div>'+
        '<div style="margin-top:14px;display:flex;gap:8px"><input class="pf-input" id="pf-l-note-add" placeholder="Log a call, email or note…" style="flex:1"><button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.addLeadNote(\''+l.id+'\')">Log</button></div></div>';
    }
    var foot=[{label:'Save lead',cls:'pf-btn-primary',fn:'PF.saveLead(\''+(l.id||'')+'\')'}];
    if(!isNew) foot.unshift({label:'Delete',cls:'pf-btn-danger',fn:'PF.deleteLead(\''+l.id+'\')'});
    drawer(isNew?'New lead':l.company, isNew?'Create a CRM record':'CRM record · '+l.id, body, foot);
  };
  PF.saveLead=function(id){
    var l = id ? state.leads.filter(function(x){return x.id===id;})[0] : null;
    var isNew=!l, prevStage=l?l.stage:null;
    if(isNew){ l={id:uid('LEAD'),parts:[],history:[],created:nowISO()}; }
    l.company=$('#pf-l-company').value.trim(); l.contact=$('#pf-l-contact').value.trim();
    l.country=$('#pf-l-country').value.trim(); l.email=$('#pf-l-email').value.trim();
    l.phone=$('#pf-l-phone').value.trim(); l.stage=$('#pf-l-stage').value;
    l.value=+$('#pf-l-value').value||0; l.source=$('#pf-l-source').value.trim(); l.notes=$('#pf-l-notes').value.trim();
    l.updated=nowISO();
    if(!l.company){ toast('Company name required'); return; }
    if(isNew){ l.history.push({t:nowISO(),e:'Lead created (manual)'}); state.leads.unshift(l); upsertCustomer(l); }
    else if(prevStage!==l.stage){ l.history.push({t:nowISO(),e:'Stage moved to '+l.stage}); }
    persist('leads'); PF.closeDrawer(); PF.go('leads'); toast('Lead saved');
  };
  PF.addLeadNote=function(id){
    var l=state.leads.filter(function(x){return x.id===id;})[0]; if(!l) return;
    var v=$('#pf-l-note-add').value.trim(); if(!v) return;
    l.history.push({t:nowISO(),e:v}); l.updated=nowISO(); persist('leads'); PF.openLead(id); toast('Note logged');
  };
  PF.deleteLead=function(id){
    state.leads=state.leads.filter(function(x){return x.id!==id;}); persist('leads');
    PF.closeDrawer(); PF.go('leads'); toast('Lead deleted');
  };

  /* ================= ORDERS ================= */
  function viewOrders(){
    var h='<div class="pf-topbar"><div><h1 class="pf-h">Order management</h1><p class="pf-sub">Track every order from RFQ received through picking, packing, shipping and close.</p></div></div>';
    h+='<div class="pf-toolbar"><div class="pf-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="pf-ord-q" placeholder="Search order no, customer, part…"></div>'+
      '<select class="pf-select" id="pf-ord-stage"><option value="">All stages</option>'+ORDER_STAGES.map(function(s){return '<option>'+s+'</option>';}).join('')+'</select></div>';
    h+='<div class="pf-tablewrap"><table class="pf-table"><thead><tr><th>Order #</th><th>Customer</th><th>Parts</th><th>Qty</th><th>Value</th><th>Invoice</th><th>Stage</th><th></th></tr></thead><tbody id="pf-ord-body"></tbody></table><div class="pf-empty" id="pf-ord-empty" style="display:none">No orders match.</div></div>';
    return h;
  }
  function renderOrders(){
    var q=($('#pf-ord-q').value||'').toLowerCase(), st=$('#pf-ord-stage').value;
    var rows=state.orders.filter(function(o){
      if(st && o.stage!==st) return false;
      if(!q) return true;
      var pn=o.parts&&o.parts[0]?o.parts[0].pn:'';
      return (o.num+' '+o.customer+' '+pn).toLowerCase().indexOf(q)>=0;
    }).sort(function(a,b){return b.created<a.created?-1:1;});
    var tb=$('#pf-ord-body'), em=$('#pf-ord-empty');
    if(!rows.length){ tb.innerHTML=''; em.style.display='block'; return; } em.style.display='none';
    tb.innerHTML=rows.map(function(o){
      var idx=ORDER_STAGES.indexOf(o.stage);
      var sc=o.stage==='Delivered'||o.stage==='Closed'?'green':o.stage==='Shipped'?'blue':idx>=4?'amber':'gray';
      var pn=o.parts&&o.parts[0]?o.parts[0].pn:'—';
      return '<tr style="cursor:pointer" onclick="PF.openOrder(\''+o.id+'\')"><td><span class="pf-pn">'+esc(o.num)+'</span></td><td>'+esc(o.customer)+'</td>'+
        '<td>'+esc(pn)+(o.parts&&o.parts.length>1?' +'+(o.parts.length-1):'')+'</td><td>'+esc(o.qty)+'</td><td class="pf-mono">'+money(o.value)+'</td>'+
        '<td><span class="pf-pill '+(o.invoice==='Paid'?'green':'amber')+'">'+esc(o.invoice)+'</span></td><td><span class="pf-pill '+sc+'">'+esc(o.stage)+'</span></td>'+
        '<td class="pf-row-actions"><button class="pf-ibtn" onclick="event.stopPropagation();PF.openOrder(\''+o.id+'\')">Open</button></td></tr>';
    }).join('');
  }
  PF.openOrder=function(id){
    var o=state.orders.filter(function(x){return x.id===id;})[0]; if(!o) return;
    var curIdx=ORDER_STAGES.indexOf(o.stage);
    var steps=ORDER_STAGES.map(function(s,i){return '<span class="pf-step '+(i<curIdx?'done':i===curIdx?'cur':'')+'">'+s+'</span>';}).join('');
    var partsRows=(o.parts||[]).map(function(p){return '<tr><td class="pf-pn">'+esc(p.pn)+'</td><td>'+esc(p.desc||'')+'</td><td style="text-align:right">'+esc(p.qty)+'</td></tr>';}).join('');
    var body='<dl class="pf-dl">'+row('Customer',esc(o.customer))+row('Contact',esc(o.contact||'—'))+
      row('Order value',money(o.value))+row('Invoice',o.invoice)+row('Created',fmtDate(o.created))+
      row('Tracking',esc(o.track||'—'))+'</dl>'+
      '<div style="margin:18px 0 6px" class="pf-muted" style="font-size:12px;font-weight:600">Fulfilment progress</div><div class="pf-steps">'+steps+'</div>'+
      '<div style="margin-top:18px"><label class="pf-muted" style="font-size:12px;font-weight:600">Advance stage</label><select class="pf-select" id="pf-ord-stage-edit" style="width:100%;margin-top:6px">'+ORDER_STAGES.map(function(s){return '<option'+(o.stage===s?' selected':'')+'>'+s+'</option>';}).join('')+'</select></div>'+
      '<div style="margin-top:14px"><label class="pf-muted" style="font-size:12px;font-weight:600">Invoice status</label><select class="pf-select" id="pf-ord-inv-edit" style="width:100%;margin-top:6px"><option'+(o.invoice==='Pending'?' selected':'')+'>Pending</option><option'+(o.invoice==='Paid'?' selected':'')+'>Paid</option></select></div>'+
      '<div style="margin-top:18px" class="pf-muted" style="font-size:12px;font-weight:600">Line items</div><div class="pf-tablewrap" style="margin-top:6px"><table class="pf-table" style="min-width:0"><thead><tr><th>Part</th><th>Description</th><th style="text-align:right">Qty</th></tr></thead><tbody>'+partsRows+'</tbody></table></div>';
    drawer('Order '+o.num, o.customer, body,[{label:'Save',cls:'pf-btn-primary',fn:'PF.saveOrder(\''+id+'\')'}]);
  };
  PF.saveOrder=function(id){
    var o=state.orders.filter(function(x){return x.id===id;})[0]; if(!o) return;
    o.stage=$('#pf-ord-stage-edit').value; o.invoice=$('#pf-ord-inv-edit').value; o.updated=nowISO();
    if((o.stage==='Shipped'||o.stage==='Delivered')&&!o.track) o.track='TRK'+Math.floor(80000+Math.random()*9000);
    persist('orders'); PF.closeDrawer(); PF.go('orders'); toast('Order '+o.num+' updated');
  };

  /* ================= INVENTORY ================= */
  var CATN={rotable:'Rotable',avionics:'Avionics',llp:'Life-limited',consumable:'Consumable',gse:'GSE',defence:'Defence'};
  function viewInventory(){
    var h='<div class="pf-topbar"><div><h1 class="pf-h">Inventory management</h1><p class="pf-sub">Create, edit, archive and bulk-update parts. '+state.inventory.length+' lines on hand.</p></div>'+
      '<div class="pf-tb-actions"><button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.bulkOpen()">Bulk CSV</button>'+
      '<button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.exportCSV()">Export</button>'+
      '<button class="pf-btn pf-btn-primary pf-btn-sm" onclick="PF.openPart()">+ Add part</button></div></div>';
    h+='<div class="pf-toolbar"><div class="pf-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="pf-inv-q" placeholder="Search part no, alt no, description, manufacturer…"></div>'+
      '<select class="pf-select" id="pf-inv-cat"><option value="">All categories</option>'+Object.keys(CATN).map(function(k){return '<option value="'+k+'">'+CATN[k]+'</option>';}).join('')+'</select>'+
      '<select class="pf-select" id="pf-inv-stock"><option value="">All stock</option><option value="in">In stock</option><option value="low">Low / out</option></select></div>';
    h+='<div class="pf-tablewrap"><table class="pf-table"><thead><tr><th>Part no</th><th>Description</th><th>Mfr</th><th>Cat</th><th>Cond</th><th>Qty</th><th>Location</th><th>Price</th><th></th></tr></thead><tbody id="pf-inv-body"></tbody></table><div class="pf-empty" id="pf-inv-empty" style="display:none">No parts match.</div></div>';
    return h;
  }
  function renderInventory(){
    var q=($('#pf-inv-q').value||'').toLowerCase(), cat=$('#pf-inv-cat').value, stock=$('#pf-inv-stock').value;
    var rows=state.inventory.filter(function(p){
      if(cat && p.cat!==cat) return false;
      if(stock==='in' && p.qty<=2) return false;
      if(stock==='low' && p.qty>2) return false;
      if(!q) return true;
      return (p.pn+' '+(p.alt||'')+' '+p.desc+' '+p.mfr+' '+(p.aircraft||'')).toLowerCase().indexOf(q)>=0;
    });
    var tb=$('#pf-inv-body'), em=$('#pf-inv-empty');
    if(!rows.length){ tb.innerHTML=''; em.style.display='block'; return; } em.style.display='none';
    tb.innerHTML=rows.map(function(p){
      var qc=p.qty<=0?'red':p.qty<=2?'amber':'green';
      return '<tr style="cursor:pointer" onclick="PF.openPart(\''+p.id+'\')"><td><span class="pf-pn">'+esc(p.pn)+'</span>'+(p.alt?'<div class="pf-muted" style="font-size:11.5px">alt '+esc(p.alt)+'</div>':'')+'</td>'+
        '<td>'+esc(p.desc)+'<div class="pf-muted" style="font-size:11.5px">'+esc(p.aircraft||'')+' · ATA '+esc(p.ata||'—')+'</div></td><td>'+esc(p.mfr)+'</td>'+
        '<td><span class="pf-pill gray">'+(CATN[p.cat]||p.cat)+'</span></td><td>'+esc(p.cond)+'</td>'+
        '<td><span class="pf-pill '+qc+'">'+esc(p.qty)+'</span></td><td class="pf-muted">'+esc(p.loc||'—')+'</td><td class="pf-mono">'+money(p.price)+'</td>'+
        '<td class="pf-row-actions"><button class="pf-ibtn" onclick="event.stopPropagation();PF.openPart(\''+p.id+'\')">Edit</button>'+
        '<button class="pf-ibtn danger" onclick="event.stopPropagation();PF.deletePart(\''+p.id+'\')">Del</button></td></tr>';
    }).join('');
  }
  PF.openPart=function(id){
    var p = id ? state.inventory.filter(function(x){return x.id===id;})[0] : null;
    var isNew=!p;
    if(isNew) p={id:'',pn:'',alt:'',desc:'',mfr:'',aircraft:'',ata:'',cat:'rotable',cond:'NE',qty:0,loc:'',cost:0,price:0,lead:'Stock',cert:'',status:'avail'};
    var catSel='<select class="pf-select" id="pf-p-cat" style="width:100%;margin-top:6px">'+Object.keys(CATN).map(function(k){return '<option value="'+k+'"'+(p.cat===k?' selected':'')+'>'+CATN[k]+'</option>';}).join('')+'</select>';
    var condSel='<select class="pf-select" id="pf-p-cond" style="width:100%;margin-top:6px">'+['NE','OH','SV','RP','AR'].map(function(c){return '<option'+(p.cond===c?' selected':'')+'>'+c+'</option>';}).join('')+'</select>';
    var body='<div class="pf-form-grid">'+
      field('Part number','','pf-p-pn',p.pn)+field('Alternate part no','','pf-p-alt',p.alt)+
      field('Description','full','pf-p-desc',p.desc)+
      field('Manufacturer','','pf-p-mfr',p.mfr)+field('Aircraft type','','pf-p-air',p.aircraft)+
      field('ATA chapter','','pf-p-ata',p.ata)+
      '<div><label class="pf-muted" style="font-size:12px;font-weight:600">Category</label>'+catSel+'</div>'+
      '<div><label class="pf-muted" style="font-size:12px;font-weight:600">Condition</label>'+condSel+'</div>'+
      field('Qty available','','pf-p-qty',p.qty,'number')+
      field('Stock location','','pf-p-loc',p.loc)+
      field('Unit cost (USD)','','pf-p-cost',p.cost,'number')+
      field('Selling price (USD)','','pf-p-price',p.price,'number')+
      field('Lead time','','pf-p-lead',p.lead)+field('Certification','','pf-p-cert',p.cert)+
      '</div>';
    var foot=[{label:isNew?'Create part':'Save changes',cls:'pf-btn-primary',fn:'PF.savePart(\''+(p.id||'')+'\')'}];
    if(!isNew) foot.unshift({label:'Archive / delete',cls:'pf-btn-danger',fn:'PF.deletePart(\''+p.id+'\')'});
    drawer(isNew?'Add inventory part':p.pn, isNew?'New stock line':'Editing · '+p.id, body, foot);
  };
  PF.savePart=function(id){
    var p = id ? state.inventory.filter(function(x){return x.id===id;})[0] : null;
    var isNew=!p; if(isNew){ p={id:uid('PART'),images:[],created:nowISO()}; }
    p.pn=$('#pf-p-pn').value.trim(); p.alt=$('#pf-p-alt').value.trim(); p.desc=$('#pf-p-desc').value.trim();
    p.mfr=$('#pf-p-mfr').value.trim(); p.aircraft=$('#pf-p-air').value.trim(); p.ata=$('#pf-p-ata').value.trim();
    p.cat=$('#pf-p-cat').value; p.cond=$('#pf-p-cond').value; p.qty=+$('#pf-p-qty').value||0;
    p.loc=$('#pf-p-loc').value.trim(); p.cost=+$('#pf-p-cost').value||0; p.price=+$('#pf-p-price').value||0;
    p.lead=$('#pf-p-lead').value.trim(); p.cert=$('#pf-p-cert').value.trim();
    p.status = p.qty<=0?'low':p.qty<=2?'low':'avail';
    if(!p.pn){ toast('Part number required'); return; }
    if(isNew) state.inventory.unshift(p);
    persist('inventory'); PF.closeDrawer(); PF.go('inventory'); toast(isNew?'Part created':'Part updated');
  };
  PF.deletePart=function(id){
    state.inventory=state.inventory.filter(function(x){return x.id!==id;}); persist('inventory');
    PF.closeDrawer(); PF.go('inventory'); toast('Part removed');
  };
  PF.exportCSV=function(){
    var cols=['pn','alt','desc','mfr','aircraft','ata','cat','cond','qty','loc','cost','price','lead','cert'];
    var lines=[cols.join(',')].concat(state.inventory.map(function(p){
      return cols.map(function(c){ var v=(p[c]==null?'':p[c]); v=(''+v).replace(/"/g,'""'); return /[",\n]/.test(v)?'"'+v+'"':v; }).join(',');
    }));
    var blob=new Blob([lines.join('\n')],{type:'text/csv'});
    var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='ammac-inventory.csv'; a.click();
    toast('Inventory exported');
  };
  PF.bulkOpen=function(){
    var body='<p class="pf-sub" style="margin:0 0 14px">Paste CSV rows or upload a file. Columns: <code>pn,alt,desc,mfr,aircraft,ata,cat,cond,qty,loc,cost,price,lead,cert</code>. Matching part numbers are updated; new ones are created.</p>'+
      '<input type="file" id="pf-bulk-file" accept=".csv,.txt" style="margin-bottom:12px">'+
      '<textarea class="pf-input" id="pf-bulk-text" style="min-height:160px;font-family:monospace;font-size:12.5px" placeholder="pn,alt,desc,mfr,aircraft,ata,cat,cond,qty,loc,cost,price,lead,cert"></textarea>'+
      '<div style="margin-top:14px;display:flex;gap:10px"><button class="pf-btn pf-btn-ghost pf-btn-sm" onclick="PF.bulkPriceOpen()">Bulk price change ↑↓</button></div>';
    drawer('Bulk import / update','CSV or Excel-paste',body,[{label:'Process rows',cls:'pf-btn-primary',fn:'PF.bulkProcess()'}]);
    setTimeout(function(){ var f=$('#pf-bulk-file'); if(f) f.onchange=function(){ var fr=new FileReader(); fr.onload=function(e){ $('#pf-bulk-text').value=e.target.result; }; fr.readAsText(f.files[0]); }; },50);
  };
  function parseCSV(text){
    var rows=text.trim().split(/\r?\n/).filter(function(l){return l.trim();});
    if(!rows.length) return [];
    var hdr=rows[0].split(',').map(function(h){return h.trim().toLowerCase();});
    return rows.slice(1).map(function(line){
      var cells=[], cur='', inq=false;
      for(var i=0;i<line.length;i++){ var ch=line[i];
        if(inq){ if(ch==='"'&&line[i+1]==='"'){cur+='"';i++;} else if(ch==='"'){inq=false;} else cur+=ch; }
        else { if(ch==='"')inq=true; else if(ch===','){cells.push(cur);cur='';} else cur+=ch; } }
      cells.push(cur);
      var o={}; hdr.forEach(function(h,i){ o[h]=(cells[i]||'').trim(); }); return o;
    });
  }
  PF.bulkProcess=function(){
    var rows=parseCSV($('#pf-bulk-text').value);
    if(!rows.length){ toast('No valid rows found'); return; }
    var created=0, updated=0;
    rows.forEach(function(r){
      if(!r.pn) return;
      var ex=state.inventory.filter(function(p){return p.pn.toLowerCase()===r.pn.toLowerCase();})[0];
      var fields={alt:r.alt,desc:r.desc,mfr:r.mfr,aircraft:r.aircraft,ata:r.ata,cat:r.cat||'rotable',cond:r.cond||'NE',
        qty:+r.qty||0,loc:r.loc,cost:+r.cost||0,price:+r.price||0,lead:r.lead||'Stock',cert:r.cert};
      if(ex){ Object.keys(fields).forEach(function(k){ if(r[k]!=null && r[k]!=='') ex[k]=fields[k]; }); ex.status=ex.qty<=2?'low':'avail'; updated++; }
      else { var np={id:uid('PART'),pn:r.pn,images:[],created:nowISO()}; Object.keys(fields).forEach(function(k){np[k]=fields[k];}); np.status=np.qty<=2?'low':'avail'; state.inventory.unshift(np); created++; }
    });
    persist('inventory'); PF.closeDrawer(); PF.go('inventory'); toast(created+' created · '+updated+' updated');
  };
  PF.bulkPriceOpen=function(){
    var body='<p class="pf-sub" style="margin:0 0 14px">Apply a percentage change to selling price across a category (or all parts).</p>'+
      '<div class="pf-form-grid">'+
      '<div class="full"><label class="pf-muted" style="font-size:12px;font-weight:600">Category</label><select class="pf-select" id="pf-bp-cat" style="width:100%;margin-top:6px"><option value="">All categories</option>'+Object.keys(CATN).map(function(k){return '<option value="'+k+'">'+CATN[k]+'</option>';}).join('')+'</select></div>'+
      field('Change (%) e.g. 5 or -10','full','pf-bp-pct',5,'number')+
      '</div>';
    drawer('Bulk price change','Inventory pricing',body,[{label:'Apply',cls:'pf-btn-primary',fn:'PF.bulkPriceApply()'}]);
  };
  PF.bulkPriceApply=function(){
    var cat=$('#pf-bp-cat').value, pct=+$('#pf-bp-pct').value||0, n=0;
    state.inventory.forEach(function(p){ if(!cat||p.cat===cat){ p.price=Math.round(p.price*(1+pct/100)); n++; } });
    persist('inventory'); PF.closeDrawer(); PF.go('inventory'); toast(n+' prices adjusted '+(pct>=0?'+':'')+pct+'%');
  };

  /* ================= ANALYTICS ================= */
  function viewAnalytics(){
    var won=state.leads.filter(function(l){return l.stage==='Won';});
    var lost=state.leads.filter(function(l){return l.stage==='Lost';});
    var conv=state.leads.length?Math.round(won.length/state.leads.length*100):0;
    var revenue=state.orders.filter(function(o){return o.invoice==='Paid';}).reduce(function(a,o){return a+o.value;},0);
    var pipeline=state.leads.filter(function(l){return l.stage!=='Won'&&l.stage!=='Lost';}).reduce(function(a,l){return a+l.value;},0);
    var h='<div class="pf-topbar"><div><h1 class="pf-h">Executive analytics</h1><p class="pf-sub">Sales, inventory and lead performance at a glance.</p></div></div>';
    h+='<div class="pf-kpis">'+
      kpi('RFQs received',state.rfqs.length,null,'up','')+
      kpi('Quotes sent',state.leads.filter(function(l){return['Quote Sent','Negotiation','Won'].indexOf(l.stage)>=0;}).length,null,'flat','')+
      kpi('Conversion',conv+'%',null,'up','')+
      kpi('Closed revenue',money(revenue),null,'up','')+
      kpi('Open pipeline',money(pipeline),null,'flat','')+
      kpi('Closed deals',won.length+' / '+lost.length+' lost',null,'flat','')+'</div>';
    h+='<div class="pf-grid2">';
    // lead sources
    var src={}; state.leads.forEach(function(l){ src[l.source||'Other']=(src[l.source||'Other']||0)+1; });
    var maxS=Math.max.apply(null,Object.keys(src).map(function(k){return src[k];}).concat([1]));
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Lead sources</h3></div><div class="pf-panel-body"><div class="pf-bars">'+
      Object.keys(src).map(function(k){return '<div class="pf-bar-row"><span class="pf-muted">'+esc(k)+'</span><div class="pf-bar-track"><div class="pf-bar-fill" style="width:'+(src[k]/maxS*100)+'%"></div></div><span class="pf-bar-val">'+src[k]+'</span></div>';}).join('')+
      '</div></div></div>';
    // fast vs slow movers (orders per part)
    var mv={}; state.orders.forEach(function(o){ (o.parts||[]).forEach(function(p){ mv[p.pn]=(mv[p.pn]||0)+p.qty; }); });
    var arr=Object.keys(mv).map(function(k){return {pn:k,n:mv[k]};}).sort(function(a,b){return b.n-a.n;});
    var fast=arr.slice(0,5), slow=state.inventory.filter(function(p){return !mv[p.pn];}).slice(0,5);
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Fast vs slow movers</h3></div><div class="pf-panel-body">'+
      '<div class="pf-muted" style="font-size:12px;font-weight:700;margin-bottom:8px">FAST MOVING</div>'+
      (fast.length?fast.map(function(f){return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--pf-line2)"><span class="pf-pn">'+esc(f.pn)+'</span><span class="pf-pill green">'+f.n+' units</span></div>';}).join(''):'<div class="pf-muted" style="font-size:13px">No order history yet</div>')+
      '<div class="pf-muted" style="font-size:12px;font-weight:700;margin:14px 0 8px">SLOW / NO MOVEMENT</div>'+
      (slow.length?slow.map(function(s){return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--pf-line2)"><span class="pf-pn">'+esc(s.pn)+'</span><span class="pf-pill gray">'+s.qty+' on hand</span></div>';}).join(''):'<div class="pf-muted" style="font-size:13px">—</div>')+
      '</div></div>';
    h+='</div>';
    // inventory value
    var invVal=state.inventory.reduce(function(a,p){return a+p.cost*p.qty;},0);
    var retail=state.inventory.reduce(function(a,p){return a+p.price*p.qty;},0);
    h+='<div class="pf-panel"><div class="pf-panel-head"><h3>Inventory valuation</h3></div><div class="pf-panel-body"><div class="pf-kpis" style="margin:0">'+
      kpi('Lines on hand',state.inventory.length,null,'flat','')+
      kpi('Stock at cost',money(invVal),null,'flat','')+
      kpi('Stock at retail',money(retail),null,'flat','')+
      kpi('Low / out',state.inventory.filter(function(p){return p.qty<=2;}).length,'reorder','down','')+
      '</div></div></div>';
    return h;
  }

  /* ---------------- shared field/row/drawer helpers ---------------- */
  function field(label,cls,id,val,type){
    return '<div class="'+(cls||'')+'"><label class="pf-muted" style="font-size:12px;font-weight:600">'+label+'</label>'+
      '<input class="pf-input" id="'+id+'" type="'+(type||'text')+'" value="'+esc(val)+'" style="margin-top:6px;width:100%"></div>';
  }
  function row(k,v){ return '<dt>'+k+'</dt><dd>'+v+'</dd>'; }
  function drawer(title,sub,body,actions){
    $('#pf-drawer-title').textContent=title; $('#pf-drawer-sub').textContent=sub||'';
    $('#pf-drawer-body').innerHTML=body;
    $('#pf-drawer-foot').innerHTML=(actions||[]).map(function(a){return '<button class="pf-btn '+a.cls+' pf-btn-sm" onclick="'+a.fn+'">'+a.label+'</button>';}).join('');
    $('#pf-overlay').classList.add('open'); document.body.style.overflow='hidden';
  }
  PF.closeDrawer=function(){ $('#pf-overlay').classList.remove('open'); document.body.style.overflow=''; };

  /* ---------------- wire search/filter inputs per view ---------------- */
  function wireView(view){
    if(view==='rfqs'){ renderRFQ(); ['pf-rfq-q','pf-rfq-status'].forEach(function(id){ var e=$('#'+id); if(e) e.oninput=e.onchange=renderRFQ; }); }
    else if(view==='leads'){ renderLeads(); ['pf-lead-q','pf-lead-stage'].forEach(function(id){ var e=$('#'+id); if(e) e.oninput=e.onchange=renderLeads; }); }
    else if(view==='orders'){ renderOrders(); ['pf-ord-q','pf-ord-stage'].forEach(function(id){ var e=$('#'+id); if(e) e.oninput=e.onchange=renderOrders; }); }
    else if(view==='inventory'){ renderInventory(); ['pf-inv-q','pf-inv-cat','pf-inv-stock'].forEach(function(id){ var e=$('#'+id); if(e) e.oninput=e.onchange=renderInventory; }); }
  }

  /* ---------------- CUSTOMERS ---------------- */
  function upsertCustomer(lead){
    var c=state.customers.filter(function(x){return x.company===lead.company;})[0];
    if(c){ c.email=lead.email||c.email; c.contact=lead.contact||c.contact; c.country=lead.country||c.country; c.lastSeen=nowISO(); }
    else { state.customers.push({id:uid('CUST'),company:lead.company,contact:lead.contact,email:lead.email,phone:lead.phone,country:lead.country,created:nowISO(),lastSeen:nowISO()}); }
    persist('customers');
  }

  /* =================================================================
     PUBLIC BRIDGE — called by the storefront RFQ form.
     Creates RFQ + Lead + Customer records and bumps admin counters.
     ================================================================= */
  window.AMMAC_PLATFORM = {
    recordRFQ: function(d){
      var ref = d.ref || ('AMM-'+Date.now().toString(36).toUpperCase().slice(-6));
      var rfq = {
        id: uid('RFQ'), ref:ref, pn:d.pn||'', desc:d.desc||'', qty:d.qty||1, cond:d.cond||'',
        priority:d.priority||'Routine', hub:d.hub||'', email:d.email||'', company:d.company||'',
        contact:d.contact||'', notes:d.notes||'', status:'new', created:nowISO(), leadId:''
      };
      // create / link lead
      var lead = state.leads.filter(function(l){return l.company && d.company && l.company===d.company;})[0];
      var part = state.inventory.filter(function(p){return p.pn===d.pn;})[0];
      var val = (part?part.price:0)*(d.qty||1);
      if(lead){
        lead.stage = lead.stage==='New'?'RFQ':lead.stage;
        lead.parts = lead.parts||[]; lead.parts.push({pn:d.pn,desc:d.desc,qty:d.qty||1});
        lead.value = Math.max(lead.value||0, val); lead.updated=nowISO();
        lead.history.push({t:nowISO(),e:'New RFQ '+ref+' for '+(d.pn||'parts')});
      } else {
        lead = {id:uid('LEAD'), company:d.company||(d.email||'Unknown'), contact:d.contact||'', email:d.email||'',
          phone:'', country:'', source:'Parts Portal', stage:'RFQ', value:val,
          parts:[{pn:d.pn,desc:d.desc,qty:d.qty||1}], notes:d.notes||'', created:nowISO(), updated:nowISO(),
          history:[{t:nowISO(),e:'Lead auto-created from RFQ '+ref}]};
        state.leads.unshift(lead);
      }
      rfq.leadId = lead.id;
      state.rfqs.unshift(rfq);
      persist('rfqs'); persist('leads');
      upsertCustomer(lead);
      // refresh admin if open
      try{ setCounts(); if(state.auth && (state.view==='rfqs'||state.view==='dashboard'||state.view==='leads')) PF.go(state.view); }catch(e){}
      return ref;
    },
    isAdminOpen: function(){ return state.auth; }
  };

  /* expose & hook admin route */
  window.PF = PF;
  window.__ammBootAdmin = function(){
    // restore session
    if(sessionStorage.getItem(NS+'auth')==='1'){
      state.auth=true;
      $('#pf-login-view').style.display='none'; $('#pf-reset-view').style.display='none';
      $('#pf-console-view').style.display='block';
      if(!$('#pf-view').innerHTML) PF.go(state.view||'dashboard'); else setCounts();
    } else {
      $('#pf-login-view').style.display='flex'; $('#pf-console-view').style.display='none'; $('#pf-reset-view').style.display='none';
    }
  };
  // allow Enter to submit login
  document.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      var lv=$('#pf-login-view'); if(lv && lv.style.display!=='none' && document.querySelector('.amm-page[data-page="admin"]').style.display!=='none'){ PF.login(); }
    }
  });
})();


/* ===== motion ===== */

/* ===================== GLOBAL MOTION LAYER (site-wide) ===================== */
(function(){
  var reduce = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;

  /* ---- scroll progress bar ---- */
  var bar=document.createElement('div'); bar.id='amm-progress'; document.body.appendChild(bar);
  function onScroll(){
    var st=window.pageYOffset||document.documentElement.scrollTop;
    var h=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.width=(h>0?(st/h*100):0)+'%';
    var t=document.getElementById('amm-totop'); if(t){ t.classList.toggle('show', st>620); }
  }
  window.addEventListener('scroll',onScroll,{passive:true});

  /* ---- scroll-to-top ---- */
  var top=document.createElement('button'); top.id='amm-totop'; top.setAttribute('aria-label','Back to top');
  top.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  top.onclick=function(){ window.scrollTo({top:0,behavior:reduce?'auto':'smooth'}); };
  document.body.appendChild(top);

  /* ---- reveal observer ---- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); } });
  },{threshold:0.12,rootMargin:'0px 0px -8% 0px'}) : null;

  function observeReveals(root){
    if(reduce){ // just show everything
      (root||document).querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(function(el){ el.classList.add('is-in'); });
      return;
    }
    if(!io) return;
    (root||document).querySelectorAll('[data-reveal]:not(.is-in),[data-reveal-stagger]:not(.is-in)').forEach(function(el){
      // stagger children delays
      if(el.hasAttribute('data-reveal-stagger')){
        Array.prototype.forEach.call(el.children,function(c,i){ c.style.transitionDelay=(i*70)+'ms'; });
      }
      io.observe(el);
    });
  }
  window.__ammObserveReveals = observeReveals;

  /* ---- auto-tag common blocks as reveals (so existing pages animate) ---- */
  function autoTag(root){
    var r = root||document;
    // section-level reveal on direct content wrappers
    r.querySelectorAll('.amm-page main > section').forEach(function(sec){
      if(!sec.hasAttribute('data-reveal') && !sec.hasAttribute('data-no-reveal')) sec.setAttribute('data-reveal','');
    });
    // lift effect for common card-ish elements
    r.querySelectorAll('[data-screen-label] , .amm-2col, .amm-aog').forEach(function(){});
  }

  /* ---- magnetic buttons + ripple ---- */
  function wireButtons(root){
    var r=root||document;
    if(!reduce){
      r.querySelectorAll('a[href], button').forEach(function(b){
        if(b.__magnetic) return;
        var box=b.getBoundingClientRect();
        // only sizable buttons
        if(box.width<60 || box.width>520) return;
        var cls=b.className||'';
        if(b.closest('#amm-desknav')||b.closest('#amm-mobile')||b.id==='amm-totop') return;
        b.__magnetic=true;
        b.style.transition=(b.style.transition?b.style.transition+',':'')+'transform .25s cubic-bezier(.2,.8,.2,1)';
        b.addEventListener('mousemove',function(e){
          var rb=b.getBoundingClientRect();
          var mx=(e.clientX-rb.left-rb.width/2)/rb.width;
          var my=(e.clientY-rb.top-rb.height/2)/rb.height;
          b.style.transform='translate('+(mx*6)+'px,'+(my*5)+'px)';
        });
        b.addEventListener('mouseleave',function(){ b.style.transform=''; });
      });
    }
    // ripple for primary-style buttons
    r.querySelectorAll('a,button').forEach(function(b){
      if(b.__ripple) return; b.__ripple=true;
      b.addEventListener('click',function(e){
        var bg=getComputedStyle(b).backgroundColor;
        if(!/rgb\((?:4[0-9]|2[0-9]|[0-9]),/.test(bg) && bg.indexOf('rgba(0, 0, 0, 0)')>=0) return;
        var rb=b.getBoundingClientRect();
        if(getComputedStyle(b).position==='static') b.style.position='relative';
        if(getComputedStyle(b).overflow!=='hidden') b.style.overflow='hidden';
        var rip=document.createElement('span'); rip.className='amm-ripple';
        var size=Math.max(rb.width,rb.height);
        rip.style.width=rip.style.height=size+'px';
        rip.style.left=(e.clientX-rb.left-size/2)+'px';
        rip.style.top=(e.clientY-rb.top-size/2)+'px';
        b.appendChild(rip);
        setTimeout(function(){ rip.remove(); },600);
      });
    });
  }

  /* ---- count-up for any element with data-countup (existing stat numbers) ---- */
  function wireCountUps(root){
    if(reduce) return;
    var els=(root||document).querySelectorAll('[data-countup]:not(.counted)');
    if(!('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('counted'); }); return; }
    var cio=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting) return;
        var el=en.target; el.classList.add('counted'); cio.unobserve(el);
        var raw=el.getAttribute('data-countup'); var target=parseFloat(raw)||0;
        var pre=el.getAttribute('data-pre')||''; var suf=el.getAttribute('data-suf')||'';
        var dur=1500,t0=null;
        function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1); var e=1-Math.pow(1-p,3);
          var val=Math.round(target*e);
          el.textContent=pre+val.toLocaleString()+suf;
          if(p<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    },{threshold:0.4});
    els.forEach(function(e){ cio.observe(e); });
  }


  /* ---- home parts-search promo typewriter ---- */
  function bootPromo(){
    var el=document.getElementById('amm-promo-type'); if(!el||el.__b) return; el.__b=true;
    var rowsWrap=document.querySelector('.amm-promo-rows');
    var samples=[
      {q:'landing gear actuator', rows:[['3-1530-3','Main landing gear actuator','OH'],['L21-2231','Brake control valve assy','SV']]},
      {q:'B737 avionics', rows:[['3214000-7','Air data computer (ADC)','OH'],['10-62092-3','Proximity sensor, gear','NE']]},
      {q:'Mi-17 rotor', rows:[['8814-6M17','Tail rotor gearbox fitting','OH'],['70400-08145','Rotor blade bushing','NE']]},
      {q:'MIL spec oil', rows:[['MIL-PRF-23699','Turbine engine oil','NE'],['PLASTI-GRIT-20','Plastic blast media','NE']]}
    ];
    var si=0;
    function renderRows(rows){
      rowsWrap.innerHTML=rows.map(function(r){return '<div class="amm-promo-row"><span class="pn">'+r[0]+'</span><span class="ds">'+r[1]+'</span><span class="st">'+r[2]+'</span></div>';}).join('');
      var rs=rowsWrap.querySelectorAll('.amm-promo-row');
      rs.forEach(function(x,i){ setTimeout(function(){ x.classList.add('in'); }, 120+i*120); });
    }
    function typeIn(text,cb){ var i=0; (function t(){ el.textContent=text.slice(0,i++); if(i<=text.length) setTimeout(t,55); else cb&&cb(); })(); }
    function eraseOut(cb){ var txt=el.textContent; (function e(){ txt=txt.slice(0,-1); el.textContent=txt; if(txt.length) setTimeout(e,28); else cb&&cb(); })(); }
    function cycle(){ var s=samples[si%samples.length]; typeIn(s.q,function(){ renderRows(s.rows); setTimeout(function(){ eraseOut(function(){ si++; setTimeout(cycle,250); }); },2600); }); }
    if(reduce){ el.textContent=samples[0].q; renderRows(samples[0].rows); } else { cycle(); }
  }
  window.__ammBootPromo = bootPromo;


  /* ---- capabilities cards: staggered reveal + alive click ---- */
  function wireCapabilities(root){
    var r=root||document;
    var cards=r.querySelectorAll('.amm-cap-card:not(.cap-wired)');
    if(!cards.length) return;
    cards.forEach(function(card,i){
      card.classList.add('cap-wired');
      // reveal
      if(reduce){ card.classList.add('cap-in'); }
      else if('IntersectionObserver' in window){
        var ob=new IntersectionObserver(function(es){
          es.forEach(function(e){
            if(e.isIntersecting){
              var idx=Array.prototype.indexOf.call(card.parentNode.parentNode.querySelectorAll('.amm-cap-card'),card);
              setTimeout(function(){ card.classList.add('cap-in'); }, (idx>=0?idx:i)*110);
              ob.unobserve(card);
            }
          });
        },{threshold:0.2,rootMargin:'0px 0px -6% 0px'});
        ob.observe(card);
      } else { card.classList.add('cap-in'); }
      // alive click: press + pulse + ripple on the inner card box
      function activate(ev){
        var box=card.querySelector('div:last-child')||card;
        card.classList.remove('cap-pulse'); void card.offsetWidth;
        card.classList.add('cap-press');
        setTimeout(function(){ card.classList.remove('cap-press'); card.classList.add('cap-pulse'); },120);
        setTimeout(function(){ card.classList.remove('cap-pulse'); },720);
        // ripple
        if(!reduce && ev && ev.clientX!==undefined){
          var rb=box.getBoundingClientRect();
          if(getComputedStyle(box).position==='static') box.style.position='relative';
          box.style.overflow='hidden';
          var rip=document.createElement('span'); rip.className='amm-ripple';
          rip.style.background='rgba(47,39,206,.18)';
          var size=Math.max(rb.width,rb.height);
          rip.style.width=rip.style.height=size+'px';
          rip.style.left=(ev.clientX-rb.left-size/2)+'px';
          rip.style.top=(ev.clientY-rb.top-size/2)+'px';
          box.appendChild(rip); setTimeout(function(){ rip.remove(); },600);
        }
      }
      card.addEventListener('click',activate);
      card.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); activate(e); } });
    });
  }
  window.__ammWireCapabilities = wireCapabilities;

  /* ---- public initializer per page ---- */
  function initPage(root){
    autoTag(root);
    if(root && root.querySelector && root.querySelector('#amm-promo-type')) setTimeout(bootPromo,300);
    wireCapabilities(root);
    if(root && root.querySelector && root.querySelector('.amm-ct-hours')){ try{ AMM.initContactHours(); }catch(e){} }
    observeReveals(root);
    wireButtons(root);
    wireCountUps(root);
    onScroll();
  }
  window.__ammInitMotion = initPage;

  // initial
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){ initPage(document); });
  else initPage(document);
})();



/* ===== whatsapp ===== */

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


/* ===== parts-labels ===== */

(function(){
  function labelPartsTable(){
    var tb=document.getElementById('ps-tbody'); if(!tb) return;
    var labels=['OEM Part Number','Description','Manufacturer','Platform','ATA','Condition','RFQ'];
    Array.prototype.forEach.call(tb.querySelectorAll('tr'),function(tr){
      Array.prototype.forEach.call(tr.children,function(td,i){
        if(labels[i] && !td.getAttribute('data-label')) td.setAttribute('data-label',labels[i]);
      });
    });
  }
  function attach(){
    var tb=document.getElementById('ps-tbody'); if(!tb){ return setTimeout(attach,400); }
    labelPartsTable();
    try{
      var mo=new MutationObserver(function(){ labelPartsTable(); });
      mo.observe(tb,{childList:true});
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',attach);
  else attach();
})();

/* ===== real-routes-router ===== */

/* AMMAC real-routes boot (Next.js port) — replaces the original hash router.
   Keeps the AMM chrome object; boots the single .amm-page rendered per route. */
(function(){
  var PAGE_TITLES = {
    home:"AMMAC Aircraft Parts — Aviation Aftermarket & Supply Chain Solutions",
    products:"Products & Services — AMMAC Aircraft Parts",
    repair:"Repair Management — AMMAC Aircraft Parts",
    warehousing:"Warehousing & Supply Chain — AMMAC Aircraft Parts",
    why:"Why AMMAC — AMMAC Aircraft Parts",
    parts:"Parts Search & Live Inventory — AMMAC Aircraft Parts",
    contact:"Contact Us — AMMAC Aircraft Parts",
    admin:"Admin Portal — AMMAC Aircraft Parts"
  };
  var ACTIVE_LINK = { home:0, products:1, repair:2, warehousing:3, parts:4, why:5, contact:6 };
  var state = { megaOpen:false, mobileOpen:false, mobileProdOpen:false, scrolled:false };
  function header(){ return document.getElementById('amm-header'); }
  function $(id){ return document.getElementById(id); }

  function applyHeader(){
    var h = header(); if(!h) return;
    h.style.padding = (state.scrolled ? '10px' : '16px') + ' 0';
    if(state.scrolled) h.classList.add('amm-scrolled'); else h.classList.remove('amm-scrolled');
  }
  function applyMega(){
    var m = $('amm-mega');
    if(m){ m.style.maxHeight = state.megaOpen ? '320px' : '0px'; m.style.opacity = state.megaOpen ? '1' : '0'; }
    var chev = document.querySelector('#amm-desknav button svg');
    if(chev) chev.style.transform = 'rotate(' + (state.megaOpen?180:0) + 'deg)';
    var btn = document.querySelector('#amm-desknav button');
    if(btn) btn.setAttribute('aria-expanded', state.megaOpen ? 'true':'false');
  }
  function applyMobile(){
    var m = $('amm-mobile');
    if(m) m.style.transform = 'translateX(' + (state.mobileOpen ? '0%' : '100%') + ')';
  }
  function applyMobileProd(){
    var btns = document.querySelectorAll('#amm-mobile button');
    var prodBtn = null;
    btns.forEach(function(b){ if(/Products/.test(b.textContent)) prodBtn = b; });
    if(prodBtn){
      prodBtn.setAttribute('aria-expanded', state.mobileProdOpen ? 'true':'false');
      var chev = prodBtn.querySelector('svg');
      if(chev) chev.style.transform = 'rotate(' + (state.mobileProdOpen?180:0) + 'deg)';
      var block = prodBtn.nextElementSibling;
      if(block){
        block.style.maxHeight = state.mobileProdOpen ? '280px' : '0px';
        block.style.opacity   = state.mobileProdOpen ? '1' : '0';
      }
    }
  }
  var AMM = {
    initContactHours: function(){
      var now=new Date(); var day=now.getDay(); var hr=now.getHours();
      var lis=document.querySelectorAll('.amm-ct-hours li');
      lis.forEach(function(li){
        li.classList.remove('is-today');
        if(parseInt(li.getAttribute('data-day'),10)===day) li.classList.add('is-today');
      });
      var open=(day>=1 && day<=5 && hr>=9 && hr<17);
      var badge=document.getElementById('amm-ct-status');
      if(badge){
        if(open){ badge.textContent='Open now'; badge.classList.remove('is-closed'); }
        else { badge.textContent='Closed now'; badge.classList.add('is-closed'); }
      }
    },
    sendContact: function(){
      var name=(document.getElementById('cf-name')||{}).value||'';
      var email=(document.getElementById('cf-email')||{}).value||'';
      var msg=(document.getElementById('cf-msg')||{}).value||'';
      var note=document.getElementById('cf-note');
      if(!email || email.indexOf('@')<0){
        var e=document.getElementById('cf-email'); if(e){ e.focus(); e.style.borderColor='#D92D20'; }
        if(note){ note.innerHTML='Please enter a valid email so we can reply.'; note.style.color='#D92D20'; }
        return;
      }
      var subject='Website enquiry from '+(name||'a visitor');
      var body='Name: '+(name||'\u2014')+'\r\nEmail: '+email+'\r\n\r\nMessage:\r\n'+(msg||'\u2014')+'\r\n\r\nSent from AMMACAircraft.com contact page.';
      var mailto='mailto:Sales@AMMACAircraft.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      try{ window.location.href=mailto; }catch(err){ window.open(mailto,'_blank'); }
      if(note){ note.innerHTML='Your email app is opening a message to <strong style="color:#5b5a6e">Sales@AMMACAircraft.com</strong> — just press send.'; note.style.color='#9a99ab'; }
    },
    toggleMega: function(){ state.megaOpen = !state.megaOpen; applyMega(); },
    toggleMobile: function(){ state.mobileOpen = !state.mobileOpen; applyMobile(); },
    toggleMobileProd: function(){ state.mobileProdOpen = !state.mobileProdOpen; applyMobileProd(); },
    closeMega: function(){ state.megaOpen = false; applyMega(); },
    closeMobile: function(){ state.mobileOpen = false; state.mobileProdOpen = false; applyMobile(); applyMobileProd(); }
  };
  window.AMM = AMM;

  // sticky-header sentinel
  var sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden','true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:48px;pointer-events:none;z-index:-1';
  document.body.appendChild(sentinel);
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(ents){
      var sc = !ents[0].isIntersecting;
      if(sc !== state.scrolled){ state.scrolled = sc; applyHeader(); }
    }, {threshold:0}).observe(sentinel);
  }

  function setActive(page){
    var deskItems = [
      document.querySelector('#amm-desknav a[href="/"]'),
      document.querySelector('#amm-desknav button'),
      document.querySelector('#amm-desknav a[href="/repair"]'),
      document.querySelector('#amm-desknav a[href="/warehousing"]'),
      document.querySelector('#amm-desknav a[href="/parts"]'),
      document.querySelector('#amm-desknav a[href="/why"]')
    ];
    deskItems.forEach(function(el,i){
      if(el) el.style.color = (ACTIVE_LINK[page]===i) ? '#2f27ce' : '#1a1830';
    });
  }

  function loadThree(cb){
    if(window.THREE && window.GLTFLoader){ cb(); return; }
    var s=document.createElement('script');
    s.src='/js/three.bundle.js'; s.onload=cb;
    s.onerror=function(){ console.error('[ammac] three.bundle failed'); };
    document.head.appendChild(s);
  }

  function boot(){
    var pg = document.querySelector('.amm-page');
    var page = pg ? (pg.getAttribute('data-page') || 'home') : 'home';
    if(pg) pg.style.display = 'block';
    document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
    setActive(page);
    if(pg){ pg.classList.remove('amm-enter'); void pg.offsetWidth; pg.classList.add('amm-enter'); }

    if(window.__ammInitMotion && pg){ try{ window.__ammInitMotion(pg); }catch(e){} }
    if(page==='parts' && window.__bootPartsPage){ try{ window.__bootPartsPage(); }catch(e){} }
    if(page==='admin' && window.__ammBootAdmin){ try{ window.__ammBootAdmin(); }catch(e){} }
    if(page==='contact'){ AMM.initContactHours(); }
    if(page==='home'){
      var c = document.getElementById('amm-stratmap');
      if(c && window.__initStratMap){ try{ window.__initStratMap(c); }catch(e){} }
      var pc = document.getElementById('amm-plane-canvas');
      if(pc && !window.__planeStarted){
        loadThree(function(){
          if(window.initPlaneHero){ try{ window.initPlaneHero(pc, '/plane.glb'); window.__planeStarted = true; }catch(e){ console.error(e); } }
        });
      }
    }
    // deep-link anchor (e.g. /products#components)
    if(location.hash){
      var t = document.getElementById(location.hash.slice(1));
      if(t && t.scrollIntoView){ t.scrollIntoView({behavior:'auto', block:'start'}); }
    }
  }

  if(document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
