const canvas = document.getElementById("triangleCanvas");
const ctx = canvas.getContext("2d");

let points = [
  { x: 100, y: 300 },
  { x: 250, y: 100 },
  { x: 400, y: 300 }
];

let draggingPoint = null;

function drawTriangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // τρίγωνο
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.closePath();
  ctx.stroke();

  // κορυφές
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#2563eb";
    ctx.fill();
  });
}

canvas.addEventListener("mousedown", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  points.forEach(p => {
    if (Math.hypot(p.x - x, p.y - y) < 10) {
      draggingPoint = p;
    }
  });
});

canvas.addEventListener("mousemove", e => {
  if (!draggingPoint) return;

  const rect = canvas.getBoundingClientRect();
  draggingPoint.x = e.clientX - rect.left;
  draggingPoint.y = e.clientY - rect.top;

  drawTriangle();
});

canvas.addEventListener("mouseup", () => {
  draggingPoint = null;
});

drawTriangle();
