const marvel_heros=["thor","ironMan","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  //o/p==>[ 'thor', 'ironMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);  //o/p==>[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

// const allHeros=[...marvel_heros,...dc_heros]  //spread operation
// console.log(allHeros);  //o/p==>[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another=another_array.flat(Infinity)

// console.log(real_another);  //op==>[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Sanket"));
console.log(Array.from("Sanket"));

let a=1
let b=2
let c=3

console.log(Array.of(a,b,c));
