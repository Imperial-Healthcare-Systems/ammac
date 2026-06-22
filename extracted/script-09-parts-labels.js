
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
