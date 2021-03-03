const filter = (tab, fn) => {
  const tmpArray = tab 
  const newArray = []

  for (const elem of tmpArray) {
    if(fn(elem) !== undefined){
      newArray.push(fn(elem))
    }
  }
  return newArray
}

const tab = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(filter(tab, (elem) => {
    if(elem % 2 !== 0){
      return elem
    } else {}
   }))
