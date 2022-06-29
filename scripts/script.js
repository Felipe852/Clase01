let nombrePlanetas = Array('Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter');
let distancia =[0.39,0.72,1.00,1.52,5.20];
const tamaño = [0.39,0.95,1.00,0.53,11.21];

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