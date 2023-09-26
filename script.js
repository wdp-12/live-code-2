var result = document.getElementById('hasil');

function handleClick(number) {

    var hasil = number.innerHTML;

    if (hasil == '=') {
        result.innerHTML = eval(result.innerHTML);

    } else if (hasil == 'AC') {
        result.innerHTML = '0';

    }   else if (hasil == 'DEL') {
        result.innerHTML = slice(0, -1);
    } else {
        if (result.innerHTML == '0') {
            result.innerHTML = hasil;

        } else {
            result.innerHTML += hasil;
        }
    }
}