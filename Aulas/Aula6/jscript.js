// alert("Funcionou!!");

const title = document.querySelector(".titulo-principal");

console.log(document)
console.log(title)

title.textContent = "Título alterado via JavaScript";
title.style.backgroundColor = "yellow";
// title.classList.add("verde");

function criarElementos() {
    let novoElemento = document.getElementById("container");

    novoElemento = document.createElement("div");
    novoElemento.id = "container";
    document.body.appendChild(novoElemento);

    const h3 = document.createElement("h3");
    h3.textContent = "Novo elemento criado";
    novoElemento.appendChild(h3);
}