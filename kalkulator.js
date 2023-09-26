let data = "";

function handleClick(value) {
    document.getElementById("result").innerHTML = data += value;
}

function handleClear() {
    data = "";
    document.getElementById("result").innerHTML = "";
}

function handleDelete() {
    data = data.slice(0, -1);
    document.getElementById("result").innerHTML = data;
}

function calculate() {
    try {
        const result = eval(data); 
        document.getElementById("result").innerHTML = result;
        data = result.toString();
    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
        data = "";
    }
}
