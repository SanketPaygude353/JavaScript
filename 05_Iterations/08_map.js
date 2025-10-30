const myNum=[1, 2 , 3, 4, 6, 7, 8, 9, 10]

//const newNums=myNum.map((num)=>num+10)

//with return statement
let newNums=myNum.map((num)=>{return num+10})

//console.log(newNums);


//chaining

newNums=myNum.map( (num) => num*10)
                .map( (num) => num+1)
                .filter((num) => num >= 40)

                console.log(newNums);
                
