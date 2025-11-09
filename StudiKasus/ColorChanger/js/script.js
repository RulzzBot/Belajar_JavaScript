const btnColor = document.getElementById("color");

btnColor.addEventListener("click", ()=> {
    console.log("Test");
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})