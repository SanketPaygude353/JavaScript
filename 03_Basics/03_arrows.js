// const user={
//     username:"sanket",
//     price:333,


//     welComeMsg:function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
        
//     }

// }

// user.welComeMsg();
// user.username="sam"
//user.welComeMsg();

// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);   
// }

// chai()


// const chai=()=>{
//     let username="sanket"
//     console.log(this.username);
// }

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(25,25));

// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(25,25));


const addTwo=()=>({username:"sanket"})
console.log(addTwo());


