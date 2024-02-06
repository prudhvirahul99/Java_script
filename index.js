let num1 = 5
let num2 = 2
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2

let sumEL=document.getElementById("total")

function add(){
    console.log("addition")
    let result =  num1 + num2
    sumEL.textContent = "TOTAL: " + result
}

function sub(){
    console.log("subtraction")
    let result =  num1 - num2
    sumEL.textContent = "TOTAL: " + result
}

function multi(){
    console.log("multiplication")
    let result =  num1 * num2
    sumEL.textContent = "TOTAL: " + result
}

function div(){
    console.log("division")
    let result =  num1 / num2
    sumEL.textContent = "TOTAL: " + result
}
