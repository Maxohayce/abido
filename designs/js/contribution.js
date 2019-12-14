const chooseSkill = div => {
  btn = div.querySelector(".btn");
  [...document.querySelectorAll(`.skill-block`)].forEach(div => {
    div.querySelector(".btn").classList.remove("active");
    div.querySelector(".btn").classList.remove("shadow");
  });

  btn.classList.toggle("active");
  btn.classList.toggle("shadow");
};

const convertMoney = (value, det) => {
  let showCurrency = value.substring(0, 1);
  if (det === showCurrency) {
    return value;
  }

  let rate = showCurrency === "$" ? 362 : 0.00276243093,
    lastString = value.substring(value.length - 1),
    multiplier = (lastString => {
      switch (lastString) {
        case "K":
          return 1000;
        case "M":
          return 1000000;
        default:
          return 1000000000;
      }
    })(lastString),
    realVal = value.substring(1, value.length - 1) * multiplier,
    conversion = rate * realVal,
    newLastDigit,
    divider;

  if (conversion >= 1000 && conversion < 1000000) {
    (newLastDigit = "K"), (divider = 1000);
  } else if (conversion < 1000000000 && conversion >= 1000000) {
    (newLastDigit = "M"), (divider = 1000000);
  } else {
    (newLastDigit = "B"), (divider = 1000000000);
  }
  let newCurrency = showCurrency === "$" ? "&#8358;" : "$",
    showValue = newCurrency + Math.round(conversion / divider) + newLastDigit;

  return showValue;
};

[...document.querySelectorAll(".skill-block")].forEach(div => {
  div.addEventListener("click", () => chooseSkill(div));
});

[...document.querySelectorAll(".money-currency")].forEach(btn => {
  btn.addEventListener("click", e => {
    [...document.querySelectorAll(".money-amount")].forEach(
      amount =>
        (amount.innerHTML = convertMoney(amount.innerHTML, e.target.innerHTML))
    );

    [...document.querySelectorAll(".money-currency")].forEach(btn =>
      btn.classList.remove("active")
    );

    e.target.classList.add("active");
  });
});
