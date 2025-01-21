// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// }, 5000)
// console.log(40);
// console.log(50);
// setInterval(()=>{
//     document.writeln("MRU")
// }, 1500)

//!Promise
let p1 = new Promise((resolve , pending) => {});
// console.log(p1);

let p2 = new Promise((resolve , pending) => {
    resolve("success");
});
// console.log(p2);
p2.then((response) =>
    {
        console.log(respone);
    }).catch((error)=>{
    console.log(error);
    }).finally(()=>console.log("finally printing for both"))

let p3 = new Promise((resolve , pending) => {
    reject("Failures");
});
// console.log(p3);
