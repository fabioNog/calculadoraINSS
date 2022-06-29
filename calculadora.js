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

function calcularSalario() {
    let verificaNAN = document.getElementById('salario').value;
    
    let salarioLiquido = parseInt(document.getElementById('salario').value);
    
    if(verificaNAN === ""){
        alert("Digite um valor valido para o salario bruto");
    }
    else{
        let salariobruto
        let INSS = 5/100;
        let IRPF = 7/100;
        console.log(salarioLiquido)

        
        salariobruto = salarioLiquido - (salarioLiquido*INSS) - (salarioLiquido*IRPF);
        

        console.log(salariobruto)

        //document.getElementById("resultadoSalario").setAttribute('value',salariobruto);
        document.getElementById('resultadoSalario').value = salariobruto;
    }

    

}