# Identificador de Bandeira de Cartão de Crédito

Este projeto simples tem como objetivo identificar a bandeira (Visa, MasterCard, Amex, Discover) de um cartão de crédito a partir do número fornecido. A aplicação utiliza expressões regulares para validar o padrão do número e retornar a bandeira correspondente.

---

## Funcionalidades

- Identificação das principais bandeiras de cartão de crédito: Visa, MasterCard, American Express e Discover.
- Retorna "Bandeira desconhecida" para números que não correspondem aos padrões conhecidos.

---

## Como usar

Basta chamar a função `identificarBandeira(numeroCartao)` passando uma string com o número do cartão, sem espaços ou caracteres especiais.

```js
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
