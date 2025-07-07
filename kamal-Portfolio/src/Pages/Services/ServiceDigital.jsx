    import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import './ServiceDigital.scss';

const ServiceDigital = () => {
  const mountRef = useRef(null);
  const [activePoint, setActivePoint] = useState(null);
  const [services] = useState([
    {
      id: 'ai',
      title: 'AI Integration',
      description: 'Advanced machine learning models integrated into your workflow',
      position: { lat: 40.7128, lng: -74.0060 }, // New York
      color: 0xff5555
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Decentralized applications with zero-knowledge proofs',
      position: { lat: 51.5074, lng: -0.1278 }, // London
      color: 0x55ff55
    },
    {
      id: 'quantum',
      title: 'Quantum Readiness',
      description: 'Post-quantum cryptography for future security',
      position: { lat: 35.6762, lng: 139.6503 }, // Tokyo
      color: 0x5555ff
    },
    {
      id: 'iot',
      title: 'IoT Networks',
      description: 'Mesh networks with self-healing protocols',
      position: { lat: -33.8688, lng: 151.2093 }, // Sydney
      color: 0xffff55
    },
    {
      id: 'ar',
      title: 'AR Ecosystems',
      description: 'Persistent augmented reality environments',
      position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      color: 0xff55ff
    }
  ]);

  useEffect(() => {
    // Advanced 3D Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020210);
    scene.fog = new THREE.FogExp2(0x020210, 0.001);

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mountRef.current.appendChild(renderer.domElement);

    // Advanced Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.5;
    composer.addPass(bloomPass);

    // Create wireframe Earth
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add data points
    const points = [];
    services.forEach(service => {
      const phi = (90 - service.position.lat) * (Math.PI / 180);
      const theta = (service.position.lng + 180) * (Math.PI / 180);
      
      const pointGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const pointMaterial = new THREE.MeshBasicMaterial({ color: service.color });
      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      
      point.position.setFromSphericalCoords(2.1, phi, theta);
      point.userData = { id: service.id };
      scene.add(point);
      points.push(point);

      // Add connection line
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        point.position.clone().normalize().multiplyScalar(2.1)
      ]);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: service.color,
        transparent: true,
        opacity: 0.3
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    });

    // Add atmospheric glow
    const glowGeometry = new THREE.SphereGeometry(2.2, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { type: "c", value: new THREE.Color(0x00a8ff) },
        viewVector: { type: "v3", value: camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 actual_normal = normalize(normalMatrix * normal);
          intensity = pow(0.7 - dot(actual_normal, normalize(viewVector)), 2.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, 0.3);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Advanced controls with inertia
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI;

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(points);
      
      if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
        const point = intersects[0].object;
        if (!activePoint || activePoint.userData.id !== point.userData.id) {
          setActivePoint(services.find(s => s.id === point.userData.id));
        }
      } else {
        document.body.style.cursor = 'auto';
        if (activePoint) {
          setActivePoint(null);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, false);

    // Animation loop with adaptive performance
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      frame += 0.005;
      earth.rotation.y += 0.001;
      glow.rotation.y = earth.rotation.y;
      
      // Pulsing effect for active point
      if (activePoint) {
        const activePointObj = points.find(p => p.userData.id === activePoint.id);
        if (activePointObj) {
          activePointObj.scale.x = Math.sin(frame * 5) * 0.2 + 1;
          activePointObj.scale.y = Math.sin(frame * 5) * 0.2 + 1;
          activePointObj.scale.z = Math.sin(frame * 5) * 0.2 + 1;
        }
      }
      
      controls.update();
      composer.render();
    };
    animate();

    // Responsive handling with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        composer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [activePoint, services]);

  return (
    <section className="service-digital">
      <div className="service-digital__canvas" ref={mountRef} />
      
      <div className="service-digital__info">
        <h2 className="service-digital__title">Digital Transformation Services</h2>
        <p className="service-digital__subtitle">
          We architect the digital future with cutting-edge technologies
        </p>
        
        {activePoint ? (
          <div className="service-digital__card">
            <h3>{activePoint.title}</h3>
            <p>{activePoint.description}</p>
            <button className="service-digital__cta">Explore Solution</button>
          </div>
        ) : (
          <div className="service-digital__card service-digital__card--default">
            <h3>Global Digital Solutions</h3>
            <p>Hover over a point to discover our specialized services</p>
          </div>
        )}
      </div>
      
      <div className="service-digital__hud">
        <div className="service-digital__hud-item">
          <span className="service-digital__hud-label">Quantum Nodes</span>
          <div className="service-digital__hud-value">247</div>
        </div>
        <div className="service-digital__hud-item">
          <span className="service-digital__hud-label">AI Clusters</span>
          <div className="service-digital__hud-value">89</div>
        </div>
        <div className="service-digital__hud-item">
          <span className="service-digital__hud-label">Blockchain Layers</span>
          <div className="service-digital__hud-value">16</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDigital;