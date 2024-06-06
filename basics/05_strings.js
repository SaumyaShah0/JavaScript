const name = "Saumya";
const repoCount = 15;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("SaumyaS")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('s'));
// console.log(gameName.substring(1,4));

const newString = gameName.substring(0,4) // can't take negative value
// console.log(newString);

const anotherString = gameName.slice(-5,-1)
// console.log(anotherString);

const newStringOne = "    S a u m y a S h a h"
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://saumya.com/saumya%20shah"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('saumya'));

const a = url.replace('%20', '-')
// console.log(a.includes('%20'));

console.log(gameName.split('-'));