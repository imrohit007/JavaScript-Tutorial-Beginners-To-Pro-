try {
    // code that might throw an error goes here
} catch (error) {
    // code to handle error goes here
}


try {
    let age = prompt("please enter your age: ")
    let result = 10/age;
    console.log("The result is: " + result);
} catch (error) {
    console.log("Oops!! Something went wrong");
}

try {
    let x = y + 5;
    console.log("The value of x is: " + x);
} catch (error) {
    console.log("Oops!! Something went wrong!!")
}

try {
    let name = "John";
    name.toUpperCase();
} catch (error) {
    if (error instanceof TypeError){
        console.log("Oops!! You tried to perform and operation of an unsupported data type");
    } else {
        console.log("Oops!!! Something went wrong")
    }
}

try {
    let result = 10/0;
    console.log("The result is: " + result);
} catch (error) {
    console.log("Oops!! An error occurres " + error.message);
    console.log("Stack trace: " + error.stack)
}

try {
    // outer try block
    try {
        // inner try block
        let result = someFunction();
        console.log(" The result is: " + result);
    } catch (innerError) {
        console.log("An inner error occurred" + innerError.message);
    }
} catch (outerError) {
    console.log("An outer error occurred!!" + outerError.message)
}

try {
    // code that may throw an error
} catch (error) {
    // error handling code
} finally {
    // cleanup code that always executes
}