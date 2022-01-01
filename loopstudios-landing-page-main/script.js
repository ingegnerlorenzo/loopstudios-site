const button = document.getElementById("btn");
const close = document.getElementById("close");
const main = document.getElementById("main");


button.addEventListener("click", () => {
   main.classList.add("active");
});

close.addEventListener("click", () => {
    main.classList.remove("active");
})