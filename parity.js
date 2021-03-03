const isOdd = (nb) => {
  if(nb % 2 === 0){
    return false
  } else {
    return true
  }
}

const isEven = (nb) => {
  if(!isOdd(nb)){
    return true
  } else {
    return false
  }
}

console.log(isOdd(3))
console.log(isOdd(4))
console.log('')
console.log(isEven(3))
console.log(isEven(4))