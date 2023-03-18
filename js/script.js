const body = document.querySelector("body"),
    switcher = document.querySelector(".es-button_switch");
    pashalka = document.querySelector("#pashalka")

switcher.addEventListener("click", () =>{
    switcher.classList.toggle("active");
    pashalka.classList.toggle("active");
})
