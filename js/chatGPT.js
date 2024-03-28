// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".element");

//   elements.forEach((element) => {
//     element.addEventListener("mousedown", function (event) {
//       let shiftX = event.clientX - element.getBoundingClientRect().left;
//       let shiftY = event.clientY - element.getBoundingClientRect().top;

//       element.style.position = "absolute";
//       element.style.zIndex = 1000;

//       moveAt(event.pageX, event.pageY);

//       function moveAt(pageX, pageY) {
//         element.style.left = pageX - shiftX + "px";
//         element.style.top = pageY - shiftY + "px";
//       }

//       function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//       }

//       document.addEventListener("mousemove", onMouseMove);

//       element.onmouseup = function () {
//         document.removeEventListener("mousemove", onMouseMove);
//         element.onmouseup = null;
//       };
//     });
//   });
// });
// ==============
document.addEventListener("DOMContentLoaded", function () {
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape) => {
    shape.addEventListener("click", function () {
      // Обработка клика по фигуре
      alert("Вы кликнули по фигуре!");
    });

    shape.addEventListener("mousedown", function (event) {
      // Обработка перемещения фигуры
      let shiftX = event.clientX - shape.getBoundingClientRect().left;
      let shiftY = event.clientY - shape.getBoundingClientRect().top;

      shape.style.zIndex = 1000;

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        shape.style.left = pageX - shiftX + "px";
        shape.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      shape.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        shape.onmouseup = null;
      };
    });
  });
});
