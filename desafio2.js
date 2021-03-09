alert("Calcular IVA según valor.")

let valor;

function preguntar() {
    valor = parseInt(prompt("Ingrese el valor del producto/servicio."));
    calcular();
}

function calcular(){
    valorIva = (valor*21)/100;
    valorTotal = valor + valorIva;
    mostrar();
}

function mostrar() {
    alert("El valor total con el IVA agregado sería $"+valorTotal);
    console.log("El valor total ingresado es: $"+valor);
    console.log("El IVA de ese valor sería: $"+valorIva);
    console.log("Dando un valor total de: $"+valorTotal);
}

preguntar();