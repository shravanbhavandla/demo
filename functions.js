// // // // // // // // // // function isPalindrome(str)
// // // // // // // // // // {
// // // // // // // // // //     let revStr = "";
// // // // // // // // // //     for(let i =str.length-1;i>=0;i--){
// // // // // // // // // //         revStr += str[i];
// // // // // // // // // //     }
// // // // // // // // // //     if(str ==revStr){
// // // // // // // // // //         console.log("Palindrome");
// // // // // // // // // //     }else{
// // // // // // // // // //         console.log("Not a palindrome");
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // isPalindrome("sir");
// // // // // // // // // // isPlaindrome("madam");
// // // // // // // // // // isPalindrome("malayam");


// // // // // // // // // function onemoretime(){
// // // // // // // // //     console.log("not undertood tell me one more time");

// // // // // // // // // }
// // // // // // // // // // ananymous function
// // // // // // // // // function(){

// // // // // // // // // }

// // // // // // // // //function  expression 
// // // // // // // // let  x =function(){
// // // // // // // //     console.log("Function expression";)
// // // // // // // // }

// // // // // // // // !iife
// // // // // // // {
// // // // // // //     function(){
// // // // // // //         console.log("Hello";)
// // // // /     }
// // // // }();

// // // // // // // ! arro
// // // // // // function demo(){
// // // // // //     console.log("Hello");
// // // // // // }
// // // // // // demo();

// // // // // let x=_=console.log("hi");
// // // // //         console.log("hello");
// // // // //         console.log("bye");

// // // // // )

// // // // // return keyward
// // // // function add(a,b){
// // // //     a+b;
// // // // }
// // // // let x = add(5,5);
// // // // console.log(x);

// // // // let x = (a,b) =< a+b; // implicit 
// // // // console.log(x(10,30));

// // // let x = (a,b) => a+b; // explicit
// // // console.log(x(10,30));

// // // higher order function

// // function hof(a){
// //     return a;
// // };

// // let x = hof(funtion(){return "This is call back function"});
// // console.log(x);

// function add(callback){
//     return callback(5,3);
// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// t users = ["Navya", "shravan", "kumar", "bhavandla", "vishnu"]);
//     let x = users.map(user)=>{
//         return user;
//     };
//     console.log(x);
//     ley x = users.foreach(user)=>{
//         return (user);
//     });
//     console.log(x);


// // users.foreach((user)=>{
// //     console.log(user);
// // });

// var a=10;
// var b=20;
// function x(){
//     var user = "shravan";
//     let company = "Amazon";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);

//     console.log(a , b);
// }
// x();