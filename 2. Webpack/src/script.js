import './style.css';
import * as THREE from 'three';

console.log(THREE.MeshBasicMaterial
);

// Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:"red"})
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh)
// Sizes
const size ={
    width: window.innerWidth,
    height:window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75,size.width/size.height);
camera.position.z=3;
scene.add(camera)
// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(size.width,size.height);

renderer.render(scene,camera)