let titulo = document.getElementById("titulo");
console.log(titulo);

let isLightMode = true;

document.getElementById("modo").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("modo").textContent = "Alternar para Modo Claro";
        document.querySelectorAll('h1, p').forEach(element => {
            element.style.color = "white";
        });
    } else {
        document.getElementById("modo").textContent = "Alternar para Modo Escuro";
        document.querySelectorAll('h1, p').forEach(element => {
            element.style.color = "black";
        });
    }

    // You can still use the isLightMode variable if needed
    isLightMode = !isLightMode;
});