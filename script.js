
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// changer la couleur d'une div a click
document.querySelector("#blue").addEventListener("click", () => {
	document.querySelector("#change").style.backgroundColor = "blue";
});
document.querySelector("#red").addEventListener("click", () => {
	document.querySelector("#change").style.backgroundColor = "red";
});
document.querySelector("#green").addEventListener("click", () => {
	document.querySelector("#change").style.backgroundColor = "green";
});


console.log("Hey look in your browser console. It works!");

console.log("Hey look in your browser console. It works!");
