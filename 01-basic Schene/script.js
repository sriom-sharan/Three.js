console.log(window.screen);

/*
Step-1. Create a scene(Scene)
Step-2. Create a mesh(Mesh) using geometry(BoxGeometry) and material(MeshBasicMaterial).
Step-3. Add mesh to scene.
Step-4. Create a camera(PerspectiveCamera) and give fov and aspect ratio.
Step-5. Camaera will be inside the object by default, so move the camera in z axis(postion.z=number);
Step-6. Add camera to scene.
Step-7. Get the class of canvas using query selector.
Step-8. Create a Renderer(WebGLRenderer) and pass the reference of canvas.
Step-9. Set the size of renderer, it will set the size of canvas.
Step-10. Render the scene (renderer.render(scene, camera))
*/

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera 📷
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //(FOV , aspect ratio)
camera.position.z = 3; // Object - Toward or far from us
// camera.position.y=2 // vertical
camera.position.x = 2; // horizontal
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// sets the size of the canvas
renderer.setSize(sizes.width, sizes.height);
// renders the object
renderer.render(scene, camera);
