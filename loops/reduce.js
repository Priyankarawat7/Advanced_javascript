//*******REDUCE  ***********/
//we can use this in carts

//reduce() poori array ko ek single value me convert karta hai.
//Single values:- number string object array etc


// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue)


const myNums=[1,2,3]
const total= myNums.reduce((acc,cur)=>{
    //console.log(`accu ${acc} and curr value ${cur}`);
    
    return acc+cur;//return ke baad kuch execute nhi hota

},0)//give value to acc 
//console.log(total);



const shopping_cart=[
    {
        itemname:'top',
        price:299
    },
     {
        itemname:'jeans',
        price:999
    },
     {
        itemname:'dress',
        price:799
    },
     {
        itemname:'shoes',
        price:1299
    },
]

const pricetoPay=shopping_cart.reduce((acc,item)=>{
    return acc+item.price

},0)

console.log(pricetoPay);
