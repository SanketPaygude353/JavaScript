// let a=10
// const b=20
// var c=30
//Global Scope
// let a=300
// if(true)
// {
    //Local scope or Block Scope
    //let a=11
    // const b=21
    // var c=31
//     console.log(a);
// }

//  console.log(a);
// console.log(b);
//console.log(c);

// function one(){
//     const username="Sanket"

//     function two(){
//         const web="Youtube"
//         console.log(username);
//     }
//     //console.log(web);
    
//     two();
// }

// one()


console.log(addOne(5)); //= =====>Gives output

function addOne(num)
{
    return num+1;
}

addTwo(5)  //  =======> not runs
const addTwo=function(num)
{
    return num+2
}

