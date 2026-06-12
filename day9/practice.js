// Printing on console / alerts
console.log("Hello World")
alert("Sucessfull")
console.error("error")
console.warning("warning")

const v=64
console.log(`Value of V is ${v}`)

//Input
const s=prompt("Type here: ")
console.log(s)

//data types
string
bollean
undefined
number ,  BigInt
null

// variables  --> let and const are block scoped while var is function scoped
var x=900
let y=65.5 
const z=40

// Same arithemetic operations as c++  --> Difference: === and ==  --> double equal only checks the value and not the data type but triple equal checks the datatype as well (!= and !==)
// Logical Operators -- && , || , ! 
// Type conversions
let x="20"
let y=40
console.log(x+y) // ans is 2040
console.log(Number(x)+y) 

// Conditonal statements - same as c++
for(let i=0;i<9;i++){
  console.log(i+1);
}

const condt = 2<3 ? "It is true" : "Its false"    // --> Short form of if-else statement

// switch statement
const n=2
switch(n){
  case 1:
    console.log("You chose 1")
    break;
  case 2:
    console.log("You chose 2")
    break;
  default:
    console.log("You chose any other number")
    break;
}

// Arrays:
const arr=[1,2,"Hello",true]
const arr1=Array.from("Hello") // 'h' 'e' 'l' 'l' 'o'
arr1.length - 1 // last element
arr1.push(4) , arr1.pop()

const [x,y]=[1,2]    // x=1 and y=2
const [x,...y]=[1,2,3,4,5] // x=1 and y=rest

const obj = {
  name:"Madhav",
  age:20
}

obj.age=21
obj["name"]=Kriti

for(let key in obj){
  console.log(key)
}
// Functions
function greet(name){
  console.log(name)
  return "Hello"
}
const s=greet("Madhav")

const func = (name) => name + "!"
console.log(func("Madhav"))

// Rest parameters= allows you to have any number of parameters
function addnum(...numbers){
}

// Map , filter , reduce
const arr=[1,2,3,4]
const doubled = arr.map((num)=>num*2)
console.log(doubled)

const obj12={
  name:"Madhav",age:20,
  name:"Kriti",age:23,
}
const newobj=obj12.map((obj)=>obj.name)
console.log(newobj)

// Reduce

const red=[1,2,3,4,5]
const sum=red.reduce((acc,num)=>acc+num)
console.log(sum)

const evennum=red.filter((num)=>num%2===0)
console.log(evennum)
// filter returns a new array but map doesnt 