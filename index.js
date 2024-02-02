

//let doneEl=document.getElementById("done-el")
let saveEl=document.getElementById("save-el")
let countEL=document.getElementById("count-el")
let count=0

// console.log(saveEl)

function increment(){
    count=count+1     //count += 1 
    countEL.innerText = count
}

function save(){
    let countStr= count + " - "   // for spacing textContent [(mdn)-google]
    saveEl.textContent = saveEl.textContent + countStr //saveEl.innerText + =  countStr
    countEL.innerText = 0
    count = 0
    
    // console.log(count)
}
 function done(){
    countEL.innerText = 0
    saveEl.textContent =  "Previous Entries: "
 }