//Las variables deben declararse formalmente antes de su utilización.

//hoisting
a = 42;
var a;

//Declaración formal
var a = 42;

//Let & const son declaraciones de alcance en bloque
let b = 42;
const c = 42;

//Declaración de funciones
function d() {

}

if (a > 10) {
    a = 10;
}