// Captura os parâmetros da URL passados através do método GET e aplica nos elementos HTML.
function urlParams() {
    // Cria uma classe contendo os parâmetros da URL.
    const urlParams = new URLSearchParams(window.location.search);

    // Captura os parâmetros através do método GET.
    const nameParams = urlParams.get("name");
    const descriptionParams = urlParams.get("description");

    // Altera os elementos HTML através do DOM.
    document.getElementById('name').innerHTML = nameParams;
    document.getElementById('description').innerHTML = descriptionParams;
}