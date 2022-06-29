let nombrePlanetas = Array('Tierra', 'Marte', 'Jupiter');
let distancia =[6,3,'67'];
const tamaño = [];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

for(const planeta of nombrePlanetas){
    console.log(planeta);
}

for(const key in distancia){
    if(distancia[key] === '5'){
        console.log("Se encontro la distancia");
    }else{
        console.log("No se encontro la distancia");
    }
}