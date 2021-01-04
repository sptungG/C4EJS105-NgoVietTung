
// //1.1 create a random number from 0 to 1
// {
//     let ranN = Math.random();
//     alert("Your random Number: "+ranN.toFixed(2));
// }
// //1.2  randomly pick an item from an array
// {
// let card = ['J','Q','K','A','Joker'];
// let ranCard = card[Math.floor(Math.random()*card.length)];
// console.log("\n Your Random: "+ranCard);
// }
// 1.3 1.4 1.5 1.6 1.7// tham khao nhat minh
// {
//     //1.3 
//     /*
//     Create a data structure to represent a list of quizzes,
//     each quiz contains a question, 4 choices and rightChoice.
//     Create it then ask your mentor to review your data 
//     before moving to the next exercise
//     */
//    //1.4
//    /*
//    Write a script to randomly select a quiz from the list above,
//    show them to users
//     */
//    //1.5 Let users answer then let them know whether they are correct
//    //1.6 
//    /*
//     Let it run continuously,
//     make sure each question only appears once,
//     if the questions has run out,
//     let users know 
//     (note that the result showing to users are omitted in the figure below)
//    */
//   //1.7 Calculate the total points of users
//   //1.8 (Optional) Shuffle the choices each time you show users the quiz
//     const quizzes = [
//     q1 = {
//         question: ('Which fictional detective lived at 221b Baker Street?'),
//         choices: [
//             'Watson',
//             'Sam Spade',
//             'Scubidu',
//             'Sherlock Holmes',],
//         c1: false,
//         c2: false,
//         c3: false,
//         c4: true,
//     },
//     q2 = {
//         question: ('What sweet food made by bees using nectar from flowers?'),
//         choices: [
//             'Bread',
//             'Honey',
//             'Sugar',
//             'Potent',],
//         c1: false,
//         c2: true,
//         c3: false,
//         c4: false,
//     },
//     q3 = {
//         question: ('How many legs do an octopus has?'),
//         choices: [
//             '4 legs',
//             'no legs',
//             '8 legs',
//             '2 legs'],
//         c1: false,
//         c2: false,
//         c3: false,
//         c4: true,
//     }
// ];
// let originalQLength = quizzes.length;
// let usrPoint = 0;
// while (true) {
//     if (quizzes.length == 0) {
//         alert('We\'re out of quizzes, unfortunately');
//         break;
//     } else {
//         let randomGen = Math.floor(Math.random() * ((quizzes.length) - 1));
//         while (true) {
//         let answer = Number(prompt(`${quizzes[randomGen].question}
//                       \n1. ${quizzes[randomGen].choices[0]}
//                       \n2. ${quizzes[randomGen].choices[1]}
//                       \n3. ${quizzes[randomGen].choices[2]}
//                       \n4. ${quizzes[randomGen].choices[3]}`));
//         if (quizzes[randomGen].choices[answer - 1] == undefined || quizzes[randomGen].choices[answer - 1] == null) {
//                 alert('[ERROR]Invalid answer');
//             } else if (quizzes[randomGen][`c${answer}`] == true) {
//                 alert('Congratulation!');
//                 usrPoint++;
//                 break;
//             } else {
//                 alert('Sorry, You lose!');
//                 break;
//             }
//         }
//         quizzes.splice(randomGen, 1);
//     }
// }
// alert(`Your final score is: ${usrPoint}/${originalQLength}`);
// }


//2.1  count the occurrences of the words
{
let keyWork = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey','love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let list = {};
for(let index of keyWork){
    if(list[index]){
        list[index]++;
    }else{
        list[index] = 1;
    }
}
console.log(list);
}
//2.2  tham khao Minh Tuan
{
const inventory = [
    {
        name:"HP Envy 13ap",
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name:"Dell XPS 9370",
        price: 30000,
        brand:'Dell',
        quantity: 1,
    },
    {
        name:'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
// count the generations of a certain brand in the inventory
let inventoryByBrand = {};
for(let laptop of inventory)
{
    if(inventoryByBrand[laptop.brand])
        inventoryByBrand[laptop.brand].push(laptop);
    else
    {
        inventoryByBrand[laptop.brand] = [];
        inventoryByBrand[laptop.brand].push(laptop);
    }
}
console.log(inventoryByBrand);
// Add more details in the statistics
let option = prompt("Which brand you wanna know more? HP/Asus/Dell?");
let generations = '';
let stt = 0;
for(let laptop of inventoryByBrand[option])
{
    console.log(laptop.name, laptop.price);
    generations += "\n" + laptop.name;
    stt += laptop.price * laptop.quantity;
}
alert(`There are ${inventoryByBrand[option].length} generations of ${option} in inventory:
      \n${generations}\n
      \n With total value: ${stt}`);
}