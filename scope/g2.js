// nested scopes
//closure


function one()
{
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
        
    }//inner function access outside function  values

  //  console.log(website);
    
    two()
}//but outside function can't access inner function values

//one()

if(true)
{
    const username="priyanka"
    if(username=="priyanka")
    {
        const website=" goggle"

     //   console.log(username+website);
        
    }
   // console.log(website); can't access outside the scope
   // console.log(username);
    
}

//console.log(username); can't access outside the scope


// ***********INTERESTING CONCEPT***********

console.log(addone(5));
function addone(num)  //normsal function
{
    return num+1
}




console.log(addtwo(6));   //can't call earlier  in function expression
const addtwo= function(num)  //function expression
{
    return num+2

}


// hositing  is concept where function decalration,how the function excute, how javascript treat the variable, create final tree etc
   


