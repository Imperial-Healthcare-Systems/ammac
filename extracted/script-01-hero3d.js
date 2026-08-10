
/* AMMAC hero — scroll-driven 3D airplane (non-module build for single-file / file://). */
(function(){
  var POSE = {
    pitch: 0.44, yaw: -1.215, roll: -2.635,
    x: 0.06, y: 0.23, z: 2.85,
    exitX: 6.0, exitYaw: -0.31, exitRoll: 0.05, exitY: 2.04, exitZ: 6.0
  };
  var TARGET_SIZE = 3.0;
  /* The hero unpins once the aircraft has left frame. The section is short
     enough that the pin ends just after the exit, and CURVE_SPAN feeds only
     that leading part of the easing curve, so the motion per pixel of scroll is
     unchanged from the full-length version. (Shrinking POSE.exit* instead would
     reach the same end state but bend the curve, adding an ease-out just as the
     aircraft should be rushing past.) Pair with .amm-hero-section height:
     travel = height - 100vh must stay at CURVE_SPAN x 160vh. */
  var CURVE_SPAN = 0.52;

  function initPlaneHero(canvas, glbUrl){
    if (!canvas || canvas.__planeBooted) return;
    if (!window.THREE || !window.GLTFLoader){ console.warn('[plane-hero] THREE not ready'); return; }
    canvas.__planeBooted = true;
    var THREE = window.THREE;

    var reduce = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.2, 7.1);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var hemi = new THREE.HemisphereLight(0xeaf3ff, 0xb9c4d6, 1.05);
    scene.add(hemi);
    var key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(4, 6, 7); scene.add(key);
    var rim = new THREE.DirectionalLight(0xccddff, 0.9);
    rim.position.set(-6, 2, -4); scene.add(rim);

    var pose = new THREE.Group();
    var spin = new THREE.Group();
    pose.add(spin); scene.add(pose);

    var ready = false, scrollP = 0;
    var curX = POSE.x, curYaw = POSE.yaw, curRoll = POSE.roll, curY = POSE.y, curZ = POSE.z;

    var loader = new window.GLTFLoader();
    if (window.MeshoptDecoder && loader.setMeshoptDecoder){
      loader.setMeshoptDecoder(window.MeshoptDecoder);
    }
    loader.load(glbUrl, function(gltf){
      var plane = gltf.scene;
      var box = new THREE.Box3().setFromObject(plane);
      var center = box.getCenter(new THREE.Vector3());
      var size = box.getSize(new THREE.Vector3());
      var maxDim = Math.max(size.x, size.y, size.z) || 1;
      var s = TARGET_SIZE / maxDim;
      plane.scale.setScalar(s);
      plane.position.copy(center).multiplyScalar(-s);

      spin.rotation.x = -1.565;
      spin.rotation.y = Math.PI;

      plane.traverse(function(o){
        if (o.isMesh && o.material){
          var m = o.material;
          if (m.metalness !== undefined) m.metalness = Math.min(m.metalness || 0, 0.2);
          if (m.roughness !== undefined) m.roughness = Math.max(m.roughness == null ? 1 : m.roughness, 0.55);
          o.castShadow = false;
        }
      });
      spin.add(plane);
      ready = true;
    }, undefined, function(err){ console.error('[plane-hero] failed to load model', err); });

    function resize(){
      var w = canvas.clientWidth || (canvas.parentElement && canvas.parentElement.clientWidth);
      var h = canvas.clientHeight || (canvas.parentElement && canvas.parentElement.clientHeight);
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = w < 760 ? 9.6 : 7.1;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    function updateScroll(){
      var hero = canvas.closest('section') || canvas.parentElement;
      if (!hero){ scrollP = 0; return; }
      var rect = hero.getBoundingClientRect();
      var travel = hero.offsetHeight - window.innerHeight;
      var sp = travel > 0 ? -rect.top / travel : 0;
      scrollP = Math.max(0, Math.min(1, sp));
    }
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    var visible = true;
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(e){ visible = e[0].isIntersecting; }, { threshold: 0 });
      io.observe(canvas);
    }

    function lerp(a,b,t){ return a + (b - a) * t; }
    function smooth(t){ return t * t * (3 - 2 * t); }

    function frame(){
      requestAnimationFrame(frame);
      if (!ready || (!visible && scrollP >= 1)) return;
      var p = reduce ? 0 : smooth(scrollP * CURVE_SPAN);
      var tx = POSE.x + p * POSE.exitX;
      var tyaw = POSE.yaw + p * POSE.exitYaw;
      var troll = POSE.roll + p * POSE.exitRoll;
      var ty = POSE.y + p * POSE.exitY;
      var tz = POSE.z + p * POSE.exitZ;
      var k = 0.1;
      curX = lerp(curX, tx, k);
      curYaw = lerp(curYaw, tyaw, k);
      curRoll = lerp(curRoll, troll, k);
      curY = lerp(curY, ty, k);
      curZ = lerp(curZ, tz, k);
      pose.position.set(curX, curY, curZ);
      pose.rotation.set(POSE.pitch, curYaw, curRoll);
      renderer.render(scene, camera);
    }
    frame();
  }

  window.initPlaneHero = initPlaneHero;
})();

