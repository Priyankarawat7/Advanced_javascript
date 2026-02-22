const mynumbers=[1,2,3,4,5,5,6,7,8,9,10]

// let newnums=mynumbers.map((num)=>{
//     return num+10;
// })

//we can also put two three methods at the same time like map, filter

//map return new array always
let newnums=mynumbers.map((num)=> num*2).

    filter((num)=>num%3==0)
console.log(newnums);
