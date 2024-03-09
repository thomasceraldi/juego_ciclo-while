alert ("¡Perfecto, ahora tendras tantos intentos como usted quiera, pero esta vez, el numero a encontrar cambia con el intento");
let condicionFinal = true;
let contador = 0;

while (condicionFinal !== "no") {
    let numeroAleatorioFinal = Math.random()*9;
    let numeroEncontrarFinal = Math.floor(numeroAleatorioFinal + 1);
    console.log ("El numero a encontrar es: " + numeroEncontrarFinal);
    contador++;
    condicionFinal = prompt(`¿Desea continuar? En caso negativo indique "No"`).toLowerCase();
    if (condicionFinal !== "no") {
         let numeroIngresadoFinal = parseInt(prompt("Ingrese un numero entre el 1 y 9 incluidos"));
         if (numeroIngresadoFinal !== numeroEncontrarFinal) {
              continue;
         } else if (numeroIngresadoFinal === numeroEncontrarFinal) {
              alert ("Felicitaciones, costo un poco pero, has ganado El Juego De La Coincidencia");
              document.write(`<p>Tu numero de la suerte es: ${numeroEncontrar}</p>`);
              document.write(`<p>Lo lograste en: ${contador} intentos</p>`);
              console.log("Estado del juego: ganado");
              console.log("Realizado en: " + contador + " intentos")
              break;
         }
    } else if (condicionFinal === "no") {
         alert ("Lo siento, no has encontrado el numero, has perdido El Juego De La Coincidencia");
         document.write(`<p>El numero a encontrar era: ${numeroEncontrar}</p>`);
         console.log("Estado del juego: perdido");
         break;
    }
}