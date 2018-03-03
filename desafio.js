(function(){ //Boa pratica => NAO DEIXAR NADA NO ESCOPO GLOBAL (no caso, colocamos as variaveis media1 e media2 dentro de uma função auto executavel)
    function calcularMedia(){
        //var media = 0;
        var total = 0;
        var qtd = arguments.length;
        var x = 0;
        while((typeof arguments[x] === 'number')){
            total += arguments[x];
            x++
        }

        return total / qtd;
    }
    var media1 = calcularMedia(2,3);
    var media2 = calcularMedia(2,3,10,6);
    console.log('media 1= ' ,media1);
    console.log('media 2= ' ,media2);
    
})()
//PROBLEMA! => Quando o loop chega no 0, reconhece como 'false' e então a conta da errado
//SOLUÇÃO => linha 7 => coloca-se (typeof arguments[x] === 'number'), por que o 0 será reconhecido como numero

//-----------DESAFIO DA MEDIA--------------------------------------------------------------------------------------------------

/*function calcularMedia(arr){
  console.log(arguments);
  var result = 0;
  var x = 0;

  while(arguments[x]){
    result += arguments[x];
    x++;
  }
  console.log('Media é ' + result / arguments.length);

}
calcularMedia(35,45,6,3,4,5,6,1);*/

//--------------DESAFIO DO IMC----------------------------------------------------------------------------------

(function(){
    function calcularImc(peso, altura /*callback*/){
        return peso / (altura * altura); //entre parenteses, resolve essa conta primeiro
/*
        Esse bloco acima, outro jeito
        function calcularImc(peso, altura, callback){
            var imc = peso / (altura * altura);

            if(callback && typeof callback === 'function'){ 
                return callback(imc);
            }
            return imc;
        }
*/

    }
    function classificaImc(imc){
        
        if(imc <= 16.9){
            return 'Muito abaixo do peso';
        } else if(imc <= 18.4){
            return 'Abaixo do peso';
        } else if(imc <= 24.9){
            return 'Normal';
        } else if(imc <= 29.9){
            return 'Acima';
        } else if(imc <= 34.9){
            return 'Obesidade I';
        } else if(imc <= 40){
            return 'Obesidade II';
        }else(imc >= 40){
            return 'Obesidade III'
        }
    }
    var peso = 65;
    var altura = 1.75;
    
var imc = calcularImc(peso, altura /*classificaImc,   pode fazer essa tambem*/);  
    var classificacao = classificaImc(imc); 
    // OU -- var classificacao = classificaImc(calcularImc(peso, altura));

    console.log('Classificação IMC = ', classificacao);
})()
//---------------------------------------------------------------------------------------------------------