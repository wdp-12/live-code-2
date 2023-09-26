//clear
document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#display").value = " ";
});

//delete
const deleteNum = () => {
  const num = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = num;
};

//1
const one = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "1";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "1";
  }
};

//2
const two = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "2";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "2";
  }
};

//3
const three = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "3";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "3";
  }
};

//4
const four = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "4";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "4";
  }
};

//5
const five = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "5";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "5";
  }
};

//6
const six = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "6";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "6";
  }
};

//7
const seven = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "7";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "7";
  }
};

//8
const eight = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "8";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "8";
  }
};

//9
const nine = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "9";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "9";
  }
};

//0
const zero = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = "0";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + "0";
  }
};

//,
const comma = () => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = ".";
  } else {
    document.querySelector("#display").value = document.querySelector("#display").value + ".";
  }
};
