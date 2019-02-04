function dwarfRollCall(dwarves) {
  var dwarfList = [];
  for (var i = 0; i < dwarves.length; i++) {
    dwarfList += `${i+1}. ${dwarves[i]}`;
  }
  return dwarfList; 
}

function summonCaptainPlanet(fruits){
  for(var i=0;i<fruits.length;i++){
    fruits[i]= fruits[i].toUpperCase() + "!";
  }
  return fruits;
}

function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length > 4)
    return true;
    else 
    return false;
  }
}

function findTheCheese (foods) {
  if (foods.includes("cheddar"))
  return "cheddar";
  else if(foods.includes("gouda"))
  return"gouda";
  else if(foods.includes("camembert"))
  return "camembert";
  else if (food.includes("swiss cheese"))
  return "swiss cheese";
  else 
  return("no cheese!");
}

var words = ["Brian", "Joe", "Jane"];
"banana", "berry", "cheese"

function wordsThatStartWithB(words) {
var bWords = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].StartsWith("B"))
    bWords.push(words[i]);
  }
return bWords; 
  
}

