const registerInteract = (
  screenButton,
  leftScreen,
  leftScreenRow,
  rightScreen
) => {
  screenButton.classList.toggle("activated");

  leftScreen.classList.toggle("moved");
  leftScreen.classList.toggle("col-md-4");
  leftScreen.classList.toggle("col-md-6");

  rightScreen.classList.toggle("moved");

  setTimeout(() => {
    [...leftScreenRow.querySelectorAll(".col")].forEach(col => {
      col.classList.toggle("d-none");
    });
    [...rightScreen.querySelectorAll("div.row > div")].forEach(col => {
      col.classList.toggle("d-none");
    });
    screenButton.classList.toggle("activated");
    leftScreen.classList.toggle("col-md-4");
    leftScreen.classList.toggle("col-md-6");
    document.querySelector("#header .navbar-brand").style.color = "green";
    // leftScreenRow.innerHTML =
  }, 300);
};

