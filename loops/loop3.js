// for of

// array specific Loops

// ["","",""]
// [{},{},{}]


// for (const element of object) {  //object se mtlb h ki kis chiz ke upr loop lgana h 

    
// }
//we can also put this loop on string

const arr=[1,2,3,4,5];

for (const num of arr) {  

  //  console.log(num); //1 2 3 4 5
     
}

const greeting="hello world"

for (const greet of greeting) {
  //  console.log(`each char is ${greet}`);
     //it will write chracters one by one
    
}


//**********Map******
//map is an object it will hold key-value pairs 
// remembets the original insertion order of the key
//clear,delete,entries,foreach,keys,set etc
//it is the unique map's collection

// const map=new Map() 
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India") //this

//console.log(map);// not give any duplicate value like india


//for (const key of map) {
   // console.log(key);// it will give ouput in array format
    
    
//}

//for (const [key,value] of map) {
  //  console.log(key,':-', value);
      
//}
//for of will not work on objects
const  myobject={ 
    'game1':'ball',
    'game2':'baseball',
    'game3':'cricket'
}
//for (const [key,value] of myobject) {

   // console.log(key, ':-',value); //object is not iterable 
//}
 //2nd option
const  myyobject={ 
    game1:'ball',
    game2:'baseball',
    game3:'cricket'
}
//for (const [key,value] of myobject) {

 //   console.log(key, ':-',value); //object is not iterable 
//}


//********FOR IN********* */
//for in loop will work in  object

const myyyobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myyyobject) {
        
   // console.log(`${key}  shortcut is for ${myyyobject[key]}`);//values
    
}

//for arrays

const programming=["javascript","cpp","c","python"]

for (const key in programming) {
  // console.log(`${key}`); // 0,1,2,
  
 // console.log(programming[key]); //arrays values
  
   
}

// const map=new Map() 
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key); //if map is not iterable it will not written in loop
 
// }







    








