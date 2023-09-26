// fungsi create button
function createButton(className, value, target) {
    let btnElement = document.createElement('button')
    btnElement.innerHTML = value
    btnElement.value = value
    btnElement.setAttribute('class', className)
    document.querySelector(target).appendChild(btnElement)
}

// create button angka
for (let i = 0; i <= 9; i++) {
    createButton('number', i, '#input')
}

// create button operator
createButton('operator', '+', '#operator')
createButton('operator', '-', '#operator')
createButton('operator', '*', '#operator')
createButton('operator', '/', '#operator')

// create button clear
createButton('clear', 'clear', '#operator')

// create button operator
createButton('hitung', '=', '#operator')
