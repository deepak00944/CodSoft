var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var img = document.querySelector("#top img")


flag = 1;
one.addEventListener("click", function(){
    if (flag = 1) {
        img.src = "http://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524670109tnfcf.png"
        one.style.border = "2px solid black"
        two.style.border = "none"
        three.style.border = "none"
        four.style.border = "none"
    } 
})

two.addEventListener("click", function(){
    if (flag = 1) {
        img.src = "https://pluspng.com/img-png/headphones-hd-png--1000.png"
        two.style.border = "2px solid black"
        one.style.border = "none"
        // two.style.border = "none"
        three.style.border = "none"
        four.style.border = "none"
    } 
})

three.addEventListener("click", function(){
    if (flag == 1) {
        img.src = "http://www.pngmart.com/files/6/Sony-Headphone-PNG-Photos.png"
        three.style.border = "2px solid black"
        one.style.border = "none"
        two.style.border = "none"
        // three.style.border = "none"
        four.style.border = "none"
    } 
})

four.addEventListener("click", function(){
    if (flag = 1) {
        img.src = "https://www.pngarts.com/files/8/Black-Beats-Headphone-PNG-Image.png"
        four.style.border = "2px solid black"
        one.style.border = "none"
        two.style.border = "none"
        three.style.border = "none"
        // four.style.border = "none"
        flag = 1;
    } 
})

