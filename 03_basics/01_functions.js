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
console.log(loginUserMessage());
