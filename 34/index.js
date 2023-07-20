/*
let person = {
    name: 'Bug Ninza',
    age: 24,
    email: "bugninza7@gmail.com",
    hobbies: ["reading", "bike riding", "hiking"]
};


console.log(person.name);
console.log(person["age"])

let hobbies = ["reading", "bike riding", "hiking"];

console.log(hobbies[0]);
console.log(hobbies.length)

//----
let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

*/
//--------
/*
let jsonString = '{"name": "Bug Ninza", "age": 24, "email": "bugninza7@gmail.com"}'
let person = JSON.parse(jsonString);
console.log(person)

*/

let person = {
    name: 'Bug Ninza',
    age: 24,
    email: "bugninza7@gmail.com",
};

console.log(person.name);

person.age = 100;
console.log(person.age)

person.hobbies = ["reading", "playing e-games"];
console.log(person.hobbies[1])

let userProfile = {
    name: 'Bug Ninza',
    age: 24,
    email: "bugninza7@gmail.com",
    address: {
        street: "Developers community",
        city: "YouTube",
        country: "India"
    }
};

console.log(userProfile.address.country)

//---

let invalidJsonString = '{"name": "Bug Ninza", "age": 24}';

try {
    let person = JSON.parse(invalidJsonString);
    console.log(person);
} catch(error) {
    console.log("Invalid JSON syntax: ", error.message);
}