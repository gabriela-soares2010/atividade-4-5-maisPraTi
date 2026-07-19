const botaoBuscar = document.getElementById("buscarCep");

botaoBuscar.addEventListener("click", buscarCEP);

async function buscarCEP(){

    const cep = document.getElementById("cep").value.replace(/\D/g,"");

    if(cep.length != 8){

        alert("Digite um CEP válido!");

        return;

    }

    try{

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const dados = await resposta.json();

        if(dados.erro){

            alert("CEP não encontrado.");

            return;

        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("uf").value = dados.uf;

    }

    catch(erro){

        alert("Erro ao consultar o CEP.");

        console.error(erro);

    }

}