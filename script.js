"use strict";

// Homework-2

// დავალება-1
for (let i = 5; i < 100; i++){
    console.log(i);
}

// დავალება-2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++){
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i]);
    }
}


// დავალება-3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("არის");
for (let item of array2) {
    if (item == 5) {
        break;
    }
    console.log(item);
}


// დავალება-4 
let array3= [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++){sum += array3[i]} 
console.log(sum);


// დავალება-5
let array4= [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < array4.length; i++){sum1 += array4[i] / 5} 
console.log(sum1);


// დავალება-6
let array5 = [1, 2, 3, 7, 6, 9];

for (let item of array5) {
    if (item == 7) {
        continue;
    }
    console.log(item);
}


// დავალება-7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };

console.log(user['studentstatus']);


// დავალება-8
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2["age"] < 18 && user2["studentstatus"] == 'active') {
    console.log("hello user");
} else if (user2["name"] == 'levani'){
    console.log("hello levani");
} else if (user2["studentstatus"] == 'active' || user2["age"] < 25 ){
    console.log("hello anna");
} else {
    console.log("error");
}

//es6 if ჩანაწერი
let conditionResult = user2["age"] < 18 && user2["studentstatus"] == 'active' ? "hello user" : user2["name"] == 'levani' ? "hello levani" : user2["studentstatus"] == 'active' || user2["age"] < 25 ? "hello anna" : "error";
console.log(conditionResult);


// დავალება-9
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for (let item of array6) {
    if (item % 2 == 0 ){
        console.log(item);
    }
}


// დავალება-10 
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (element of users){
    if (element.status == true) {
        console.log(element);
    }
}

console.log(users[2]);


// დავალება-11
let array7 = [32, 14, null, '40', 50];

for (let item of array7) {
    if (typeof item == "number" && item % 5 == 0) {
        console.log(item);
    }
}


// დავალება-12
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (let element of array8){
    console.log(element);
    for (let item of element){
        if (item > 0) {
            console.log(item);
        }
    }
}







  







