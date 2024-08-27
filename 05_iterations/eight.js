const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    { 
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// const priceToPay = shoppingCart.reduce((acc, item) =>{ return acc + item.price}, 0)   // This is also Correct
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

const shoppingList =[ 
    {
        itemName: "Pant",
        price: 1000
    },

    {
        itemName: "Shirt",
        price: 700
    },

    {
        itemName: "Coat",
        price: 4000
    },

    {
        itemName: "Sandles",
        price: 1000
    },

]


const totalPrice = shoppingList.reduce((acc , item) => acc + item.price, 0);
console.log(`Price Total is = ${totalPrice}`);
