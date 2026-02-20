

 const userEmail=[]
// const userEmail="priya@gmail.com"
// const userEmail=""

if(userEmail)
{
    console.log("got user email");
    
}
else{
    console.log("don't have user email");
    
}


//********Falsy values*********
//fal
// se,0,-0,BigInt,0n,"",null,undefined,NaN



//****Truthy values**********
//true,'0','false',' ',[],{},function(){}

//false==0
//false==''
//0==''

// if(userEmail.length===0)
// {
//     console.log("array is empty");
    
// }

// const emptyobject={}
// if(Object.keys(emptyobject).length==0)
// {
//  console.log("object is empty");
 
// }


//nullish Coalescing Operatorr(??): null undefined

let val1;
// val1=5 ?? 10  //5
// val1=null?? 10 //10
// val1=undefined ?? 15  //15

val1=null ?? 10 ?? 15 //10


//console.log(val1);


//terniory operator

//Condition ? true: false

const iceteaprice=100
iceteaprice <=80 ? console.log("less then 80"):console.log("more than 80");






