// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});

// TYPING EFFECT

const typingElement = document.getElementById("typing-text");

const texts = [

    "Creator • Gamer • Developer",

    "Web Designer",

    "Minecraft Builder",

    "Python Learner"

];

let textIndex = 0;

function changeText() {

    typingElement.style.opacity = 0;

    setTimeout(() => {

        textIndex++;

        if (textIndex >= texts.length) {

            textIndex = 0;

        }

        typingElement.textContent = texts[textIndex];

        typingElement.style.opacity = 1;

    }, 300);

}

setInterval(changeText, 2500);

// THREE JS SCENE

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

camera.position.z = 30;

// PARTICLES

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 3000;

const positions = new Float32Array(
    particlesCount * 3
);

for (let i = 0; i < particlesCount * 3; i++) {

    positions[i] = (Math.random() - 0.5) * 200;

}

particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const particlesMaterial =
new THREE.PointsMaterial({

    size: 0.15

});

const particlesMesh =
new THREE.Points(
    particlesGeometry,
    particlesMaterial
);

scene.add(particlesMesh);

// MOUSE EFFECT

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX =
        (event.clientX /
            window.innerWidth - 0.5);

    mouseY =
        (event.clientY /
            window.innerHeight - 0.5);

});

// ANIMATION LOOP

function animate() {

    requestAnimationFrame(animate);

    particlesMesh.rotation.y += 0.0008;

    particlesMesh.rotation.x += 0.0002;

    particlesMesh.rotation.y += mouseX * 0.0005;

    particlesMesh.rotation.x += mouseY * 0.0005;

    renderer.render(
        scene,
        camera
    );

}

animate();

// RESIZE

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);