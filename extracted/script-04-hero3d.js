
(function(){
  var PAGE_TITLES = {
    home: "AMMAC Aircraft Parts — Aviation Aftermarket & Supply Chain Solutions",
    products: "Products & Services — AMMAC Aircraft Parts",
    repair: "Repair Management — AMMAC Aircraft Parts",
    warehousing: "Warehousing & Supply Chain — AMMAC Aircraft Parts",
    why: "Why AMMAC — AMMAC Aircraft Parts",
    parts: "Parts Search & Live Inventory — AMMAC Aircraft Parts",
    contact: "Contact Us — AMMAC Aircraft Parts",
    admin: "Admin Portal — AMMAC Aircraft Parts"
  };
  var ROUTE_FOR = { "/":"home", "/products":"products", "/repair":"repair",
                     "/warehousing":"warehousing", "/parts":"parts", "/why":"why", "/contact":"contact", "/admin":"admin" };
  var ACTIVE_LINK = { home:0, products:1, repair:2, warehousing:3, parts:4, why:5, contact:6 };

  var state = { megaOpen:false, mobileOpen:false, mobileProdOpen:false, scrolled:false };

  function header(){ return document.getElementById('amm-header'); }
  function $(id){ return document.getElementById(id); }

  // ---- nav interactivity --------------------------------------------------
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
    var sub = document.querySelector('#amm-mobile [id], #amm-mobile');
    // find the collapsible block: the div right after the products button
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
      var company=(document.getElementById('cf-company')||{}).value||'';
      var msg=(document.getElementById('cf-msg')||{}).value||'';
      var note=document.getElementById('cf-note');
      if(!email || email.indexOf('@')<0){
        var e=document.getElementById('cf-email'); if(e){ e.focus(); e.style.borderColor='#D92D20'; }
        if(note){ note.innerHTML='Please enter a valid email so we can reply.'; note.style.color='#D92D20'; }
        return;
      }
      var subject='Website enquiry from '+(name||'a visitor');
      var body='Name: '+(name||'—')+'\r\nEmail: '+email+'\r\n\r\nMessage:\r\n'+(msg||'—')+'\r\n\r\nSent from AMMACAircraft.com contact page.';
      var mailto='mailto:Sales@AMMACAircraft.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      try{ window.location.href=mailto; }catch(err){ window.open(mailto,'_blank'); }
      if(note){ note.innerHTML='Your email app is opening a message to <strong style="color:#5b5a6e">Sales@AMMACAircraft.com</strong> — just press send. If nothing opened, email us directly.'; note.style.color='#9a99ab'; }
    },
    toggleMega: function(){ state.megaOpen = !state.megaOpen; applyMega(); },
    toggleMobile: function(){ state.mobileOpen = !state.mobileOpen; applyMobile(); },
    toggleMobileProd: function(){ state.mobileProdOpen = !state.mobileProdOpen; applyMobileProd(); },
    closeMobile: function(){ state.mobileOpen = false; state.mobileProdOpen = false; applyMobile(); applyMobileProd(); }
  };
  window.AMM = AMM;

  // sticky header sentinel
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

  // ---- active-link highlight ----------------------------------------------
  function setActive(page){
    var links = document.querySelectorAll('#amm-desknav > a, #amm-desknav > button');
    // desktop order: Home(a), Products(button), Repair(a), Warehouse(a), Why(a)
    var deskItems = [
      document.querySelector('#amm-desknav a[href="#/"]'),
      document.querySelector('#amm-desknav button'),
      document.querySelector('#amm-desknav a[href="#/repair"]'),
      document.querySelector('#amm-desknav a[href="#/warehousing"]'),
      document.querySelector('#amm-desknav a[href="#/parts"]'),
      document.querySelector('#amm-desknav a[href="#/why"]')
    ];
    deskItems.forEach(function(el,i){
      if(el) el.style.color = (ACTIVE_LINK[page]===i) ? '#2f27ce' : '#1a1830';
    });
  }

  // ---- routing ------------------------------------------------------------
  var stratStarted = false;
  function show(page, anchor){
    document.querySelectorAll('.amm-page').forEach(function(el){
      el.style.display = (el.getAttribute('data-page')===page) ? 'block' : 'none';
    });
    document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
    setActive(page);
    var __pg = document.querySelector('.amm-page[data-page="'+page+'"]');
    if(__pg){ __pg.classList.remove('amm-enter'); void __pg.offsetWidth; __pg.classList.add('amm-enter'); }
    if(window.__ammInitMotion && __pg){ try{ window.__ammInitMotion(__pg); }catch(e){} }
    if(page==='parts' && window.__bootPartsPage){ try{ window.__bootPartsPage(); }catch(e){} }
    if(page==='admin' && window.__ammBootAdmin){ try{ window.__ammBootAdmin(); }catch(e){} }
    AMM.closeMega && AMM.closeMega();
    state.megaOpen = false; applyMega();
    AMM.closeMobile();
    // boot home strat-map once
    if(page==='home' && !stratStarted){
      var c = document.getElementById('amm-stratmap');
      if(c && window.__initStratMap){ try{ window.__initStratMap(c); }catch(e){} stratStarted = true; }
    }
    if(page==='home' && !window.__planeStarted){
      var pc = document.getElementById('amm-plane-canvas');
      if(pc && window.initPlaneHero && window.__AMM_PLANE_GLB){
        try{ window.initPlaneHero(pc, window.__AMM_PLANE_GLB); window.__planeStarted = true; }catch(e){ console.error(e); }
      }
    }
    // scroll to anchor or top
    if(anchor){
      var t = document.getElementById(anchor);
      if(t){ if(t.scrollIntoView) t.scrollIntoView({behavior:'auto', block:'start'}); return; }
    }
    if(window.scrollTo) window.scrollTo(0,0);
  }

  function parseHash(){
    var h = location.hash || '#/';
    h = h.replace(/^#/, '');
    var anchor = '';
    // anchors were encoded as ~anchor
    var tilde = h.indexOf('~');
    if(tilde >= 0){ anchor = h.slice(tilde+1); h = h.slice(0, tilde); }
    else if(h.indexOf('#') >= 0){ var p=h.split('#'); h=p[0]; anchor=p[1]; }
    if(h==='' ) h='/';
    var page = ROUTE_FOR[h] || 'home';
    return {page:page, anchor:anchor};
  }

  function route(){ var r = parseHash(); show(r.page, r.anchor); }

  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', route);
  // in case DOMContentLoaded already fired
  if(document.readyState !== 'loading') route();
})();
