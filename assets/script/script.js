const btnColecao = document.getElementById("btnColecao");

btnColecao.addEventListener("click", () => {

    alert("Seja bem-vinda à Aura 67 Books! Confira nossa coleção logo abaixo.");

    document.querySelector(".produtos").scrollIntoView({
        behavior: "smooth"
    });

});

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");

    formulario.reset();

});