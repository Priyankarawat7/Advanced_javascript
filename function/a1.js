// Arrow function




//this keywords {refer us current context}
const user={
    username:"priyanka",
    price:399,

    welcomeMessage: function()
    {
        //console.log(`${this.username}, welcome to website`);
                        //current context

      //  console.log(this); //refernces
                        
    }

}
// user.welcomeMessage()
// user.username="sam" //change the name 
// user.welcomeMessage()

//console.log(this); //{} 




//this.var_name only work on object not in inside the normal function
function chai()
{
    let username="priyanka"
    console.log(this.username); //undefined
    console.log(this); //global object windows function
    
}
//chai()



const chaii= function(){
    let username="priyanka"
    console.log(this.username); //undefined
    console.log(this);//global object windows function
}

//chaii()



const chaiiii=()=>{
    let username="priyanka"
    console.log(this);//{}
    console.log(this.username);//undefined
    
} 

//chaiiii()


//arrow function 
//explicit return
const addtwo=(num1,num2)=>{
    return num1+num2
}
//console.log(addtwo(3,4));

//implicit arrow function
//if we use curly braces we have to return (name) but in curly braces we don't have 
const addthree=(num1,num2,num3)=>num1+num2+num3

const addfour=(num1,num2,num3,num4)=>(num1+num2+num3,num4)
//console.log(addthree(3,4,5,7));



const multwo=()=>{username:"priyanka"}//we can't return object like this
//console.log(multwo());//undefined


const userr=(num1,num2)=>({username:"priyanka"})

console.log(userr());


const myarray=[2,34,5,5]

myarray.forEach(function (){})

const myarrayr=[];
myarrayr.forEach(()=>{})

const myarrayy=[]
myarrayy.forEach(()=>{})
