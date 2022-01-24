function validade(dataInicial, validadeEmDias) {
    var expirado = false;
  
    const dataPreValidacao = new Date(dataInicial);
    const hoje = new Date();
  
    var diferenca = Math.abs(dataPreValidacao.getTime() - hoje.getTime());
    var quantidadeDeDias = Math.ceil(diferenca / (1000 * 3600 * 24));
  
    if (quantidadeDeDias == validadeEmDias) {
      expirado = false;
      return expirado;
    }
  
    if (quantidadeDeDias > validadeEmDias) {
      expirado = true;
      return expirado;
    } else if (quantidadeDeDias < validadeEmDias) {
      expirado = false;
      return expirado;
    }
  }
  
  const checkValidate = validade("2021-11-17T20:40:09.503Z", 10);
  console.log(checkValidate);