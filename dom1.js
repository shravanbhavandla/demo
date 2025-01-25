let x = document.createElement("h1");
x.innerText = "Dynamic creation of html element from js";
// x.id ="demo"
x.setAttribute("id" , "demo");
console.log(x);

document.body.appendChild(x);

let image = document.createElement("img");
image.src = "./3606208.jpg";
console.log(image);

document.body.appendChild(image);