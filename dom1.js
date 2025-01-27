// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from js";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);

// // ! dynamic elements

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_640.jpg";
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");
// // console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText="Heading";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");

let gen = document.getElementById("gender");
//console.log(gen);

form.addEventListener("submit", event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    //console.log(un , up);
    let ele = ""

    for(let i=0;i<gen.clientHeight;i++){
        
    }
})