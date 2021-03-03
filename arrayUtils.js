const biggest = (tab) => {
  let big = 0
  for(let i = 0; i < tab.length; i++){
    tab[i] > big ? big = tab[i] : ''
  }
  return big
}

const sortAscend = (tab) => {
  let tmp
  
  for(let i = 0; i < tab.length; i++) {
    if(tab[i] > tab[i + 1]){
      tmp = tab[i]
      tab[i] = tab[i + 1]
      tab[i + 1] = tmp
      i = -1
    } else {}
  }
  return tab
}

const makeUnique = (tab) => {
  let unique = []

  for(let i = 0; i < tab.length; i++) {
    for(let j = 0; j < unique.length; j++){
      if(tab[i] === unique[j]){
        i++
        j = -1
      } else {}
      if(i === tab.length){
        return unique
      }
    }
    unique.push(tab[i])
  }
  return unique
}

console.log(biggest([99, 100, 101, 1, 200, 365]))
console.log(sortAscend([99, 100, 101, 1]))
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))