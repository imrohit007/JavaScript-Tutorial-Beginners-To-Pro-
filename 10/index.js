function addNumbers (num1, num2) {
    return num1+num2;
}

function greetUser(firstName, lastName, age){
    console.log("Hello " + firstName + " " + lastName + ", you are " + age + " years old");
}

greetUser("John", "Doe", 30)

function fetchData(callback) {
    // Make HTTP request
    // When data is received, call the callback function with the data as an argument
    callback(data);
}

function multiplyBy(factor){
    return function(input){
        return input * factor;
    }
}
