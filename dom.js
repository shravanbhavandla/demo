// // // // // // !document.getElementById("");

// // // // // let element = document.getElementById("demo");
// // // // // element.innertext = "DOM";
// // // // // console.log(element);

// // // // // let div = document.getElementById("test");
// // // // // // div.innerText = "<h1>header</h1>"
// // // // // div.innerHTML = "<h1>Header</h1>"
// // // // // console.log(div);

// // // // // !
// // // // let ele = document.getElementsByClassName("test");
// // // // console.log(ele);
// // // // console.log(Array.isArray(ele));
// // // // ele[0].computedStyleMap.backgroundColor="yellow"
// // // // // ! spread operator :- it is used to takeout each and every value from the original array and store it in one mnore array
// // // // // ! syntax :- [...variable]
// // // // let x = [...ele];
// // // // console.log(x , Array.isArray(x));
// // // // x.map((element)=>{
// // // //     // console.log(elements);
// // // //     element.computedStyleMap.backgroundColor="teal";
// // // // })

// // // // !

// // // let ele = document.getElementsByTagName("div");
// // // console.log(ele)

// // // ! 
// // let ele = document.getElementsByName("username");
// // // console.log(ele);

// // let ele = document.querySelector("#demo");
// // console.log(ele);

// //let ele = document.querySelector(".test");
// // console.log(ele);

// // let ele= document.querySelectorAll(".test");
// // // console.log(ele);
// // [...ele].map(element=>{
// //     console.log(element.innerText);
// // })

// // ! events
// let btn = document.getElementById("btn");
// // btn.addEventListener("event" , callbackfn)
// btn.addEventListener("click",()=>{
//     console.log("button is clicked 2 times");
// })

// let btn = document.getElementById("btn");

//!

let bgcolor = document.querySelectorAll(".bgcolor");
[...bgcolor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        //console.log(element.innertext);
        element.computedStyleMap.backgroundColor=element.innerText;
    });

    element.addEventListener("mouseleave",()=>{
        element.computedStyleMap.backgroundColor="transparent";
    })
})