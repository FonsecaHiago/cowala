function fibonacci(valor){
    
    var anterior = 0;
    var atual = 1;
    var proximo = 1;

    for (let i = 0; i < valor; i++) {
        console.log(proximo)
        anterior = atual + proximo;
        atual = proximo 
        proximo = anterior
    } 
}
console.log(fibonacci(10))