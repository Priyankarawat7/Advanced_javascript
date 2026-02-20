// *********SCOPE **********
// let a=10
// const b=20
// var c=30

{
    // scope
}


var c=300 //global scope values avilabel in block scope.
if(true)
{
    let a=10
    const b=20
    var c=30 // avoid 
    console.log("inner",a);
     

}//block scope always consider block scope values doesn't go outside the scope 

//console.log(a);//undefined
//console.log(b);//undefined
console.log(c); //30


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



