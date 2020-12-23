
//Init
let movieTitle = ['Sage','Skyeohh','Killjoy','Brimstone']; 
console.log(movieTitle + "\n");
//Create
let newMovie = prompt("Enter your favorite movie you want to addd: ");
movieTitle.push(newMovie);
console.log(movieTitle + "\n");
//Read
let i = prompt("Enter your Movie's position: ");
console.log(movieTitle[i] + "\n");
//Update
{
movieTitle[1] = prompt("Enter your first favorite Movie, you wanna change: ");
console.log(movieTitle + "\n");
let i = Number(prompt("Enter your position of Movie, you choose for changing: "));
movieTitle[i] = prompt("Enter your "+i+"***** Movie: ");
console.log(movieTitle + "\n");
}
//Delete
{
let i = Number(prompt("Enter the Movie's position you want to Delete: "));
movieTitle.splice( i , 1);
console.log(movieTitle + "\n");
let n = Number(prompt("Enter the Number of Movies you want to Delete: "));
let j = Number(prompt("Enter the Movie's position you want to Delete: "));
movieTitle.splice(j, n);
console.log(movieTitle + "\n");
}

//Read All
for (let i1 = 0; i1 <= movieTitle.length; i1++) {
    console.log(movieTitle[i1]);
}
for (let i2 = 0; i2 <= Number((movieTitle.length)/2); i2++) {
    console.log(movieTitle[i5]);
}
for (let i3 = 0; i3 <= movieTitle.length; i3++) {
    console.log(i3+". "+movieTitle[i3]);
}
//Update all

for (let i4 = 0; i4 <= movieTitle.length; i4++) {
    movieTitle[i4] = movieTitle[i4].toLowerCase();
}
console.log(movieTitle + "\n");

//While in Array
let userName = prompt('Enter your User Name: ');
while(userName.length > 15){
        alert("Your Username is too long. Plz, re-enter a new username.");
        userName = prompt('Enter your User Name: ');
        
}
alert("Good Name, Enjoy!!!");
alert("Your Username: "+userName);
//Multiple choice
alert("QUIZ:How many legs does a spider have?\n 1. None\n 2. 4 legs\n 3. 8 legs\n 4. 12 legs");
let   ans = Number(prompt("--->Your choice: "));
while(ans != 3){
    // if(ans){
    //     alert("HAHAAHAHA,Try type a Number");
    //     ans = prompt("--->Your choice: ");
    // }
        alert("Good luck next time!");
        ans = prompt("--->Your choice: ");
}
alert("Bravo, you are correct!");

//Additional
{
let arr = [];
arr = prompt("Enter your Number array, separated by ( , ): ");
let arrNum = arr.split(",");
let n = arrNum.length;
alert("Your array: "+arr);
//1
let arr1 = [];
let tmp;
for (let i = 0; i < n-1; i++) {
    for(let j = i + 1; j < n; j++){
    if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
}
for(let i1 = 0; i1 < n; i1++){ 
        arr1[i1] = arr[i1]; 
     }
alert("Increasing Array: "+arr1);     
//2
let oddArr = [],evenArr = [];
for (let i2 = 0; i2 < arrNum.length; i2++) {
    let checkNum = Number(arrNum[i2]);
     if(checkNum %2 != 0) oddArr.push(checkNum);
     else evenArr.push(checkNum);
    }
alert(`${arrNum} \n => Odd: ${oddArr} \n => Even: ${evenArr}`);
//3
// function check(array){
// for (let i3 = 0; i3 < array.length - 1; i3++) {
//          if(array[i3] != NULL){
// 			for(let j3 = i3 + 1; j3 < array.length ; j3++){
// 				if(array[i3] == array[j3])	array[j3] = NULL;
//                 }
//             }
// }
// }
// let checkArr = check(arrNum);
// alert(`Odd: ${arrNum} \n => ${checkArr}`);
}