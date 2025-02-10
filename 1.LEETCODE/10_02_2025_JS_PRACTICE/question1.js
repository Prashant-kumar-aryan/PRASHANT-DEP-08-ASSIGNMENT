// Problem 1 .Inventory Price Update
// Description:
// You have an array of product objects. Each object contains an id, name, price, and quantity.
//  Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount
//  (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.
const products = [   
    { id: 1, name: "Widget", price: 50, quantity: 120 },   
    { id: 2, name: "Gadget", price: 30, quantity: 80 }, 
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 } 
];


//using map 
console.log("\n\nImplementing Map")
const updatedProductsUsingMap = products.map(product => {
    if (product.quantity > 100) {
        return {
            ...product,
            discountedPrice: product.price * 0.90  
        };
    }
    return {
        ...product,
        discountedPrice: product.price 
    }; 
});

//using filter
console.log("\n\nImplementing Filter")
const updatedProductsUsingFilter = updatedProductsUsingMap.filter(product=>product.price!=product.discountedPrice);

//using forEach

console.log("\n\nImplementing ForEach")
updatedProductsUsingFilter.forEach(
    product=>
        console.log(`Name : ${product.name} \n Price :${product.discountedPrice}`)
)

// const ans = products.map((product)=>
//     product.quantity>100?{...product,price : product.price*0.90} : product
// )
// console.log(ans);