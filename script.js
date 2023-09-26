//clear
document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#display").value = " ";
});

//delete
const deleteNum = () => {
  const num = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = num;
};

//
