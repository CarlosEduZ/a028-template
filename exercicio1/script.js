//cria um novo elemento
const novoElemento1 = document.createElement("li")
const novoElemento2 = document.createElement("li")

//cria um conteudo

const conteudo1 = document.createTextNode("item 0")
const conteudo2 = document.createTextNode("item 5")

//aloca o conteúdo no elemento criado
novoElemento1.appendChild(conteudo1)
novoElemento2.appendChild(conteudo2)

//adicionar no elemento pai o novo elemento criado, mas antes de seus filhos

const elementoPai = document.getElementById("lista")
console.log(elementoPai);

elementoPai.insertAdjacentElement("afterbegin", novoElemento1)
//adicionar no elemento pai o novo elemento criado, mas depois de seus filhos
elementoPai.insertAdjacentElement("beforeend",novoElemento2)