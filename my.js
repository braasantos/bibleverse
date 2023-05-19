let arrBiblieQuoteOfTheDay = ["Pois a palavra de Deus é viva e eficaz, e mais afiada que qualquer espada de dois gumes; ela penetra até o ponto de dividir alma e espírito, juntas e medulas, e julga os pensamentos e as intenções do coração",
"Como o cão que volta ao seu próprio vômito, assim é o insensato que repete a sua tolice.",
"A alma do preguiçoso deseja, e coisa nenhuma alcança, mas a alma dos diligentes prospera.",
"Todas as coisas não me são lícitas, porque todas as coisas não convêm. Todas as coisas não são lícitas, porque todas as coisas não edificam.",
"Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus."
]
let textEl = document.getElementById("textEl")

function getVerse() { 
  const randomIndex = Math.floor(Math.random() * arrBiblieQuoteOfTheDay.length);
  const randomQuote = arrBiblieQuoteOfTheDay[randomIndex];
  textEl.textContent = randomQuote;
}



/*function getVerse() { 
  for (let i = 0; i <arrBiblieQuoteOfTheDay.length; i++){
    textEl.textContent = Math.floor(Math.random() * arrBiblieQuoteOfTheDay.length);
  }   
}*/


 /*const randomIndex = Math.floor(Math.random() * arrBiblieQuoteOfTheDay.length);
return arrBiblieQuoteOfTheDay[randomIndex];
*/
