// singleton , Constructor

const tinderUser= new Object()

 tinderUser.id="1234abc"
 tinderUser.name="priya"
 tinderUser.class="BCA"


//console.log(tinderUser);

//nesting objects
const RegularUser={
    email:"Some@gmail.com",
    fullname:{
        fisrstname:"priyanka",
        lastname:"rawat"
    }
}
//console.log(RegularUser.fullname.fisrstname);
//optional chaining
//ternory
//console.log(RegularUser.fullname?.fisrstname);

//add two object
const obj1={
    1:"a",
    2:"b"
}


const obj2={
    3:"a",
    4:"b"
}
const obj4={
    5:"a",
    6:"b"
}

//const obj3={obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//console.log(obj3);
////////////////////////target , source
//const obj3=Object.assign({},obj1,obj2,obj4) ; //static method copies all enumerable own properites from one or more source objects to a target objct. it return the modified target object 



//spread operator
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3);



const users=[
    {
        id:1,
        email:"rawat@gmail.com"
    },
      {
        id:1,
        email:"rawat@gmail.com"
    },
      {
        id:1,
        email:"rawat@gmail.com"
    },
      {
        id:1,
        email:"rawat@gmail.com"
    },
      {
        id:1,
        email:"rawat@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //we put all keys in an array then we can apply loops
//console.log(Object.values(tinderUser));//we put all value in an array then we can apply loops
//console.log(Object.entries(tinderUser)); //array ke andr array first key then value
//console.log(tinderUser.hasOwnProperty('class')); // gives boolean result , property exist or not
 

//***********DESTRUCTURING ************** */
// we can destructuring of oject ,array
const course ={
    coursename:"js in hindi",
    price:"999",
    courseMoniter:"priya"
}

//course.courseInstructor

const{courseMoniter:moniter}=course

//console.log(courseMoniter);
console.log(moniter);


