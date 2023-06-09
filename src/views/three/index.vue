<template>
  <div class="team">
    {{ $t('nav.threeJs') }}
    <div ref="box"></div>
  </div>
</template>

<script setup>
  import * as THREE from 'three';
  import { onMounted, ref } from 'vue';
  import Stats from 'three/examples/jsm/libs/stats.module';

  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';

  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

  const box = ref();

  onMounted(() => {
    let mixer;

    const clock = new THREE.Clock();
    // const container = document.getElementById('container');

    const stats = new Stats();
    box.value.appendChild(stats.dom);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    box.value.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      stats.update();

      renderer.render(scene, camera);
    }

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/models/gltf/LittlestTokyo.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      animate();
    }, undefined, (e) => {
      console.error(e);
    });
  });
</script>

<style lang="scss" scoped>
</style>
