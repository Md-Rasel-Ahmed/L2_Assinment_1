// Problem 1
function filterEvenNumbers(arr:number[]){
 const even =arr.filter(n=>n%2===0)
 return even
}
// console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]));

// Problem 2
function reverseString(str:string){
  const reversStr=str.split("").reverse().join("")
  return reversStr;
}
// console.log(reverseString("Bangladesh"));


// Problem 3
type StringOrNumber=string|number;
function checkType(text:StringOrNumber){
  if(typeof text==="string"){
    return "String"
  }else{
    return "Number"
  }
}
// console.log(checkType("Hello"));

// Problem 4
function getProperty<T,K extends keyof T>(obj:T,key:K){
  return obj[key];
}
const user = { id: "", name: "John Doe", age: 21,};
// console.log(getProperty(user,"name"));



// Problem 5
// will fixed letter
interface Book{
  title:string,
  author:string,
  publishedYear:number
}

function toggleReadStatus (obj:Book){
  const newObj=obj
  return obj
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));



// Problem 6
class Person{
  name:string;
  age:number
  constructor(name:string,age:number){
   this.name=name,
   this.age=age
  }
}
class Student extends Person{
  grade:string;
  constructor(name:string,age:number,grade:string){
   super(name,age)
   this.grade=grade
  }
  getDetails(){
     return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}
const student = new Student("Alice", 24, "A");
const student2 = new Student("Rasel", 20, "B");
// console.log(student.getDetails());


// Problem 7
function getIntersection (arr1:number[],arr2:number[]){
 let common:number[]=[]
 for (const element of arr1) {
   if(arr2.includes(element)&& !common.includes(element)){
   common.push(element)
   }
 }
  return common;
}
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7,5,1]));

