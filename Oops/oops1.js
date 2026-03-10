

// const user={
//     username:'priyanka',
//     loginCount: 8,
//     signedIn:true,
//     getUserDetails: function(){
     //   console.log('Got user Details from database');
    // console.log(`username ${this.username}`);
       // console.log(this); //{
                            // username: 'priyanka',
                            // loginCount: 8,
                            // signedIn: true,
                            // getUserDetails: [Function: getUserDetails]
                            //}
  //}

//}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //empty {}

// this keyword is use for Context




// ***********Constructor Function**************

//const promiseOne= new Promise()
//const date= new Date() //for new context

function User(username,loginCount,isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting= function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}


// const userOne= User('hitesh',12,true)
// const userTwo=User('chaiOrcode',11,true)//it will overwrite the values
// console.log(userOne);


const userOne= new User('hitesh',12,true)
const userTwo= new User('chaiOrcode',11,true)
console.log(userOne.constructor); //[Function: User]
console.log(userTwo);

// everytime constructor will give new instance
//implicitly defined
// new keyword- whenever you will use new keywords it will create you new empty object


// constructor  function calls because of new keyword 