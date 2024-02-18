let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let arrbut = Array.from(buttons);
let pat = /\d+/;



arrbut.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    if (e.innerHTML !== "AC" && e.innerHTML !== "DEL" && e.innerHTML !== "=") {
      display.value += e.innerHTML;
    }

    switch (e.innerHTML) {
      case "AC":
        display.value = "";
        break;

      case "DEL":
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        display.value = eval(display.value);
        break;
      case "%":
        display.value = parseInt(display.value) / 100;

        break;
      default:
        break;
    }
  });
});
