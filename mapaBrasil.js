/* 
Mapa original: https://codepen.io/fabiogoodoy/pen/wgipx 
Modificado por: Rahel William
*/

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
