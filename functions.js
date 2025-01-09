// // // // // // // function isPalindrome(str)
// // // // // // // {
// // // // // // //     let revStr = "";
// // // // // // //     for(let i =str.length-1;i>=0;i--){
// // // // // // //         revStr += str[i];
// // // // // // //     }
// // // // // // //     if(str ==revStr){
// // // // // // //         console.log("Palindrome");
// // // // // // //     }else{
// // // // // // //         console.log("Not a palindrome");
// // // // // // //     }
// // // // // // // }

// // // // // // // isPalindrome("sir");
// // // // // // // isPlaindrome("madam");
// // // // // // // isPalindrome("malayam");


// // // // // // function onemoretime(){
// // // // // //     console.log("not undertood tell me one more time");

// // // // // // }
// // // // // // // ananymous function
// // // // // // function(){

// // // // // // }

// // // // // //function  expression 
// // // // // let  x =function(){
// // // // //     console.log("Function expression";)
// // // // // }

// // // // // !iife
// // // // {
// // // //     function(){
// // // //         console.log("Hello";)
// /     }
// }();

// // // // ! arro
// // // function demo(){
// // //     console.log("Hello");
// // // }
// // // demo();

// // let x=_=console.log("hi");
// //         console.log("hello");
// //         console.log("bye");

// // )

// // return keyward
// function add(a,b){
//     a+b;
// }
// let x = add(5,5);
// console.log(x);

// let x = (a,b) =< a+b; // implicit 
// console.log(x(10,30));

let x = (a,b) => a+b; // explicit
console.log(x(10,30));