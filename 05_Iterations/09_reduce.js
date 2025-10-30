const myNums=[1, 2, 3]

// const myTotal=myNums.reduce(function(acc,cur){
//     console.log(`acc:${acc} and cur ${cur}`);
    
//     return acc+cur;
// },0)

const myTotal=myNums.reduce((acc,cur)=>acc+cur,0)



//console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:1000
    },
    {
        itemName:"py course",
        price:2000
    },
    {
        itemName:"java course",
        price:3000
    },
    {
        itemName:"cpp course",
        price:2000
    }
]


const priceToPay=shoppingCart.reduce((accu,item)=>accu+item.price,0)

console.log(priceToPay);
