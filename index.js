function dwarfRollCall(dwarves) {
  return `1. ${dwarves[0]} 2. ${dwarves[1]} 3. ${dwarves[2]} `;
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
  else 
  return("no cheese!");
}
