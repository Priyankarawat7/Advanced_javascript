

//1.Create an object user with properties name, email, and isActive.
function createuser(){


const obj={
    name:"priyanka",
    email:"rawat@gmail.com",
    isActive:true
}
// /console.log(obj);


//2.Write a function that updates the email without directly accessing the object property outside the function.
//obj.email="priya@gmail.com";
//console.log(obj.email);
return{
    changeemail(newmail){
        obj.email=newmail;
    },
    getemail(){
        return obj.email;
    }
}
}
const user=createuser();
user.changeemail("priya@gmail.com");

console.log(user.getemail());


// 3.Write a program that loops through an object and prints only the properties whose values are strings.

// 4.Create an object with a method inside it that uses this to return a formatted string using object properties.
// 5.Write a program that copies an object and proves that changing the copy does not affect the original (deep copy).
// 6.Create two objects and merge them into one using at least two different approaches.
// 7.Write a program that checks whether a property exists in an object without using if (obj.prop).
// 8.Create an object where keys are dynamic (computed property names).
// 9.Write a program that freezes an object and demonstrates that modification is not allowed.
// 10.Create an object that uses getter and setter to control how a property is read and updated.
// .11.Write a program that demonstrates object reference behavior by assigning the same object to two variables and modifying one.