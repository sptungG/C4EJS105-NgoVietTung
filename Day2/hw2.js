//3 a
for(let i = 0;i <= 6;i++){
    console.log(i);
}
//3 b
console.log("\n");
let n2 = prompt("(3b)Enter your number: ");
for(let i2 = 0; i2 <= n2; i2++){
    console.log(i2);
}
//3 c
console.log("\n");
let n3 = prompt("(3c)Enter your number ( > 3): ");
for(let i3 = 3; i3 <= Number(n3); i3++){
    console.log(i3);
}
//3 d
console.log("\n");
let c = prompt("(3d)Enter your first number (c1): ");
let n4 = prompt("(3d)Enter your second number (c2>c1): ");
for(let i4 = Number(c); i4 <= Number(n4); i4++){
    console.log(i4);
}
//3 e
console.log("\n");
let c1 = prompt("(3e)Enter your first number (c1): ");
let n5 = prompt("(3e)Enter your second number (c2 = c1+3): ");
for(let i5 = Number(c1); i5 <= Number(n5); i5+=3){
    console.log(i5);
}
//3 f
console.log("\n");
let c2 = prompt("(3f)Enter your first number: ");
let n6 = prompt("(3f)Enter your second number: ");
let s = prompt("(3f)Enter your step number: ");
for(let i6 = Number(c2); i6 <= Number(n6); i6+=Number(s)){
    console.log(i6);
}
//4 
let a = 1;
let na = prompt("(4)Enter your number: ");
    for(let ia = 1; ia <= na; ia++){
        a = a*ia;    
}
console.log(a);
//5
let age = prompt("(5)How old are you: ");
if(Number(age)<14){
    alert("You are not old enough to watch this content!");
}else{ alert("Enjoy!!");
}
//6
let x = prompt("(6)Enter your number: ");
if(Number(x) < 4.5 ){
    alert("Lower half of 9");
}else{ alert("Higher half of 9");
}
//7
let n7 = prompt("(7)Enter your number: ");
let x1 = prompt("Enter your number x:");
if(Number(x1) < Number(n7/2) ){
    alert("Lower half of "+n7);
}else{ alert("Higher half of "+n7);
}
//8
let num = prompt("(8)Enter your number: ");
if(Number(num % 2) == 0 ){
    alert(num+" is Even!");
}else{ alert(num + " is Odd!");
}
//9 a
let countH = 0,countL = 0;
for(let i9 = 1; i9 <= 6; i9++){
    if (Number(i9) <= 6/2){
        countL++;
    }else{
        countH++;
    }
}
console.log(countL+" L");
console.log(countH+" H");

//9 b
console.log("\n");
let countH1 = 0,countL1 = 0;
let n91 = prompt("(9b) Enter your number: ");
for(let i91 = 1; i91 <= n91; i91++){
    if (Number(i91) <= n91/2){
        countL1++
    }else{
        countH1++;
    }
}
console.log(countL1+" L");
console.log(countH1+" H");
//9 c
for (let i93 = 1; i93 <= 8; i93++) {
if(Number(i93 % 2) == 0 ){
    console.log("1");
}else{ console.log("0");
}
}
//9 d
let num94 = prompt("(9d)Enter your number: ");
for (let i94 = 1; i94 <= num94; i94++) {
    if(Number(i94 % 2) == 0 ){
        console.log("1");
    }else{ console.log("0");
    }
    }
// 10
let m = prompt("(10)Enter your weight(kg): ");
let h = prompt("Enter your height (cm):");
const bmi = m/((h/100)*(h/100));
alert("Your BMI is: "+bmi.toFixed(2));
if(Number(bmi) < 16 ){
    alert(" You are Severely underweight.");
}else if(Number(bmi) < 18.5 ){
    alert(" You are Underweight.");
}else if(Number(bmi) < 25 ){
    alert(" You are Normal.");
}else if(Number(bmi) < 30 ){
    alert(" You are Overweight.");
}else{
    alert("You are Obese");
}
//11
