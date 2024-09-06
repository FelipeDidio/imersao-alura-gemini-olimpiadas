const pesquisar = document.querySelector("button");
// Seleciona o primeiro elemento que corresponde a um botão no documento HTML
// e armazena essa referência na constante 'pesquisar'.

const section = document.getElementById("resultados-pesquisa");
// Seleciona o elemento com o ID "resultados-pesquisa" e armazena
// essa referência na constante 'section'. Esse elemento provavelmente
// é onde os resultados da pesquisa serão exibidos.

pesquisar.addEventListener("click", () => {
  // Adiciona um ouvinte de eventos ao botão 'pesquisar'.
  // Quando o botão for clicado, a função dentro de addEventListener será executada.

  let campoPesquisa = document.getElementById("campoPesquisa").value;
  // Seleciona o elemento com o ID "campoPesquisa"
  // e armaze essa referencia na const 'campoPesquisa'

  // se o imput "campo de pesquisa" estiver vazio inclui msg do section.innerHTML
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou de um esporte</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  console.log(campoPesquisa);
  // Imprime uma mensagem no console para indicar que o botão foi clicado.
  // Isso é útil para depuração.

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Declara uma variável 'resultados' para armazenar a string que será
  // utilizada para construir o HTML dos resultados da pesquisa.
  // Inicialmente, a string está vazia.

  for (let dado of dados) {

    // transformando o input do usuário todo em minusculo, 
    // antes da verificação pra evitar o erro de digitação
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    
    // Inicia um loop 'for...of' para iterar sobre cada elemento 'dado'
    // dentro do array 'dados'. O array 'dados' provavelmente contém
    // os dados da pesquisa, como título, descrição e link.
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
    <div class="item-resultado">
    <h2>
        <a href="#" target="_blank"> ${dado.titulo}</a>
    </h2>
    <p class="descricao-meta"> ${dado.descricao}</p>
    <a href= ${dado.link} target="_blank">Mais informações</a>
    </div>
    `;
      // Concatena uma nova string à variável 'resultados' para cada elemento 'dado'.
      // Essa string representa o HTML de um item de resultado da pesquisa,
      // incluindo o título, descrição e link. As propriedades 'titulo', 'descricao' e 'link'
      // são acessadas a partir do objeto 'dado'.
    }
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>"
  }
  section.innerHTML = resultados;
  // Atribui o conteúdo da variável 'resultados' (que agora contém todo o HTML
  // dos itens de pesquisa) ao atributo 'innerHTML' do elemento 'section'.
  // Isso substitui o conteúdo existente dentro da seção pelos resultados da pesquisa.
});
