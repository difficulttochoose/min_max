console.log('App was loaded...');
let mas=[];
for(let i=0;i<10;i++){
    mas.push(Math.round(Math.random()*10));
}
console.log(mas);
let min=mas[0], max=mas[0];
for(let i=0;i<10;i++){
    if(mas[i]<min){
        min=mas[i];
    }else if(mas[i]>max){
        max=mas[i];
    }
}
console.log("min: ", min);
console.log("max: ", max);