
function takeANumber (katzDeliLine,newPerson){
  katzDeliLine.push(newPerson)
    return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}
function nowServing (katzDeliLine){
    for(let i=0;i<katzDeliLine.length;i++){
      katzDeliLine = katzDeliLine.shift();
      return `Currently serving ${katzDeliLine[i]}.`
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
}

var custCount = 0
function ticketWheel(){
  custCount = custCount +1
  console.log( `Welcome your ticket number is ${custCount}`)
}

ticketWheel()
ticketWheel()
ticketWheel()
