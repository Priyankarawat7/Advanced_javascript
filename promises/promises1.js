
    // <!--promise OBJECT represent the eventual competion for failure -->
    // <!-- promises have three states
    //  1.pending:- neither fullfilled nor rejected
    //  2.fullfilles:-sucessfully completed
    //  3.rejected:-operation failed-->






    //  <!-- promise libraries like Q or Blurbird now that we have ES^ promises -->


  //  fetch('https://www.youtube.com/').then().catch().finally()

        // **********  method one**************

    // const promiseOne= new Promise((resolve,reject)=>{

    //     // Do an async task
    //     // DB Calls ,cryptography,network
    //     setTimeout(function(){
    //           console.log("async task is completed");
    //           resolve() //it is connected to the below function

    //     },1000)
    // }) //callback
    // // consume
    // // then->reslove

    // promiseOne.then(function(){
    //     console.log('promise consumed');
        
    // })

    // *********method 2***************

    // new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         console.log('Async task two');
    //         resolve()  
    //     }, 2000);

    // }).then(()=>{
    //     console.log("promises 2 task consumed");
        
    // })


    // **************Methos 3rd ****************

// const promiseThree= new Promise((resolve,reject)=>{
  
//     setTimeout(() => { 
//         resolve({
//             username:"priyanka",
//             fee:2000,
//             hobby:"scoding"
//         }) //we can pass the data(objects) in reslove 
        
//     }, 2000);
// })

// promiseThree.then((user)=>{
//     console.log(user);

// })

//*************Method 4*************

// const promisefour= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error =false //  username:"priyanka",fee:2000,hobby:"scoding"
//        // let error=true //Error : something went wrong

//         if(!error){
//             resolve({
//             username:"priyanka",
//             fee:2000,
//            email:"rawatpriyanka@gmail.com"

//             })

//         }
//         else{
//             reject('Error : something went wrong')

//         }
        
//     }, 1000);
// })


// const username=promisefour.
// then((user)=>{

//     console.log(user);
//     return user.username
// }).
// then((username)=>{
//     console.log(username);
// }).
// catch((error)=>{
//     console.log(error);
    

// }).finally(()=>{
//     console.log('the promise is either resloved or rejected');
    
// })



//***************** */ MEthod 5*****************

const promiseFive=new Promise((resolve,reject)=>{

    setTimeout(() => {
        let error =false

        if(!error){
            resolve({
            username:"javascript",
            fee:4000,
           email:"rawat@gmail.com"

            })

        }
        else{
            reject('Error : JS went wrong')

        }
        
    }, 1000);
})

// we can use different properties also 

// async will  wait few jb tk kaam ho jata then it will 
// go futher otherwise it will give error
// async function ConsumePromiseFive() {

//     try {
//          const response= await promiseFive
//    console.log(response);
        
//     } catch (error) {

//         console.log(error);   
//     }
   
// }

//  ConsumePromiseFive()


//******** */ method  6**************

// async function getAllUsers() {
 
//     try {
//          const response=  await fetch('https://randomuser.me/api/')
    
//          //console.log(response);
         
//         const data= await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E:',error);    
        
//     }
 
// }

//getAllUsers()


// ***********different method********

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json

}).then((data)=>{
    console.log(data);
    
    
})
.catch((error )=>{
    console.log(error);
    

})
.finally(()=>{
    console.log('consumed');
    
})

 






