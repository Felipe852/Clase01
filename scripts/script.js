let nombrePlanetas = Array('Tierra', 'Marte', 'Jupiter');
let distancia =[6,3,'67'];
const tamaño = [10,20,30];

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
nombrePlanetas.forEach((value,index,array) =>{
    console.log('planeta',index,value);
});

nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de : ${tamaño[index]}`)
    )
});
let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
});

console.log(resultadoMap);