const show = document.getElementById("show")
const hide = document.getElementById("hide")
const ShowHide = document.querySelector(".test") 
const inputPW = document.getElementById("password")  ;
const inputUser = document.getElementById("Email");
const submit = document.getElementById("btn")
const rmbr = document.getElementById("rmbr");

show.addEventListener("click", ()=>{
    console.log("Haloo")
    show.classList.add("hidden");
    hide.classList.remove("hidden")
    ShowHide.setAttribute("type", "text")
})

hide.addEventListener("click", ()=>{
    console.log("Haloo")
    show.classList.remove("hidden");
    hide.classList.add("hidden")
    ShowHide.setAttribute("type", "password")
})

submit.addEventListener("click", ()=> {

    const userVal = inputUser.value.trim();
    const userPW = inputPW.value.trim();

    if(userVal == "" && userPW == "" ){
        swal.fire({
            title: "Input User & PW",
            text:"Input Tidak Boleh Kosong",
            icon: "info"
        });
    }else{
        console.log("Log Berhasil")
    }

    console.log(`Username : ${userVal}`)
    console.log(`Password : ${userPW}`)

    inputUser.value = ""
    inputPW.value = ""

})



