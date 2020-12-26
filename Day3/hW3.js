
//1    Swap
//C1: dùng biến trung gian:
{
let a = prompt("Enter your first number: ");
let b = prompt("Enter your second number: ");
alert(`(c1)your numbers: ${a} ${b}`);
let temp = a;
a= b;
b =temp;
alert(`(c1)After Swapping: ${a} ${b}`);
}
//C2: dùng toán tử 
{
let a = prompt("Enter your first number: ");
let b = prompt("Enter your second number: ");
alert(`\n(c2)your numbers: ${a} ${b}`);

a = a ^ b;
b = a ^ b;
a = a ^ b;
alert(`(c2)After Swapping: ${a} ${b}`);
}
//2    Split String into Array
{
const str = "! What the heck !";
let res = str.split(" ");
alert(res);
}
//  3
//In JavaScript, the spread operator (three dots): … can be useful in several tasks.
// Of these tasks is to log (print out) an array without using loops.
{
const arr = ['AbC', 'xYz', 'xyz', 'abc'];
console.log(...arr);
}

//4    simulate a clothes shop
{
let running = 1; 
let arr = ["T-shirt", "Pant", "Jeans", "Cat"];
while(running) { 
    let sel = String(prompt("Hi there, Welcome to my C9 shop, what do you want?(C,R,U,D,Q)"));
    switch (sel.toLowerCase()) {
        case 'c':
            let newItem = prompt("Enter a Item you want to addd: ");
                arr.push(newItem);
            alert("Done");
            running == 0;
            break;
        case 'r':
            alert("The current items are: "+arr);
            running == 0;
            break;
        case 'u':
            let i = Number(prompt("Enter your position of Item, you choose for changing: "));
            arr[i] = prompt("Enter your ["+i+"]th ***** Item: ");
            alert("Done");
            running == 0;
            break;
        case 'd':
            let j = Number(prompt("Enter the Item's position you want to Delete: "));
            arr.splice( j , 1);
            alert("Done");
            running == 0;
            break;
        case 'q':{
            alert("Thank you for choosing my services!See ya..");
            running = 0;
        break;}

        default:
            alert("This command is not supported");
            running == 0;
            break;
    }

}
}

// 5  calculate the sum
{
let arr = [ ];
let sum = 0;
arr = prompt("Enter your Number array, separated by (,): ");
let arrNum = arr.split(",");
for (let i = 0; i < arrNum.length; i++) {
    sum += parseInt(arrNum[i]);
}
alert(`your array Sum: ${sum}`);
}
//6   find the smallest number
{
let arr = [ ];
arr = prompt("Enter your Number array, separated by (,): ");
let arrNum = arr.split(",");
let min = arrNum[0];

for (let i = 1; i < arrNum.length; i++) {
    if(min > arrNum[i])  {
        min = arrNum[i];
    }
}
alert(`your array Min: ${min}`);
}
// 7   find index by number
{
let arr = [ ];
arr = prompt("Enter your Number array, separated by ( , ): ");
let arrNum = arr.split(",");
let numF = Number(prompt("enter your number you wanna find: "));
function Search(arr, l, r, x) 
{ 
     if (r < l) return -1; 
     if (arr[l] == x) return l; 
     if (arr[r] == x) return r; 
     return Search(arr, l+1, r-1, x); 
} 
let index = Search(arrNum, 0, arrNum.length, numF);
if(index != -1) alert(`${numF} is at ${index}th in array.`);
else alert(`${numF} is Not in array.`);

// let isFound = false;
// for(let i = 0;i < arrNum.length;i++){
//     if(numF == arrNum[i]){
//         alert(`${numF} is Found in array at index ${i+1}`);
//         isFound = true;
//         break;
//     }
// }
// if(!isFound){
//     alert(`${numF} is not Found`);
// }
}

//8 SHEEP 
{
//8.1    
// let flockSize = [];
// flockSize = prompt("Enter my flock size, separated by ( , ): ");
// let flockSize1 = flockSize.split(",");
const flockSize1 = [5,7,300,90,24,50,75];
    console.log(`Here is my sheep sizes:\n ${flockSize1}`);
//8.2
    let maxSize = Math.max(...flockSize1); 
    console.log(`\nNow my biggest sheep has size ${maxSize}, let's shave it`);
//8.3
    let sheepIndex = flockSize1.indexOf(maxSize);
    flockSize1[sheepIndex] = 8; //  return to the default size,8
    console.log("\nAfter shearing, here is my flock");
    console.log(...flockSize1);
//8.4 8.5
    let monthGrow = prompt("Enter the sheep growing Months, as long as you want:");
    for(let i = 0; i < monthGrow; i++) {
    console.log(`\n MONTH: ${i+1}`);
    console.log("One month has passed, my sheeps have grown, here are their sizes");
    for(let i = 0; i < flockSizes.length; i++) {
        flockSize1[i] = Number(flockSize1[i]) + 50;
        }
    console.log(...flockSize1);
    }
//8.6
    let totalSize = 0, currentPrice = 20;//$ 
    for(let i = 0; i < flockSize1.length; i++) {
        totalSize += flockSize1[i];
    }
    console.log(`\n My flock has size in total: ${totalSize}`);
    console.log(`I would get ${totalSize} * ${currentPrice}$ = ${totalSize*currentPrice}$`);
}
// 9 Turtle
// 10 Create a new array containing the names, each surrounded with <>
{
    let arrName = prompt("Enter a sequence of names, separated by ( , ): ");
    let Arr = arrName.split(",");

    // C1: push array trung gian
    // let tempArr = [];
    // for (let i = 0; i < Arr.length; i++) {
    //     let tempVar = `<${Arr[i]}>`;
    //     tempArr.push(tempVar);
    // }
    // alert(`${Arr} => ${tempArr}`);

    // C2: map
    let map1 = Arr.map(x => `<${x}>`);
    alert(`${Arr} => ${map1}`);
}
//11 Create a new array containing only the odd Numbers
{
    let arr = [ ];
    arr = prompt("Enter your Number array, separated by ( , ): ");
    let arrNum = arr.split(",");
   
    // C1: push array trung gian
    // let tempArr = [];
    // for (let i = 0; i < arrNum.length; i++) {
    //     let checkNum = Number(arrNum[i]);
    //  if(checkNum %2 != 0) tempArr.push(checkNum);
    // }
    // alert(`${arrNum} => Odd: ${tempArr}`);

    // C2: filter
    let res = arrNum.filter(x => Number(x) % 2 != 0);
    alert(`${arrNum} => Odd: ${res}`);
}