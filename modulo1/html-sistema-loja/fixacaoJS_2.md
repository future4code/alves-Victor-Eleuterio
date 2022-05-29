```function calculaPrecoTotal(quantidade) {
  let maca = undefined
  if(quantidade >= 12){
    maca = 1.0
  }else{
    maca = 1.3
  }
  return quantidade * maca
}```