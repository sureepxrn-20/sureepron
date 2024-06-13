alert("welcome to sweden")
function del() {
    let number1 = document.getElementById("number1");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) *3.50 ;
    result.innerHTML = sum;
}