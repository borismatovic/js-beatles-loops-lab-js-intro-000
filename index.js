// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i=0;i< musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return arr
}

function johnLennonFacts(facts){
  var counter = facts.length-1;
  while(counter >= 0){
    facts[counter] = `${facts[counter]}!!!`
  }
  return facts
}
