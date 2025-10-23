//simple for loop
const array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//nested for loop

for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {
        
        console.log(`i=${i} j=${j}`);
        
    }
    console.log( " ===============================");
    
}