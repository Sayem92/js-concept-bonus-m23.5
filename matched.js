const numbers=[15, 25, 65, 65, 65, 59, 81, 2];
// for (let i =0; i < numbers.length; i++){
//     const number=numbers[i];
//     console.log(number)
// }

//for loop ar update version 
//for loop ar of version
for (const number of numbers){
    // console.log(number);
}

const products=[
    {id:1, name : 'walton labtop', price : 125000,},
    {id:2, name : 'walton mobile kinbo', price : 25000,},
    {id:3, name : 'lenobo yoga phone', price : 25000,},
    {id:4, name : 'xiami mobile', price : 25000,},
    {id:5, name : 'iphone mobile', price : 125000,},
    {id:6, name : 'mac book LabTop', price : 25000,},
    {id:7, name : 'symphony phone', price : 25000,},
    {id:8, name : 'walton tv', price : 25000,},
    {id:9, name : 'max mobile', price : 25000,},
    {id:10, name : 'singer firiz', price : 25000,},
    {id:11, name : 'nothing one mobile', price : 25000,},
    {id:12, name : 'lava phone', price : 25000,},
];
// for (const product of products){
//     console.log(product)
// }

// new system for this
function matchedProducs(products,search){
    const matched=[];
    for (const product of products){
        //most important kujar ta and search ta 2 ta lowercase korba
             if(product.name.toLowerCase().includes(search.toLowerCase())){
                matched.push(product);
             }
         }
         return matched;
}
// search ta case sensetive cuto letter dile cuto na paba boro dile boro ta
// const result=matchedProducs(products,'labtop');
// console.log(result)

function compare(a, b) {
    if (a == b) {
     return true;
    } else {
     return false;
    }
   }
//    const result = compare(15, "15");
//    console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
//    const result = compare(25, 25);
//    console.log(result);

// console.log("123" + 123);
let a='hi';
let b='there';
// console.log(a+b)