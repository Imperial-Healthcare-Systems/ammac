
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

