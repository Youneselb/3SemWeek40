//1a
let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

const filteredNames = nameArray.filter(name => {
return name.includes("a");

});
console.log(filteredNames);

//1b
const reverseNames = nameArray.map(name => {
    return name.split("").reverse().join("");
});
console.log(reverseNames)


//2a
function myFilter(array, callback) {
    const result = [];
        array.forEach(element => {
            if(callback(element)) {
result.push(element);

            }
        
    });
    return result;
}
console.log(myFilter(nameArray, element => {return element.includes("a")}));

//2b
function myMap(array, callback) {
    const arrayCopy  = [];
    array.forEach(element => {
        arrayCopy.push(callback(element));
    });
    return arrayCopy;
}
console.log(myMap(nameArray, element => {return element.split("").reverse().join("")}));

//3a
let numbers = [1, 3, 5, 10, 11];

let result = numbers.map(function(element, index, array) {

    if (index + 1 > array.length - 1) {
        return element;
    } else {
        return element + array[index + 1];

    }
});
console.log(result);


//3b
let namers = ["Hassan","Peter","Jan","Boline"];
let mapping = nameArray.map((element) => {
    return '<a href=””>' + element + '</a>';

}).join('');

let newMapping = '<nav>' + mapping + '</nav>';
console.log(newMapping);

//3c
let persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"},
 {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

 function getFullinfo(item) {
    var fullname = [item.name,item.phone].join(" ");
    return fullname;
  }
  
let mapPersons = persons.map(getFullinfo);

//4a
const all= ["Hassan", "Peter", "Carla", "Boline"];
console.log(all.join("#"));

//4b
const numbers2 = [2,3,67,33];
let sum = numbers2.reduce((acc,member,index,arr) => {
    return acc += member;
},0);
console.log(sum);

//4c
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

    function average(accumulator, member, index, members ){
        if(index === members.length-1){
            accumulator += member.age;
            return accumulator / members.length;
        }
        return accumulator + member.age;
    }

//console.log(members.reduce(average,0));

//5a This refers to the owener object and not the value itself, therefore it is undefined.  
//If we want the value and not the reference, we should call car.getBrand();
// this refers to the object that is called and as the getBrand function is in the object, it brings the value out.

let car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };

  //car.getBrand();

//5b Same principle as 5a, we put the getBrand funciton in a variable, where it will only return the reference to the object.



