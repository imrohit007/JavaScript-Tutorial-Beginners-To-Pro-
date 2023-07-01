// var element = document.getElementById('myElement');

// var elements = document.getElementsByClassName('myClass');

//var elements = document.getElementsByTagName('div');

// var elements = document.querySelector('#myElement.myClass');
/*
var myElement = document.getElementById('myElement');
myElement.textContent = 'Hello World!';
myElement.value = 42;
myElement.src = 'image.jpg';

*/

/*
var myElement = document.getElementById('myElement');
myElement.style.color='red';
myElement.style.backgroundColor = 'yellow'

*/
/*
var newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
document.body.appendChild(newElement);

*/
/*
var elementToRemove = document.getElementById('elementToRemove');
elementToRemove.parentNode.removeChild(elementToRemove);

*/

/*
var element = document.getElementById('myElement');
element.classList.add('highlight');
element.classList.remove('hidden');
element.classList.toggle('active');

*/
/*

var image = document.getElementById('myImage');
image.src = 'new-image.jpg';

var link = document.getElementById('myLink');
link.href = 'https://example.com/';

var element = document.getElementById('myElement');
element.dataset.myAttribute = 'new value';

*/
/*
var button =  document.getElementById('myButton');
button.addEventListener('click', function() {
    // code to execute when the button is clicked
});

var input = document.getElementById('myInput');
input.addEventListener('keypress', function(event) {
    // Code to execute when a key is pressed in the input field
});

*/
/*
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('button clicked!!')
});

var element = document.getElementById('myElement');
element.addEventListener('mouseover', function() {
    this.classList.add('highlight');
});

var input = document.getElementById('myInput');
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!!!')
    }
})

*/

var element = document.getElementById('myElement');
element.innerHTML = '<strong>Hello, World!!</strong>';

var element = document.getElementById('myElement');
element.textContent = 'hello, world!!';

var element = document.getElementById('myElement');
var textNode = document.createTextNode('Hello, world!!');
element.appendChild(textNode);