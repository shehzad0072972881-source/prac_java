// const student = {
//     fullName : "shehzad ahmad",
//     marks : 750,

//     printMarks: function () {
//         console.log("marks =", this.marks);
//     }
// }


// const student = {
//     name : "Shehzad",
//     class: 12,
//     age : 19,
// };

// hum object ke andar or objects bi bana sakte he.

// const User = {
//    userName : {
//    userFullName: {
//     firstName: "Shehzad",
//        lastName: "Ahmad",
//    }
//    }
// }
// console.log(User.userName.userFullName);
// console.log(User)

// const student = {
//     fullName : "Shehzad Ahmad",
//     age : 19,
//     class: "12th",
//     printage : function () {
//          console.log("fullName =", this.fullName)
//         console.log("age =", this.age);
//         console.log("class =", this.class)
//     }
// };
// student.printage();

// const user = {
//     calTax (){
//         console.log("tax rate is 10%");
//     }
// }

// const userage = {
//     age : 19,
// }

// const username = {
//     name : "Shehzad",
// }

// const usernum = {
//    mobNum : "03.........",
// }

// userage.__proto__= user;
// username.__proto__= user;
// usernum.__proto__= user;

class product {
    constructor(name, price, category) {     //Constructor object ki initial values set karta hai.
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const products = [
new product("Nike", 3000, "shoes"),
new product("Rado", 5000, "Watch"),
new product("Cotton", 3500, "Suit"),
new product("HP", 50000, "Laptop"),
];

const prodContainer = document.querySelector("#prodContainer");

products.forEach((product) => {
    prodContainer.innerHTML += `
   <div class="carCards">
         <h2>${product.name}</h2>
         <p>Price: Rs. ${product.price}</p>
         <p>category: ${product.category}</p>
     </div>
    `
});


class car  {
   constructor(name, price, model, category){
    this.name = name;
    this.price = price;
    this.model = model;
    this.category = category;
   }


}
const cars = [
new car("BMW", 20000000, 2019, "Car"),
new car("Civic", 2000000, 2020, "Car"),
new car("Alto", 900000, 2013, "Car"),
new car("Mehran", 700000, 2023, "Car"),
new car("Carolla", 2000000, 2025, "Car")
];
const  carContainer = document.querySelector("#carContainer")

cars.forEach((car) => {
    carContainer.innerHTML +=`
    <div class="carCard">
        <h2>${car.name}</h2>
        <p>Price: Rs. ${car.price}</p>
        <p>model: ${car.model}</P>
        <p>category: ${car.category}</p>
    </div>
    `
    ;
});

