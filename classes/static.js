

class User{
    constructor(username)
    {

        this.username=username
    }

    logMe(){
        console.log(`username ${this.username}`);
        
    }

   static createId(){
        return `123`
    }
}

//using static keyword it will give not access error 
const priyanka=new User("priyanka")
//console.log(priyanka.createId()); //123


class Teacher extends User{
   
    constructor(username,email)
    {
         super(username)
        this.email=email
    }
}

const iphone= new Teacher('iphone','i@phone.com')

iphone.logMe();
 console.log(iphone.createId()); //not accessable

