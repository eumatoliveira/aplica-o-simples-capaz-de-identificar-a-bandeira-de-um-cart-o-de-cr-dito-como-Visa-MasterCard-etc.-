// your code goes here
function identificarBandeira(numeroCartao) {
  const bandeiras = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
    Amex: /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  };
  
  for (const bandeira in bandeiras) {
    if (bandeiras[bandeira].test(numeroCartao)) {
      return bandeira;
    }
  }
  
  return "Bandeira desconhecida";
}