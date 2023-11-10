var a = document.querySelector("#btn");
var b = document.querySelector("#box");
// var c = document.querySelector("#btnn");

var flag = 0;

a.addEventListener("click", function(){
if(flag == 0){
    b.style.backgroundColor = "yellow";
    a.innerHTML = "OFF"
    console.log("Clicked")
    flag = 1
}
else{
    b.style.backgroundColor = "white";
    a.innerHTML = "ON"
    console.log("Again Clicked")
    flag = 0
}
})


// Following code was for OFF button
// c.addEventListener("click", function(){
//     b.style.backgroundColor = "white";
// })