
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

