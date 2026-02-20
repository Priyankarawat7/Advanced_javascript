//memory managment

// function sayname(){
//     console.log("my name is priyanka");  
// }
// sayname();


// add two numbers

// function sumtwo(a,b)//parameters
// // {
//    console.log(a+b); 
// }
// const result =sumtwo(10,20)//arguments             


function sumtwo(a,b)
{
    //1st method:
// let result=a+b;
//  return result

 //2nd method:
//return a+b;

 //console.log("priyanka"); //it can never print
}
const result=sumtwo(10,20)
//console.log(result);


function loginusermessage(username="no name")
{
    if(username===undefined)
    {
         return `login first`    
    }
    else{
        return `${username} login`    
    }
    // console.log("hii user");
   // ("hii user")
}
//console.log(loginusermessage()); //undefined login
//console.log(loginusermessage("priya"));



//rest operator wrap the elements in array
function calculateCardPrice(val1,val2,...num1){

    return num1
}

//console.log(calculateCardPrice(200,300,500,3000));


//Objects
const user={
    username: "priyanka",
    price:300
}

function handleobject(anyobject){

  // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleobject(user);
// handleobject({
//     username:"priyanka",
//     price:400
// })


// arrays

const price=[100,200,300,400]
function handlearray(...anyarray)
{
    return anyarray                 
    // console.log(`price is ${anyarray.price}`);
    
}

console.log(handlearray(price));
 