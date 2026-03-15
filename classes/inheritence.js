class User{
    constructor(username)
    {
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
         this.email-email
        this.password=password

    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai= new Teacher('chai','chai@gmail','123')

// teacher se user class ke sb access ho jaenge

chai.addCourse()//new course was added by chai
chai.logMe();//Username is masalachai


// ***user se teacher access ni hoga**

const masalachai= new User('masalachai')
//masalachai.addCourse() //not access of User Class
masalachai.logMe()//Username is masalachai


console.log(chai===masalachai); //false

console.log(chai==Teacher); //false
console.log(chai instanceof Teacher); //true
console.log(Teacher instanceof User); 
console.log(chai instanceof User); //true


console.log(masalachai===User);//false




