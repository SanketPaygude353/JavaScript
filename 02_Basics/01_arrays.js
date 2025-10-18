//array
const myArr=[0,1,2,3,4,6]
console.log(myArr[0]);

const myArr1=new Array(1,2,3,4,5,6);

console.log(myArr1[0]);

//Array Methods

myArr.push(7);
myArr.push(8);
myArr.pop();

myArr.unshift(9)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr=myArr.join();

console.log(myArr);
console.log(newArr);

console.log("A",myArr);
const myNewArr=myArr.slice(1,3);
console.log(myNewArr);

const mn1=myArr.splice(1,3)  // cuts the array root array allso
console.log(mn1);





