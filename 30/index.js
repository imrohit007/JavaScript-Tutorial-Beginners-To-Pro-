function addNumbers(a,b) {
    return a + b;
}

// unit test for the addNumbers function
function testAddNumbers(){
    const result = addNumbers(3,5);
    if (result === 8) {
        console.log("unit test passed!!");
    } else {
        console.log("Unit test failed!!!")
    }
}

testAddNumbers()

function login(username, password) {
    // perform login process
    // ...
    return true; // simulating a successful login
}

// integration test for the login process
function testLogin() {
    const result = login('user123', "password123");
    if (result) {
        console.log("Integration test passed!!");
    } else {
        console.log("Integration test failed!!")
    }
}
testLogin();


// simulating end-to-end test for the login process
/*
function testEndToEndLogin() {
    // simulate user visiting the login page
    //...

    // simulate user entering credentials
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    usernameInput.value = "user123";
    passwordInput = "password123";

    // simulate user submitting the login form 
    const loginButton = document.getElementById('login-button');
    loginButton.click();

    // verify if the user is logged in
    //..

    if (/* Logged in successfully ) {
        console.log("End-to-end test passed");
    } else {
        console.log("End-to-end test failed");
    }
}

testEndToEndLogin();
*/


function multiply(a,b) {
    console.log("Entering multiply function: "); // debugging message
    const result = a*b;
    console.log("Result: ", result); // debugging message
    return result;
}

multiply(4,5);

function calculateSum(numbers) {
    let sum = 0;
    for (let i=0; i< numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbersArray = [2,4,6,8,10];
const result = calculateSum(numbersArray);
console.log("Sum: ", result);




