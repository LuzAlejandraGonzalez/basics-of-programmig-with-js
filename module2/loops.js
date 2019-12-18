a = 10;
while (a > 10) {};

//for(cláusula de inicialización; cláusula condicional/prueba; cláusula de actualización)
for (a = 5; a < 10; a++) {
    console.log(a);
}
//for(;;;) se ejecutará para siempre
console.log();
a = 5;
while (true) {
    if (10 <= a) {
        break;
    }

    console.log(a);
    a++;
}