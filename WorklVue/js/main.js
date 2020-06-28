// // летающая пчела
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.strokeStyle = "DeepPink";
// ctx.lineWidth = 2;

// let circle = function (x, y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//   if (fillCircle) {
//     ctx.fill();
//   } else {
//     ctx.stroke();
//   }
// };

// let drawBee = function (x, y) {
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "Black";
//   ctx.fillStyle = "Gold";

//   circle(x, y, 8, true);
//   circle(x, y, 8, false);
//   circle(x - 5, y - 11, 5, false);
//   circle(x + 5, y - 11, 5, false);
//   circle(x - 2, y - 1, 2, false);
//   circle(x + 2, y - 1, 2, false);
// };

// let update = function (coordinate) {
//   let offset = Math.random() * 4 - 2;
//   coordinate += offset;

//   if (coordinate > 200) {
//     coordinate = 0;
//   }

//   if (coordinate < 0) {
//     coordinate = 0;
//   }
//   return coordinate;
// };

// let x = 100;
// let y = 100;
// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   drawBee(x, y);
//   x = update(x);
//   y = update(y);
//   // ctx.strokeRect(0, 0, 200, 200);
// }, 30);

// летающая пчела

// // летающий квадрат
// let position = 0;
// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   ctx.fillRect(position, 0, 20, 20);
//   position++;
//   if (position > 200) {
//       position = 0;
//   }
// }, 30);

// круг - части круга
// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();

// крестик нарисованый
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);
// ctx.stroke();

// ctx.strokeRect(50, 50, 100, 30);

// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(i * 10, i * 10, 10, 10);
// }

// скачащий мячик
// let Ball = function() {
//   this.x=100;
//   this.y=100;
//   this.xSpeed=-2;
//   this.ySpeed=3;
// };

// let circle = function (x,y,radius,fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x,y,radius,0,Math.PI*2, false);
//   if (fillCircle) {
//     ctx.fill();
//   } else {
//     ctx.stroke();
//   }
// };
// Ball.prototype.draw = function() {
//   circle(this.x, this.y, 3, true);
// };
// Ball.prototype.move = function () {
//   this.x+=this.xSpeed;
//   this.y+=this.ySpeed;
// }
// Ball.prototype.checkCollision = function () {
//   if (this.x<0||this.x>200) {
//     this.xSpeed = -this.xSpeed;
//   }
//   if (this.y<0||this.y>200) {
//     this.ySpeed = -this.ySpeed;2
// }
// };
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let ball = new Ball();
// setInterval(function() {
//   ctx.clearRect(0,0,200,200);
//   ball.draw();
//   ball.move();
//   ball.checkCollision();
//   ctx.strokeRect(0,0,200,200);
// },30);

