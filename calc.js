const add = (a, b) => {
  return a + b
}

const sub = (a, b) => {
  return a - b
}

const mul = (a, b) => {
  return a * b
}

const div = (a, b) => {
  return a / b
}

const calc = (operande, nb1, nb2) => {
  switch (operande){
    case '+':
      return console.log(add(nb1,nb2))
    case '-':
      return console.log(sub(nb1,nb2))
    case '*':
      return console.log(mul(nb1,nb2))
    case '/':
      return console.log(div(nb1,nb2))
    default:
      return console.log('Veuillez choisir un opérande entre [+, -, *, /] ')
  }
}

console.log(calc('p',2,5))