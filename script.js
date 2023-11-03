// // --------------------------------- 1 ------------------------------
// document.write("1.Create a block of code that you can use several times. <br><br>")
// function name() {
//     document.write("Alishba zia")
// }
//  name();

// // --------------------------------- 2 ------------------------------
// document.write("<br><br>2. Write a function that displays current date & time in your browser. <br><br>")

// setInterval(() => {
    
// },1000);
   
//     function currentDate(){
//         var date = new Date();
//     document.write(`DATE : ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}       `)
//     console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
//     }
//     currentDate();
//     function currentTime(){
//       var time = new Date();
//     document.write(`, TIME : ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}<br>`);
//         console.log(`${time.getHours()}:${time.getMinutes()+1}:${time.getSeconds()}`);
//     }
//     currentTime();
   
// // --------------------------------- 3 ------------------------------
// document.write("<br><br>3. Write a function that takes first &amp; last name and then it greets the user using his full name. <br><br>")
// function greeting() {
//     var firstName = prompt("Enter your first name :");
//     var lastName = prompt("Enter your last name :");
//     document.write(`Hey! ${firstName} ${lastName}.`)
// }
// greeting();


// --------------------------------- 4 ------------------------------
// document.write("<br><br>4. Write a function that adds two numbers (input by user) and returns the sum of two numbers. <br><br>")

// function sum(){
//     var a = +prompt("Enter first number:");
//     var b = +prompt("Enter second number: ");
//     var sum = a+b;
//     document.write(`${a}+${b} = ${sum}`)
// }

// sum();

// --------------------------------- 5 ------------------------------
// document.write("<br><br>5. Calculator: Write a function that takes three arguments num1, num2 & operator &amp; compute the desired operation. Return and show the desired result in your browser. <br><br>")

// function caculator(){
//     var c = +prompt("Enter first number:");
//     var d = +prompt("Enter second number: ");
//     var operation = prompt("Enter what operation you want to perfom: (+,-,*,/).");
//     var result = c+d;
//     switch (operation) {
//         case "+":
//             result = c+d;
//             break;
//         case "-":
//             result = c-d;
//                 break;
//         case "*":
//             result = c*d;
//             break;
//         case "/":
//             result = c/d;
//             break;   
//         default:
//             break;
//     }
//     document.write(`${c} ${operation} ${d} = ${result}`)
// }
// caculator();

// // --------------------------------- 6 ------------------------------
// document.write("<br><br>6. Write a function that squares its argument. <br><br>")

// function squares() {
//     var squareNum = prompt("Enter number:");
//     document.write(`Square : ${squareNum*squareNum}`)
// }

// squares();

// // --------------------------------- 6 ------------------------------
// document.write("<br><br>7. Write a function that computes factorial of a number. <br><br>")

// function factorial() {
//     var fact = prompt("Enter number:");
//     var ind = 1;
//     for (let i = 1; i <= fact; i++) {
//      var factor = ind*=i;
//     }
//     document.write(`Factorial of ${fact} is ${factor}`)
// }
// factorial();

// --------------------------------- 8 ------------------------------
// document.write("<br><br>8. Write a function that take start and end number as inputs & display counting in your browser.<br><br>");
 
// function counting() {
//     var starting = prompt("Enter started number:");
//     var ending = prompt("Enter ending number");
//     for (let i = starting; i <= ending; i++) {
//         document.write( i ,"<br>");
        
//     }
// }
// counting()

// // --------------------------------- 9 ------------------------------
// document.write("<br><br>9. Write a nested function that computes hypotenuse of a right angle triangle.<br><br>");

// function hyp() {
//     var base = prompt("Base :");
//     var perp = prompt("Perpendicular :");
//      function squareHyp(a){
//          return a*a;
//      }
//      var hyp = squareHyp(base) + squareHyp(perp);
//      document.write(` Hypotenuse^2 = Base^2 + Perpendicular^2 = ${squareHyp(base)} + ${squareHyp(perp)} = ${hyp} = ${squareHyp(hyp)}`)
// }
// hyp();


// --------------------------------- 10 ------------------------------
document.write("<br><br>9. Write a nested function that computes hypotenuse of a right angle triangle.<br><br>");