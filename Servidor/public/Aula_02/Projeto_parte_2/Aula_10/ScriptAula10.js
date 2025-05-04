document.addEventListener("DOMContentLoaded", function () {
  const btnCriarPost = document.getElementById("btnCriarPost");
  const formContainer = document.getElementById("formContainer");

  btnCriarPost.addEventListener("click", function () {
    formContainer.style.display = "block";
    btnCriarPost.style.display = "none";
  });
});
