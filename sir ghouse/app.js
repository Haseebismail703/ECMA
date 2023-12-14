
    //  var let const   function ka ander bna hoga to function ka  bahir nhi chala ga
    // sab mai abc not define aiga 

// example 1 

// function foo(){
//    var  abc  ='Haseeb'
// }
// console.log(abc)
 

// function foo(){
//     let   abc  ='Haseeb'
//  }
//  console.log(abc)


//  function foo(){
//     const  abc  ='Haseeb'
//  }
//  console.log(abc)


//  agar if ki condition lagi hogi to var chala ga let or const nhi 
//  or false hoga to Undefine aiga 

// if(true){
//    var abc = 'Haseeb'
// }
// console.log(abc);  // Haseeb


 
// var let  ko bad mai value assighn kar sakta hai const mai nhi 



// var abc = 'Haseeb'
// abc = 'Rehman'
// console.log(abc);  // Rehman

// let abc = 'Haseeb'
// abc = 'Rehman'
// console.log(abc);  // Rehman


// const abc = 'Haseeb'
// abc = 'Rehman'
// console.log(abc) 

// Uncaught TypeError: Assignment to constant variable.

// ak jasa name bhi nhi dasakta 


// var  abc = 'Haseeb'
// console.log(abc) 

// const abc = 'Haseeb'
// console.log(abc) 
//  abc alredy decleare 


// var  abc = 'Haseeb'
// console.log(abc) 

// let abc = 'Haseeb'
// console.log(abc) 





// template literals


// var abc= 'Haseeb'
// var abs = `rehman
//  raheem`

// var ful = `${abc} ${abs}`
// console.log(ful);


// function foo(...rest ){

//     console.log(rest[1])
// }
// foo(1,2,3,4,5,6,7)





// let obj = {
//     name : 'Haseeb'
// }

// let obj1 = obj
// obj1.name = 'Rehman'
// console.log(obj1);
// console.log(obj);



// let obj = {
//     name : 'Haseeb'
// }

// let obj1 = {...obj}
// obj1.name = 'Rehman'
// console.log(obj);
// console.log(obj1);


// let obj = {name : 'Haseeb',detail:{school:'Smit'}}
// let obj1 = {...obj,detail:{...obj.detail}}

// obj1.detail.school = 'Saylani'
// console.log(obj1);

// console.log(obj);

// destructure data 

// let obj = {
//     name1 : 'Haseeb',
//     email : 'Haseebismail@',
//     school:'Smit'


// }
// let   {name1,school,email} = obj
// console.log(name1,school,email);
 
// Nasted obj obj ka ander obj 
 
// let obj = {
//     name1 : 'Haseeb',
//     email : 'Haseebismail@',
//     school:'Smit',
//     detail1 : {
//         school1 : 'Haroon'
//       }

// }
// let   {name1,school,email,detail1} = obj
// let {school1}= detail1
// console.log(school1);
 
// let obj = {
//     name1 : 'Haseeb',
//     email : 'Haseebismail@',
//     school:'Smit',
//     detail1 : {
//         school1 : 'Haroon'
//       },
//       progre : {
//         abc : 'habib'

//       }

// }
// let {name1,email,school,detail1,progre} = obj
// let {school1} = detail1
// let {abc} = progre
// console.log(name1,email,school,school1,abc);


// let obj = {
//     name1 : 'Haseeb',
//     email : 'Haseebismail@',
//     school:'Smit',
//     // detail1 : {

//     //     school1 : 'Haroon'
//     //   }

// }
// // console ka ander jo line sa key di ahi usi sequence sa chala gi 
// let   {email,school,name1,detail1} = obj
// console.log(name1,email,school,detail1);

// destructure array ka uper 



// let arr = ['Haseeb','Ali','Habib']

// let [a,b,c] = arr
// console.log(a,b,c);



// let arr = ['Haseeb','Ali','Habib']

// let [1,2,3] = arr
// console.log(arr);// Uncaught SyntaxError: Invalid destructuring assignment target



// for each 
// let arr = ['Haseeb','Ali','Habib']

// arr.forEach(function(v,i){
//     console.log(v,i);
// })

 
// let arr = ['Haseeb','Ali','Habib']

//  let result =  arr.map(function(v,i){
    
// })
//  console.log(result);// undefine


// map new array return karta hai 

//  let arr = ['Haseeb','Ali','Habib']

// arr.map(function(v,i){
//     console.log(v,i);
// })


// let arr = ['Haseeb','Ali','Habib']

//  let result =  arr.map(function(v,i){
//     console.log(v,i);
//     // return 'Test'
//     return `${v} Haseeb`
// })

// console.log(result);

//  filter 

//  let arr = ['Haseeb','Ali','Habib']

//  let result =  arr.filter(function(v,i){
//     return v === 'Haseeb'
// })
// console.log(result);


//  let arr = ['Haseeb','Ali','Habib']

//  let result =  arr.some(function(v,i){
//     return v === 'Haseeb'
// })
// console.log(result);// true


// let arr = ['Haseeb','Ali','Habib']

// let result =  arr.every(function(v){
//    return v === 'Haseeb'
// })
// console.log(result);// true



// reduce
// let arr = [1,2,3,4,5,6]

// let result = arr.reduce(function(a,b,c){
//    return a> b ? a :b 


// })

// console.log(result);   //  6



