
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

function hasil(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

function hapus(){
	document.form.textarea.value = "";
}