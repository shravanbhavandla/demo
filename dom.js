// !document.getElementById("");

let element = document.getElementById("demo");
element.innertext = "DOM";
console.log(element);

let div = document.getElementById("test");
// div.innerText = "<h1>header</h1>"
div.innerHTML = "<h1>Header</h1>"
console.log(div);