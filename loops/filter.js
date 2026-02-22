////*********For Each**********
//HIgher Order
//.foreach,concat etc
const coding=["js","java","c++","python"]


// coding.forEach(function (item) { //parameter ki trh vale laega (item)
//     console.log(item); // js java c++ python
    
// } )


//arrow function
//coding.forEach((item)=>{

  //  console.log(item); // js java c++ python

//})

function printme(item)
{
   // console.log(item);
    
}
//coding.forEach(printme); //reference

coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})

//For each

const mycoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
     {
        languagename:"java",
        languagefile:"java"
    },
     {
        languagename:"python",
        languagefile:"py"
    }

]

mycoding.forEach((item)=>{

  //  console.log(item.languagefile);//access element
    
})


//foreach loop is does not return the values like this['js', 'java', 'c++', 'python' ]
const values=coding.forEach((item)=>{
   // console.log(item);
    return item //again undefined

})

//console.log(values); //undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newnums=[]

myNums.forEach((num)=>{
    if(num>4)
    {
        newnums.push(num)
        
    }
})
//console.log(newnums);//[ 5, 6, 7, 8, 9, 10 ]



//*******FILTER********
//filter method never create a new array
//const myNums=[1,2,3,4,5,6,7,8,9,10]

//arrow function
//filter will return the values

//let newNums= myNums.filter((num)=> num >4 )

//console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]



//when we  return condition inside {} we have to write return keyword
//let newno= myNums.filter((num)=>{
  //  return  num>4
//})
//console.log(newno);



const books=[{
    title:'book one',
    genre:'fiction',
    publish:1911,
    edition:2009
},
{
    title:'book two',
    genre:'non-fiction',
    publish:1941,
    edition:2006
},

{
    title:'book three',
    genre:'history',
    publish:1991,
    edition:2010
},

{
    title:'book four',
    genre:'fiction',
    publish:1961,
    edition:2008
},

{
    title:'book five',
    genre:'non-fiction',
    publish:1964,
    edition:2013
},

]

let userbook=books.filter((bk)=> bk.genre==="fiction")

userbook=books.filter((bk)=>{ 
    
   return bk.publish>=1960
})

userbook=books.filter((bk)=>{

    return bk.genre==="history" && bk.publish>=1990
})


console.log(userbook);


