const name="sanket"
const value=30;

// console.log(name+value);

// console.log(`hello my name is ${name} and value is ${value}`)

const gameName=new String("sanket-raghunath-paygude");

console.log(gameName[0]);

console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(0,4));

const newString="    Sanket    ";
console.log(newString);
console.log(newString.trim());

const url="http://sanket.com/sanket%20paygude"

console.log(url.replace('%20','-'));
console.log(url.includes('sanket'))

console.log(gameName.split('-'))