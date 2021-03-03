const pyramide = (nb, reverse, str) => {
  if(reverse){
    for(; nb > 0; nb--){
      console.log(str.repeat(nb))
    }
  } else {
    for(let i = 0; i <= nb; i++){
      console.log(str.repeat(i))
    }
  }
}

pyramide(11, false, '*')
pyramide(10, true, '*')