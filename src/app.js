import "../styles/style.css";
import "./skewed-box.js"

const divElement = document.createElement("div");


const headingElement = document.createElement("h1");
headingElement.innerText = "ini kontent dalam shadow DOM";

const shadowRoot = divElement.attachShadow({mode:"open"});

shadowRoot.appendChild(headingElement);

document.body.appendChild(divElement);

console.log("test125");