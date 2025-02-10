<!-- Before disscussinng about the callback you should be aware of 2 things
1.Synchronous js 
2.First class function
3.Browsers Apis
 -->


## what are callback functions in javascript?

- callbacks are first class citizens in js
- i.e you can take a function and pass it into another fucntion
- The fucntion you pass in another function is known as the call back function

```js
function a(){

}
x(function y()){
    
}
```

## why are callbacks considered so powerful ?

- this is beacuse this gives us access to the async world in a synchronous single threaded language

## Example
```js
setTimeout(function(){},5000);

// This settimeout function allows us not to wait here for 5000 miliseconds rather do rest of our work then after 5000 miliseconds execute this function.
//Not Really 5000 miliseconds i will disscuss this later
```

## Javascript waits for none what does it mean ?

- Think of JavaScript as a chef in a kitchen. When the chef gets an order to cook a dish that takes some time (like baking a cake), instead of standing and waiting for the cake to bake, the chef starts preparing other dishes. The chef continues working on other tasks and only checks back on the cake once the timer rings indicating it's done.

Similarly, JavaScript doesn't stop executing the rest of the code when it encounters tasks that take some time to complete, like downloading data from the internet (web requests) or reading a file. Instead, it starts those tasks and then moves on to execute the next bits of code without waiting for those tasks to finish. This behavior keeps the program, especially web environments, very responsive.

For example, when a website needs to load data from a server:

JavaScript sends a request to the server for the data.
Instead of freezing everything on the webpage while waiting for the server to respond, JavaScript allows other operations to continue – like user interactions.
Once the server responds, JavaScript then handles the data without having interrupted other activities on the page.
This way of handling tasks is what we mean when we say JavaScript is "asynchronous." It ensures that the program (or webpage, in many cases) remains active and responsive, despite handling tasks that take time to complete.

## Guess The Output 
## Example
```js
setTimeout(function(){
    console.log("Timer")
},5000);
function x(y){
    console.log("X");
    y();
};
x(function (){
    console.log("Y");
});

```
## Event Listners 

```js

document.getElementById("Btn1").addEventListener("click",function clicked(){
    console.log("Button Clicked");
})

//This is a callback function which will be stored somewhere
//and will be called when the button is clicked 
```

## Imp

- How to show increment in clicks everytime i click a button
- ans-Using closure

```javascript
function countClick(){
    let count = 0;
    document.getElementById("Btn1").addEventListener("click",function clicked(){
        console.log("Button Clicked",count++);
    });
}
countClick();
```