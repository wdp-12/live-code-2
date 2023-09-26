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
createButton('clear', 'clear', '#input')

// create button hitung
createButton('hitung', '=', '#input')

// display number dg event
let data = ''
let btnElement = document.getElementsByClassName("number")
for (let i = 0; i < btnElement.length; i++) {
    btnElement[i].addEventListener('click', () => {
        document.getElementById("result").innerHTML = data += btnElement[i].value;
    })
}

// display operator dg event
let opElement = document.getElementsByClassName("operator")
for (let i = 0; i < opElement.length; i++) {
    opElement[i].addEventListener('click', () => {
        document.getElementById("result").innerHTML = data += opElement[i].value
    })
}

// fungsi button clear dg event
document.querySelector(".clear").addEventListener('click', () => {
    data = ''
    document.getElementById("result").innerHTML = ''
})

// fungsi hitung number dg event
document.querySelector(".hitung").addEventListener('click', () => {
    // split char operator
    let tambah = data.split('+')
    let kurang = data.split('-')
    let kali = data.split('*')
    let bagi = data.split('/')

    // percabangan berdasarkan operator
    if (data.includes('+')) {
        data = Number(tambah[0])+Number(tambah[1])
        document.getElementById("result").innerHTML = data
    } else if (data.includes('-')) {
        data = Number(kurang[0])-Number(kurang[1])
        document.getElementById("result").innerHTML = data
    } else if (data.includes('*')) {
        data = Number(kali[0])*Number(kali[1])
        document.getElementById("result").innerHTML = data
    } else if (data.includes('/')) {
        data = Number(bagi[0])/Number(bagi[1])
        document.getElementById("result").innerHTML = data
    }
})