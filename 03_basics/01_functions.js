function myName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("S");
}

// myName();

function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2);
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

// addTwoNumbers(1,"a");

const ans = addTwoNumbers(5,8);

// console.log("Ans: ", ans);


function loginUserMessage(username = "Paras"){
    if(username === undefined)
    {
        console.log("Please enter a username");
        return ;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("PARAS"));
// console.log(loginUserMessage());




function calculateCartPrice(val1 , val2 ,... num1){
    return num1;
}

// console.log(calculateCartPrice(100,200,300,400,1000));

const user1 = {
    username: "Paras",
    price: 199
}

const user2 = {
    username: "Mohit",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user1);
// handleObject(user2);

handleObject({
    username: "Sudhir",
    price: -100000000000
})

const myNewArray1 = [200,400,100,600];
const myNewArray2 = [1,2,3,4,5,6,7];

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray1));
// console.log(returnSecondValue(myNewArray2));

console.log(returnSecondValue([100,200,300,400,500,600]));