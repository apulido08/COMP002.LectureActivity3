// 3 ways to declare a function

//1st method
const printHelloWorld = function(){
    // activates inside the fucntion block
    console.log("Hello");
    console.log("World!");
};

printHelloWorld();

// 2nd method to create function
function printHelloWorld2() {
    console.log("Hello");
    console.log("World 2!");

}
printHelloWorld2();  //calls the printHellWorld2 function


// 3rd method to create a function (=> arrow notation)
const printHellWorld3 = () => {
    console.log("printHelloWorld3)( called!");
};

printHellWorld3();


//function with a parameter

function printHelloWorld4(name) {
console.log("Hello," + name);
} //scope not: the variable name no longer exist when the function completes

printHelloWorld4("Alvaro");

// function with multiple parameters
function printHelloWorld5(name1, name2, name3, name4, name5){
    console.log(`Hello, ${name1}, ${name2}, ${name3}, ${name4}, ${name5}`);  // string 
}

printHelloWorld5("Matthew", "William", "Adam", "Rosa", "Alvaro");


// string output options (single-quotes, double-quotes, backticks)
let someVariable = "";
console.log('hello ,' + someVariable); // single-quotes ex.
console.log("hello ," + someVariable);  // double quotes ex.
console.log(`hello , ${someVariable}`);  // backticks ex.



// function calling a function
function printHelloWorld6() {
    console.log("This is printHelloWorld6()");
}

function printHelloWorld7() {
    console.log("This is printHelloWorld7()");
    printHelloWorld6();  // calling a funcion inside a function ex.
}

printHelloWorld7(); //prints both"printhelloworld7()" & "printhelloworld6()


/***********************************/
//recursion
const factorial = n => {
    if (n <= 1) {
        return 1; // the "base case"
    }
    return n * factorial(n - 1); // recursive call
};
console.log(factorial(5));



/**************/
// no return values vs return values
// function without a return
function sum(num1, num2) {
    console.log(num1 + num2);
}
// function with  return value
function difference(num1, num2){
    return num1 - num2;  // returns the difference between num1 and num2
}

sum(2, 10);

let addTenToDifference = difference(10, 5) + 10;
    console.log(addTenToDifference);


    let name = "Alvaro"; // this variable is availabel in the entire program

    if (name == "Alvaro") {
        name == "Pulido";
        let helloStatement = "Hello there!";
        console.log(helloStatement);
    }
    console.log(helloStatement);

    