# Mapa do Brasil para emissão de NFC-e
Este projeto tem o intuito na criação de um mapa do Brasil feito com CSS, JS e SVG. Também orientar nas obrigatoriedades estaduas sobre o uso da NFC-e nos estados brasileiros.

## Demo
Caso necessário, [clique aqui e acesso o DEMO do projeto](https://codepen.io/rahelwilliam/pen/PBNGpL).

## O que é preciso para implementar?
Para implementar o código é necessário apenas os seguintes passos:

* Criar a página com mapa do Brasil (visto aqui neste repositório) 
* Chamar a biblioteca JQuery na(s) página(s): `<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.js"></script>`
* Criar o arquivo JS com o código para atribuir hover e adicionar class nos elementos
* Criar o arquivo CSS com definições do hover e demais classes dos elementos

## Qual comando será usado do JS?
Os comandos usados para executar essa função serão o `.length`, `.text`, `.attr` `.hover` e `.toLowerCase`.

## Função JS de Exemplo
Caso você já seja experiente e queira simplesmente utilizar a função sem seguir o passo a passo, poderá utilizar o script:

```
function highlight_map_states() {
  // iniciando o teste, caso a div com classe "states_section" exista, deverá executar
  if ($(".states_section").length > 0) { 
    
    // iniciando o envento sempre que os links de cada estado estiverem em "hover"
    $(".states_section .list_states .item .link").hover(function () { 
      
      // pegamos o nome do estado, tratando o texto do link e montamos o id da div
      var a = "#state_" + $(this).text().toLowerCase(); 
      // adicionamos à esta div que pegamos anteriormente a classe .state e .hover
      $(a).addClass("state hover") 
    
    // Em seguida, indicamos a função exercida sempre que o evento "hover" não existir (ou seja, é ativada quando o mouse não está mais sobre o link do estado)
    }, function () {
      
      // pegamos o nome do etadado novamente para montar o id da div
      var a = "#state_" + $(this).text().toLowerCase();
      // removemos a classe Hover
      $(a).removeClass("hover"); 

    })
  }
};
```

## O que eu posso criar com esse projeto
Conforme citado acima, este é um projeto de criação do mapa do Brasil, neste exemplo, utilizei a emissão de NFC-e por UF, demonstrado os dados disponibilizado por UF para emissão de Notas com modelo 65. Porém, dependendo da sua necessidade, é possível adicionar diversas informações diferentes ou complementares.

## Atualização
A ideia deste projeto, além de demonstrar a utilização do código e a criação do Mapa do Brasil, também deverá auxiliar na orientação sobre a emissão de NFC-e, por isso, estarei atualizando o projeto sempre que possível. 

###### Última atualização em 16 de Julho de 2018

## Fonte 
O Mapa original foi tirado de: [Mapa Modelo do Brasil](https://codepen.io/fabiogoodoy/pen/wgipx).

*** 

###### author "Rahel William" // license "ISC"
