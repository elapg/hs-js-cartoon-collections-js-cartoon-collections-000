
function dwarfRollCall(dwarves) {
var numberedDwarves = "";
 for (var i= 0; i < dwarves.length; i++){ 
   numberedDwarves += `${i+1}. ${dwarves[i]} `;
 }
 return numberedDwarves;
 }
 
 var planeteerCalls= ["earth", "wind", "fire","water", "heart"]
 
 function summonCaptainPlanet(planeteerCalls) {
   var numberedplanteerCalls = "";
for (var i = 0; i < planeteerCalls.length; i++){
  var toBeChanged = planeteerCalls[i];
  toBeChanged = toBeChanged.toUpperCase();
  toBeChanged +="!"
  planeteerCalls[i] = toBeChanged
}
return planeteerCalls;
}

console.log(summonCaptainPlanet(planeteerCalls));


function longPlaneteerCalls(short_words){

var longerThanFour = false;
for (var i = 0; i < short_words.length; i++){
  if (short_words[i].length > 4) {
    longerThanFour = true;
  }    
}
return longerThanFour;
}

function findTheCheese(snacks) {
 var resultOfCheeseSearch = "no cheese!";
  var possibleCheeses = ["cheddar", "gouda", "camembert"];
  for (var i= 0; i < snacks.length; i++) {
  
    if  (possibleCheeses.includes(snacks[i])) {
    resultOfCheeseSearch = snacks[i];
}
}
 return resultOfCheeseSearch;
}

    