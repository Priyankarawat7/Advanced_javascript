//Immediately invoked function expression

(function chai()
{
    console.log('DB Connected');
    
})();// we have to put semicolon othersie it will give error 



//()// function defination
  //   ()//function exceution

// for immedilately invoked the function and 
// also global scope ke pollution se prolblem hoti h 
// sometime usko htanee ke liye we use iife 



//error function

((name)=>{
    console.log(`connected ${name}`);
    
})('priya')

      