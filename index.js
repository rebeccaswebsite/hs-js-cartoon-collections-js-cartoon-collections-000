function dwarfRollCall(dwarves) {
  return `1. ${dwarves[0]} 2. ${dwarves[1]} 3. ${dwarves[2]} `;
}

function summonCaptainPlanet(fruits){
  for(var i=0;i<fruits.length;i++){
    fruits[i]= fruits[i].toUpperCase() + "!";
  }
  return fruits;
}

function longPlaneteerCalls(longCalls){
  for(var i=0;i<longCalls.length;i++){
    if (longCalls[i].length > 4)
    return true;
    else 
    return false;
  }
}

function findTheCheese (cheddarCheese) {
  if (cheddarCheese.includes("cheddar", 0))
  return "cheddar";
  else if(cheddarCheese.includes("gouda", 0))
  return"gouda";
  else if(cheddarCheese.includes("camembert", 0))
  return "camembert";
  else 
  return("no cheese!");
}
