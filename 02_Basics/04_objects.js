// const tinderUser= new Object()

// tinderUser.id=12
// tinderUser.name="jaydip"


// // console.log(tinderUser);


// // const regularUser={
// //     email:"some@gmail.com",
// //     UserfullName:{
// //         firstName:"sanket",
// //         lastname:"paygude"
// //     }
// // }

// // console.log(regularUser.UserfullName.firstName)


// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// // const obj3=Object.assign({},obj1,obj2);
// // console.log(obj3);


// // const obj3={...obj1,...obj2};
// // console.log(obj3);

// console.log( Object.keys(tinderUser));

// console.log( Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));


const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:sir}=course

console.log(sir);
