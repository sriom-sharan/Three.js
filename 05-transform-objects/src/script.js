import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)


// ----- POSTION --------
// Changes the position of the object
// mesh.position.x = 0.4 //horzizontal
// mesh.position.y = -1.5 //vertical
// mesh.position.z = 3

// Short for x , y and z
// mesh.position.set(0.4,-0.7,-0.8)

// normalizes the strech of mesh
// mesh.position.normalize()
// Distance from mesh and center of the scene
// console.log(mesh.position.length())

// ----- SCALE --------
// mesh.scale.x=2
// mesh.scale.y=1
// mesh.scale.z=1
// mesh.scale.set(1,0.7,1)


// ----- ROTATION --------
// mesh.rotation.reorder('YXZ') // sets Rotion order of axis
// mesh.rotation.y= Math.PI //180deg or 3.14...
// mesh.rotation.x= Math.PI / 2 //90deg or 1.6..


// scene.add(mesh)

// Axes helper
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Changes the position of the camera view
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1

// Distance between camera and object
// console.log(mesh.position.distanceTo(camera.position))

scene.add(camera)
// camera focuses or target the 3D obj
// camera.lookAt(mesh.position)
// camera.lookAt(new THREE.Vector3(1,0,0))




/*
GROUP
*/
const group = new THREE.Group()
group.position.y=1
group.scale.y=2
group.rotation.y=1
scene.add(group);
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'})
) ;
cube1.position.x=2;

group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'red'})
) ;
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'yellow'})
) ;
cube3.position.x=-2;
group.add(cube3)








/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


