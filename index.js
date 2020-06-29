
function takeANumber (katzDeliLine,newPerson){
  katzDeliLine.push(`${newPerson}`)
  for(let i=0;i<katzDeliLine.length;i++){
    return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
  }
}
function nowServing (katzDeliLine){
    for(let i=0;i<katzDeliLine.length;i++){
      katzDeliLine = katzDeliLine.shift();
      return `Currently serving ${katzDeliLine}.`
    }
    return "There is nobody waiting to be served!"
}

function currentLine(a){
  var fullList = []
  let i = 0
  if (a.length===0){
    return "The line is currently empty."
  }else{
  while(i<a.length){
    var linePlace = i+1
    fullList.push(` ${linePlace}. ${a[i]}`)
    i++
    }
  }    
<<<<<<< HEAD
  return `The line is currently:${fullList}`
=======
  return `The line is currently:${fullList} `
>>>>>>> 5f019c54e95326f267d225c0d913e0aef0173d6a
}