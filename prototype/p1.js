 let myName="histesh    "

 console.log(myName.trueLength);
 

//  let myHeroes=["thor","spiderman"]

//  let heropower={
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`);
        

//     }
//  }

// Object.prototype.hitesh= function () {
//     console.log(`hitesh is present in all obejct `);
    
    
// }


// Array.prototype.heyhitesh=function(){
//     console.log(`hitesh says hero`);
    

// }
 //heropower.hitesh()
 //myHeroes.hitesh()

 //myHeroes.heyhitesh()
//heropower.heyhitesh()// not access



//****** */ inheritence********


const User={
    name:"chai",
    email:"goggle.com"
}
const Teacher={
    makevideo: true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User




//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUsername="chaiOrCode"
String.prototype.trueLength=function(){
    console.log(`${this}`);//chaiorcode
    console.log(`true length is ${this.trim().length}`);//10
    
    
}

anotherUsername.trueLength()

"hitesh".trueLength()
"priyanka   ".trueLength()