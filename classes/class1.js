// ES6  



//class is a keyword

// class User{
//     constructor(username,email,password)
//     {
//         this.username=username
//         this.email-email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     ChangeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai= new User('chai','chai2@gmail.com','123')

// console.log(chai.encryptPassword());//123abc
// console.log(chai.ChangeUsername());//CHAI

// ********behind the scene************

function User(username,email,password){
     this.username=username
        this.email-email
        this.password=password
}


User.prototype.encryptPassword=function(){
    return `${this.password}pqr`
}
  User.prototype.ChangeUsername=function(){
        return `${this.username.toUpperCase()}`
    }


const Tea= new User('tea','tea@gmail.com','123')
console.log(Tea.encryptPassword());
console.log(Tea.ChangeUsername());




