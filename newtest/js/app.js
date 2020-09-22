// if(window.addEventListener) {
//   window.addEventListener('load', function () {
  
//   var canvas, context, tool;

//   function init () {
//       // Находим canvas элемент
//       canvas = document.getElementById('tablet');
      
//       if (!canvas) {
//           alert('Ошибка! Canvas элемент не найден!');
//           return;
//       }

//       if (!canvas.getContext) {
//           alert('Ошибка: canvas.getContext не существует!');
//           return;
//       }

//       // Получаем 2D canvas context.
//       context = canvas.getContext('2d');
//       if (!context) {
//           alert('Ошибка: getContext! не существует');
//           return;
//       }
      
//       tool = new tool_pencil();
//       canvas.addEventListener('mousedown', ev_canvas, false);
//       canvas.addEventListener('mousemove', ev_canvas, false);
//       canvas.addEventListener('mouseup',   ev_canvas, false);
//   }

//   // Здесь мы будем ловить движения мыши
//   function tool_pencil () {
//       var tool = this;
//       this.started = false;

  
//       this.mousedown = function (ev) {
//           context.beginPath();
//           context.moveTo(ev._x, ev._y);
//           tool.started = true;
//       };

//       // Эта функция вызывается каждый раз, когда вы перемещаете мышь.
//       // Но рисование происходит только когда вы удерживаете кнопку мыши
//       // нажатой.
//       this.mousemove = function (ev) {
//           if (tool.started) {
//               context.lineTo(ev._x, ev._y);
//               context.stroke();
//           }
//       };

//       // Событие при отпускании мыши
//       this.mouseup = function (ev) {
//           if (tool.started) {
//               tool.mousemove(ev);
//               tool.started = false;
//           }
//       };
//   }

//   // Эта функция определяет позицию курсора относительно холста
//   function ev_canvas (ev) {
//       if (ev.layerX || ev.layerX == 0) { // Firefox
//           ev._x = ev.layerX;
//           ev._y = ev.layerY;
//       } else if (ev.offsetX || ev.offsetX == 0) { // Opera
//           ev._x = ev.offsetX;
//           ev._y = ev.offsetY;
//       }

//       // Вызываем обработчик события tool
//       var func = tool[ev.type];
//       if (func) {
//           func(ev);
//       }
//   }

//   init();

// }, false); }


// var canvas = document.getElementById('Canvas');
// var context = canvas.getContext("2d");

// // Map sprite
// var mapSprite = new Image();
// mapSprite.src = "http://www.retrogameguide.com/images/screenshots/snes-legend-of-zelda-link-to-the-past-8.jpg";

// var Marker = function () {
//        this.Sprite = new Image();
//        this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
//        this.Width = 12;
//        this.Height = 20;
//        this.XPos = 0;
//        this.YPos = 0;
// }

// var Markers = new Array();

// var mouseClicked = function (mouse) {
//        // Get corrent mouse coords
//        var rect = canvas.getBoundingClientRect();
//        var mouseXPos = (mouse.x - rect.left);
//        var mouseYPos = (mouse.y - rect.top);

//        console.log("Marker added");

//        // Move the marker when placed to a better location
//        var marker = new Marker();
//        marker.XPos = mouseXPos - (marker.Width / 2);
//        marker.YPos = mouseYPos - marker.Height;

//        Markers.push(marker);
// }

// // Add mouse click event listener to canvas
// canvas.addEventListener("mousedown", mouseClicked, false);

// var firstLoad = function () {
//        context.font = "15px Georgia";
//        context.textAlign = "center";
// }

// firstLoad();

// var main = function () {
//        draw();
// };

// var draw = function () {
//        // Clear Canvas
//        context.fillStyle = "#000";
//        context.fillRect(0, 0, canvas.width, canvas.height);

//        // Draw map
//        // Sprite, X location, Y location, Image width, Image height
//        // You can leave the image height and width off, if you do it will draw the image at default size
//        context.drawImage(mapSprite, 0, 0, 700, 700);

//        // Draw markers
//        for (var i = 0; i < Markers.length; i++) {
//            var tempMarker = Markers[i];
//            // Draw marker
//            context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

//            // Calculate postion text
//            var markerText = "Postion (X:" + tempMarker.XPos + ", Y:" + tempMarker.YPos;

//            // Draw a simple box so you can see the position
//            var textMeasurements = context.measureText(markerText);
//            context.fillStyle = "#666";
//            context.globalAlpha = 0.7;
//            context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
//            context.globalAlpha = 1;

//            // Draw position above
//            context.fillStyle = "#000";
//            context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
//        }
// };

// setInterval(main, (1000 / 60)); // Refresh 60 times a second







let burger = document.querySelector('.burger');



burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    console.log('Клик по кнопке');
});
