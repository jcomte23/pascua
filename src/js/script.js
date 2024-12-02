import "../css/style.css"

const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];

function createFlowers() {
    for (let i = 0; i < 30; i++) {
        flowers.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            speedY: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 75%)`,
        });
    }
}

function drawFlower(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function updateFlowers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(flower => {
        flower.y += flower.speedY;
        if (flower.y > canvas.height) flower.y = 0;
        drawFlower(flower.x, flower.y, flower.size, flower.color);
    });
    requestAnimationFrame(updateFlowers);
}

createFlowers();
updateFlowers();
