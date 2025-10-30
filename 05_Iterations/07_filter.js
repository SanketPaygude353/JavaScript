const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums=myNums.filter((num)=>{
    return num>4
})


const books=[
    { title:'Book one', genre:'history', publish:1984, edition:1994},
    { title:'Book two', genre:'friction', publish:1987, edition:1996},
    { title:'Book three', genre:'non friction', publish:1983, edition:1996},
    { title:'Book four', genre:'history', publish:1992, edition:1997},
    { title:'Book six', genre:'psycology', publish:1997, edition:1994},
    { title:'Book seven', genre:'science', publish:1957, edition:1992},
]

let userBooks=books.filter((bk)=>bk.genre==='history')
//console.log(userBooks);

userBooks=books.filter((bk)=>bk.publish<=2000)
//console.log(userBooks);

userBooks=books.filter((bk)=>bk.publish<1990 && bk.genre==='history')
console.log(userBooks);


