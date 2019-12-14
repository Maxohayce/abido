const headerConfig = () => {
  let header = document.querySelector("#header"),
    elementOffset = $("#header").offset().top,
    detOffset = $("#headerDet").offset().top;

  elementOffset >= detOffset
    ? header.classList.add("bg-white", "shadow-sm")
    : header.classList.remove("bg-white", "shadow-sm");
};
