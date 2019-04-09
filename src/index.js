import App from "./components/App";
import "normalize.css";
import "styles/index.css";

// Get the root element and create a new App componenet
const rootElement = document.getElementById("root");
new App(rootElement);

//an event to trigger when sccrolled down
window.addEventListener('scroll', function() {
  let header = document.getElementsByClassName('header')[0];
  let content = document.getElementsByClassName('content')[0];
  header.style.height = "50px";
  header.style.transition = "transform .5s";
  content.style.padding = "180px 100px 100px 100px";
}, true);