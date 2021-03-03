const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  if(reverseStr(str) === str){
    return true
  } else {
    return false
  }

}

console.log(reverseStr('coucou!'))

console.log(isPalindrome('radar'))