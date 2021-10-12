// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let n = prompt("numero")

function digital_root(n) {
  
  arrayN = n.toString()
  
  let length = arrayN.length
  
  let sum
  
  if (length <= 1) {
    console.log("solo 1 dígito, la funcion devuelve = "+n)
    return n
  
  } else {
    
    while (length > 1) {
      
      sum = 0

      arrayN = Array.from(arrayN)
      console.log("array a sumar: "+ arrayN)
      for(i=0; i < length; i++){ 
        console.log("suma de digito: +" + arrayN[i])
        sum = sum + parseInt(arrayN[i])
      }

      console.log ("subtotal= "+sum)

      arrayN = sum.toString()
          
      length = arrayN.length
      console.log ("reiteracion de ciclo por tener " +length+ " dígito/s")
    }
    console.log("resultado final = " + arrayN)
    return parseInt(arrayN)
  }

}
let resultado = digital_root(n)
console.log( "return: "+resultado)