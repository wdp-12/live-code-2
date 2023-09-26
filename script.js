const output = document.querySelector(".screen");

document
  .querySelector(".wrapper-button")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "INPUT") {
      if (e.target.classList.contains("action-clear")) {
        output.value = "";
      } else if (e.target.classList.contains("action-backspace")) {
        output.value = output.value.toString().slice(0, -1);
      } else if (e.target.classList.contains("action-evaluate")) {
        try {
          output.value = eval(output.value);
        } catch (err) {
          output.value = "Error";
        }
      } else {
        output.value += e.target.value;
      }
    }
  });
