const forEach = (tab, fn) => {
  for (const elem of tab) {
    console.log(fn(elem))
  }
}

const tab = [1, 2, 5]
forEach(tab,(elem) => {
  return elem += 100
})
