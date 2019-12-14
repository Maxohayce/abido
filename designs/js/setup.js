const makeActive = selected => {
  let classArray = ["text-white"],
    selectedArray = [...selected.classList],
    background = selectedArray.includes("card-success")
      ? "bg-success"
      : "bg-primary";

  classArray.push(background);

  selectedArray.includes("card-multiple")
    ? ""
    : $(selected)
        .parent()
        .parent()
        .find(".card")
        .removeClass(classArray);

  $(selected).toggleClass(classArray);
};
