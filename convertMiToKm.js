const convertMiToKm = (mile) => {
  console.log(`${mile} mile${mile > 1 ? 's' : ''} = ${mile *= 1.60934} kilomètres`)
}

convertMiToKm(12.5)