let btn1 = document.querySelector("#home")

btn1.addEventListener("click", ()=>{
    document.querySelector("#home").style.color ="purple"
    window.location.href = "index.html"
})

let btn2 = document.querySelector("#about")

btn2.addEventListener("click", ()=>{
    document.querySelector("#about").style.color ="purple"
    window.location.href = "about.html"
})

let btn3 = document.querySelector("#service")

btn3.addEventListener("click", ()=>{
    document.querySelector("#service").style.color ="purple"
    window.location.href = "wisdom's corner.html"
})

let btn4 = document.querySelector("#contact")

btn4.addEventListener("click", ()=>{
    document.querySelector("#contact").style.color ="purple"
    window.location.href = "contact.html"
})

let btn5 = document.querySelector("#btn")

btn5.addEventListener("click", ()=>{
    document.querySelector("#btn").style.color = "purple"
    window.location.href = "learn more.html"
})


let search = document.querySelector("#lens")
let input = document.querySelector("#search")

input.addEventListener("click", ()=>{
    input.value = ''
})

search.addEventListener("click", ()=>{
    window.location.href = `https://www.google.com/search?q=${input.value}`
})

let img = document.querySelector("#img")
let currState = "hidden"

img.addEventListener("click", ()=>{
    if(currState === "hidden"){
        currState = "block"
        document.querySelector("#lens").style.display = "block"
        document.querySelector("#search").style.display = "block"
    }
    else{
        currState = "hidden"
        document.querySelector("#lens").style.display = "none"
        document.querySelector("#search").style.display = "none"
    }
})