const count = (min, max, step) => {

  for(;min < max; min += step){
    console.log(min)
  }
}

count(5, 100, 10)