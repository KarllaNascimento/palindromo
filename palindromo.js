
confirm("Vamos descobrir se a palavra é um palíndromo?")
palindromo = prompt("Escreva uma palavra:")

function verificar() {
   if(palindromo == "" || palindromo.length == "1"){
      alert(`É palíndromo!`)
      return;
   } 
   for (let i = 0, j = palindromo.length - 1; i < j; i++, j--) {
   if (palindromo.charAt(i) != palindromo.charAt(j)) {
      alert(`${palindromo} Não é palíndromo!`)
      return;
   } else{
      alert(`Acertou! ${palindromo}, é palíndromo!`)
   }
      
   }
}

verificar()

// palindromo("aba") 
// palindromo("radar")
// palindromo("xyzzyx")
// palindromo("bola")
// palindromo("abcddcb")
// palindromo("")
// palindromo("x")