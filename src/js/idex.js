//Passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele
const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const botaoMostrarmenosProjetos = document.querySelector(
  ".btn-mostrar-projetos .remover"
);
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");
//Passo 2 -
botaoMostrarProjetos.addEventListener("click", () => {
  //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
  mostrarMaisProjetos();

  //  objetivo 2- esconder o botao mostrar mais
  //  Passo 1 - pegar o botao e esconder
  esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetosInativo) => {
        projetosInativo.classList.add("ativo");
    });
}

