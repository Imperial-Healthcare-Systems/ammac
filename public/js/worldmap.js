/* Strategic Presence world map — pin bubbles.
   Hover previews, click/Enter keeps one open, Escape or click-away closes.
   place() clamps a bubble inside the map frame so edge pins don't bleed out. */
(function () {
  function boot() {
    var frame = document.querySelector('.amm-wmap');
    if (!frame) return;
    var pins = [].slice.call(frame.querySelectorAll('.amm-pin'));
    if (!pins.length) return;
    var PAD = 8;

    function place(pin) {
      var tip = pin.querySelector('.amm-pin-tip');
      if (!tip) return;
      tip.style.setProperty('--nudge', '0px');
      pin.classList.remove('tip-below');
      var f = frame.getBoundingClientRect(), r = tip.getBoundingClientRect();
      var dx = 0;
      if (r.left < f.left + PAD) dx = (f.left + PAD) - r.left;
      else if (r.right > f.right - PAD) dx = (f.right - PAD) - r.right;
      if (dx) tip.style.setProperty('--nudge', Math.round(dx) + 'px');
      if (r.top < f.top + PAD) pin.classList.add('tip-below');
    }

    function clear() {
      pins.forEach(function (p) { p.classList.remove('is-on'); });
    }

    pins.forEach(function (p) {
      p.addEventListener('mouseenter', function () { place(p); });
      p.addEventListener('focus', function () { place(p); });
      p.addEventListener('click', function (e) {
        e.stopPropagation();
        var on = p.classList.contains('is-on');
        clear();
        if (!on) { p.classList.add('is-on'); place(p); }
      });
    });
    document.addEventListener('click', clear);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') clear(); });
    window.addEventListener('resize', function () {
      var on = frame.querySelector('.amm-pin.is-on');
      if (on) place(on);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
