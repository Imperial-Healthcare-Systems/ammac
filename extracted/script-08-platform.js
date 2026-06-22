
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
