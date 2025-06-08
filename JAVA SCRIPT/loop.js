let a=2;
for(i=0 ; i<=20;i++){
    console.log(a , "*" ,i,"=",a*i)
}

while(a<=20){
    console.log(a)
    a++;
} 

//for in loop
let obj ={
    name:"Devendra",
    Age :"24",
    company: "codewith_harry AI"
}

for (const key in obj) {
        const element = obj[key];
        console.log(element)
}

//do wile loop

let k =0;
do{
    console.log(k)
    k++;
}while(k<10)