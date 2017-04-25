// Instaciamos variables
var caja = document.getElementById('frase');
var accion = document.getElementById('accion');
var cuadro = document.getElementById('cuadro');

// Creamos nuestra variable
accion.addEventListener('click',rot13);

function rot13() { // Nuestra funcion para cifrar y descifrar el rot13
  str = caja.value;
  console.log("ROT13:\n\n"+str+"\n-----------------------------");
  var indice = 0;
  var cadenaFinal='';
  // El cifrado ROT13
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output= 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  // Recorremos cada letra  del str y sustituimos por la letra correspondiente
  for(var contador = 0;contador< str.length;contador++){
        indice = output.indexOf(str[contador]);
    //console.log(indice);
    if(indice!=-1){ // Si lo encuentra
        var letra = output[indice];
        indice = input.indexOf(letra);
        cadenaFinal += output[indice];

     }
    else{ // si no lo encuentra
        cadenaFinal += str[contador]; // lo agrega tal cual a nuestra cadena
      }
    }
  //Imprimimos en la consola
  console.log(cadenaFinal);
  // Imprimimos en el document
  cuadro.innerHTML= cadenaFinal;
}
