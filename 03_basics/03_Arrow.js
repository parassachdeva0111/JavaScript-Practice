const user = {
    username: "paras",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "mohit";
// user.welcomeMessage();

// user.welcomeMessage();
// console.log(this);
// user.welcomeMessage();

// function chai(){
//     let username = "paras";
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     let username = "paras";
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "paras";
//     console.log(this);
// }

// chai()

const addTwo = (num1 , num2) => {
    return num1 + num2;
}

const addTwo1 = (num1 , num2) => num1 + num2;

const addTwo2 = (num1 , num2) =>  ({num1,  num2}) ;


console.log(addTwo(3,4));
console.log(addTwo1(4,9));
console.log(addTwo2(4,1));