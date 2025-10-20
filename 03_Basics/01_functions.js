
//1.simple function without parameter without returning anything
// function sayMyName(){
//     console.log("Sanket");
// }

// sayMyName()

//2.with parameter without returning
// function add(number1,number2,number3){
//     console.log(number1+number2+number3);
// }

// add(2,3,"4")

//3.without parameter with returning

// function forReturn(){
//     return 4+5
// }

// const ans=forReturn()
// console.log(ans);


//4.with parameter with return
// function addition(num1,num2){
//     return num1+num2
// }

// const ans=addition(50,100);
// console.log(ans);



//"..." rest operator
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500))


// const user={
//     name:"sanket",
//     prices:"1000",
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.name} and Price is ${anyObject.price}`);
// }

// handleObject({
//     name:"sanket",
//     price:"100"
// })


const arr=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(arr));
