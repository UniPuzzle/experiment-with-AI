const triangles = document.querySelectorAll(".triangle");

for (let i = 0; i < triangles.length; i++) {
  triangles[i].addEventListener("click", function () {
    // Обработка клика по треугольнику
    alert("Triangle clicked:", this.dataset.color, this.dataset.size);
    // ...
  });
}
