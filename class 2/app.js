    //   promise

// let pro = new Promise((res,rej) =>{
//      let khil = 'burger'
//      if(khil == 'burger'){
//         console.log('yes')
//      }
//      else{
//         console.log('no')
//      }
// })

// pro.then((data)=>{
//     console.log(data)
// })
// pro.catch((err)=>{
//     console.log(err)
// })


// let pro1 = new Promise((res,rej)=>{
//     let khi = 'yes'
//     let k = (khi == 'yes'? 'ha hai ': 'nhi hai' )
//     console.log(k)
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })



// Destructuring (array , obj per chalta hai) 

// array


// let arr =  ['asd','asd', 'dsf',2,23,4,5,5]

// let [a,b,c,d,e,f,g,h] = arr
// console.log(arr)

// oject

// let obj =  {
//     names : 'Haseeb', 
//     fname : 'ismail',
//     id : '1',
//     num : '200',
//     rool : '868'

// }

// let {names,fname,id}=obj
// console.log(names)


    //  Destructuring (array , obj )

// let obj =  {
//     names : 'Haseeb', 
//     fname : 'ismail',
//     id : '1',
//     num : '200',
//     rool : '868',
//     arr : [1,2,3,4]
// }

// const {names,fname,id,arr}=obj
// const [a,b,c] = arr
// console.log(a,names)



let obj =[ 
{
    names : 'Haseeb', 
    fname : 'ismail',
    id : '1',
    num : '200',
    img : "./off.png"
},
{
    names : 'Haseeb', 
    fname : 'ismail',
    id : '1',
    num : '200',
    img : "./off.png"
},
{
    names : 'Haseeb', 
    fname : 'ismail',
    id : '1',
    num : '200',
    img : "./off.png"
}

]


let product = document.getElementById('show')
for (var i=0; i<obj.length; i++){
    let pro = obj[i]

    let p = document.createElement('p')
    p.innerHTML = pro.id
    product.appendChild(p)
    

    let num = document.createElement('p')
    num.innerHTML = pro.num
    product.appendChild(num)


    let img = document.createElement('p')
    img.src = pro.img
    product.appendChild(img)


}
