const show = document.getElementById("show")
const hide = document.getElementById("hide")
const input = document.getElementById("password")

show.addEventListener("click", ()=>{
    console.log("Haloo")
    show.classList.add("hidden");
    hide.classList.remove("hidden")
    input.setAttribute("type", "text")
})

hide.addEventListener("click", ()=>{
    console.log("Haloo")
    show.classList.remove("hidden");
    hide.classList.add("hidden")
    input.setAttribute("type", "password")
})


