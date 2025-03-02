
let lista = [1,2,3,4];

for(let i = lista.length - 1; i >= 0; i--){
    console.log(`Lista[${i}] ${lista[i]}`);
}

let numBuscar = prompt("Inserte el número a buscar: ")
numBuscar = Number(numBuscar)

for(let i = 0; i < lista.length; i++){
    if(lista[i] === numBuscar){
        console.log(`El valor esta en la posición [${i+1}]`);
    }
}

function cuadradoDeLista(lista){
    let size = lista.length;
    let nuevaLista = [];
    for(let i = 0; i < size; i++){
        nuevaLista[i] = lista[i] ** 2;
    }
    return nuevaLista;
}

let nuevaLista = cuadradoDeLista(lista);

console.log("Nueva lista con cuadrados");
console.log(nuevaLista)
