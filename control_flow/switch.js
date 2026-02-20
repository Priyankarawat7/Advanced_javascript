//Switch 


//*******SYNTAX**********
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


 const month=5

 switch (month) {
    case 1:
        console.log("january"); 
        break;
     case 2:
        console.log("febuary");  
        break;
     case 3:
        console.log("march");   
        break;
     case 4:
        console.log("april"); 
        break;
     case 5:
        console.log("may");   
        break;  
     case 6:
        console.log("june");    
        break;
     case 7:
        console.log("july");   
        break;
    default:
        console.log(
            "not match any value"
        );
        
        break;
 }
//if we can't declare break it will execute all the code if the condition matches



//For String
const months="august"

 switch (months) {
    case "january":
        console.log("january"); 
        break;
     case "febuary":
        console.log("febuary");  
        break;
     case "march":
        console.log("march");   
        break;
     case "april":
        console.log("april"); 
        break;
     case "may":
        console.log("may");   
       break;  
 
    default:
        console.log(
            "not match any value"
        ); 
        break;
 }