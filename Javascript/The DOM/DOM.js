/*
The DOM is a logical tree-like MODEL that organizes a web page’s HTML DOCUMENT as an OBJECT.
The DOM is the link between HTML web pages and scripting languages, like JS.

In the DOM tree, the top-most NODE is called the ROOT NODE, and it represents
the HTML document. The descendants of the ROOT NODE are the HTML tags in the document,
starting with the <html> tag followed by the <head> and <body> tags and so on.

A PARENT NODE is the closest connected node to another node in the direction towards the ROOT.
A CHILD NODE is the closest connected node to another node in the direction away from the ROOT.

Types of NODE OBJECTS > the HTML elements in the DOM are nodes of TYPE ELEMENT,
while the text inside the HTML elements are nodes of TYPE TEXT.

The DOCUMENT KEYWORD > the Document Object in JavaScript is the door to the DOM.
You can access and set the contents of an element with the [.innerHTML] property
*/

document.body.innerHTML = 'This is the text of the body element'; // Changes the body element
document.body.innerHTML = '<h2>This is a heading</h2>'; // Adds a valid HTML

/*
The [.querySelector()] method/function allows us to specify a CSS selector and then returns
the first element that matches that selector.
*/
document.querySelector('p');
// The [.getElementByID()] method/function allows to access elements by CSS ID
document.getElementById('bio').innerHTML = 'The description'; //Sets the text in 'bio' to the 'String'
/*
Another way to modify an element is by changing its CSS STYLE.
The (.style) property of a DOM element provides access to the inline style of that HTML tag.
*/
// The [element.style.property], with (property) representing a CSS PROPERTY
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue'; //Styling using JS VAR
document.querySelector('body').style.backgroundColor = 'blue' //Styling using the method alone
/*
The [.createElement(tagName)] method creates a new element based on the specified
tag name passed into it as an argument.
The [.appendChild()] method will add a child element as the last child node.
*/
let paragraph = document.createElement('p'); //Creates a <p>
paragraph.id = 'info'; //Gives it an 'ID'
paragraph.innerHTML = 'The text inside the paragraph'; //Adds text to the element
document.body.appendChild(paragraph); //Appends it to the body

// The [.removeChild()] method removes a specified child from a parent.
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph); //Removes the first <p> from body

// The [.hidden] property allows you to hide an element by assigning it as true or false.
document.getElementById('sign').hidden = true; //Hides the element from the DOM, doesn't delete

// The [.onclick] property assigns a function to run on a click event on an element
let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };

// The [.firstChild] property grants access to the first child of that parent element
const first = document.body.firstChild; //Assign the first child of BODY to VAR FIRST
first.innerHTML = 'I am the child!'; //Change text of the first child of BODY
// The [.parentNode] grants access to the parent of that child
first.parentNode.innerHTML = 'I am the parent and my inner HTML changed!';//Change all text in BODY

/*
The [.addEventListener()] method > we can have a DOM element listen for a specific
event and execute a block of code when the event is detected.
The DOM element that listens for an event is called the EVENT TARGET and the block
of code that runs when the event happens is called the EVENT HANDLER.
*/
let eventTarget = document.getElementById('targetElement');
function eventHandlerFunction() {
    /* this block of code will run when click event happens */ };
eventTarget.addEventListener('click', eventHandlerFunction);
// this method takes two arguments: an event name in STRING and a HANDLER FUNCTION

/*
The [.removeEventListener()] method is used to reverse the [.addEventListener()] method.
This method stops the event target from “listening” for an event to fire when it no longer needs to.
*/
eventTarget.removeEventListener('click', eventHandlerFunction);
// This method also takes two arguments: an event name in STRING and a HANDLER FUNCTION
