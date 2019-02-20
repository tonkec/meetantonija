import './modules'

console.log(`app.js has loaded!`)
// grab an element
var myElement = document.querySelector("nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();
