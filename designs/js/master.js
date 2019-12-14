const togglePass = eye => {
  eye.classList.toggle("fa-eye");
  eye.classList.toggle("fa-eye-slash");
  let newAttr =
    eye.parentElement.parentElement.parentElement
      .querySelector("input")
      .getAttribute("type") === "password"
      ? "text"
      : "password";
  eye.parentElement.parentElement.parentElement
    .querySelector("input")
    .setAttribute("type", newAttr);
};

window.onload = () => {
  $(".screen-button").click(function(e) {
    e.preventDefault();
    registerInteract(
      e.target,
      document.querySelector("#leftScreen"),
      document.querySelector("#leftScreenRow"),
      document.querySelector("#rightScreen")
    );
  });

  $("[class*='fa-eye']").click(e => togglePass(e.target));
};

window.onscroll = () => {
  headerConfig(); //Header.js
};
