function calcular(parametro) {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado
    console.log(n1)
    console.log(n2)
    console.log(parametro)

    if(parametro == "somar") {
        resultado = n1 + n2
    } else if(parametro == "subtrair") {
        resultado = n1 - n2
    } else if(parametro == "dividir") {
        resultado = n1 / n2
    } else if(parametro == "multiplicar") {
        resultado = n1 * n2
    }

    console.log(resultado)

    document.getElementById('resultado').value = resultado
}