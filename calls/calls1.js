// we have callstack




// Execution Context
// -> callme()
// -
// -
// bottom->global Execution context  {}


function Setusername(username)
{
    //complex DB calls
    this.username=username
    console.log('called');
    
}

function createUser(username,email,password){

    Setusername.call(this,username) //setusername ka this use kia hai
   
    this.email=email
    this.password=password

}

const chai=new createUser('chai','chai@gmail.com','123')
console.log(chai);
