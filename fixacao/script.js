function insereItem(event) {
    event.preventDefault()
    
    const novoItem = document.createElement("li")
    const novoConteudo = document.createTextNode(document.getElementById("meu-input").value)
    
    novoItem.appendChild(novoConteudo)

    const elementoPai = document.getElementById("lista")
    elementoPai.insertAdjacentElement("beforeend", novoItem)

    document.getElementById("meu-input").value = ""
}