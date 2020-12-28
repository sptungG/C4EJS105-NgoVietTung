
// {
// const product = {
//     name: "iPhone 12 ProMax",
//     price: "1700",
//     brand: "Apple",
//     color: "Ocean",
// };
// for( let x in product){
//     console.log(x);
// }
// //1.1 
// /*
// Cú pháp for...in lặp qua các đối tượng được đếm, theo một thứ tự tùy ý.
// Trên mỗi lần lặp, một giá trị của một thuộc tính khác nhau được gán cho biến " x ".
//   biến có thể được khai báo với const, let hoặc var.
// Vòng lặp này chỉ log các thuộc tính(properties) được đếm của product, theo thứ tự được đưa vào
//   Nó ko log các phần tử(elements).
// //1.2 Use the for loop to print/log out the following output
// for( let i in product){
//     console.log(`${i}: ${product[i]}`);
// }
// }
// //2 destructuring object 
// {
//     const task = {
//         subject: 'Implement login feature',
//         createdBy: 'Hoang Ngoc Duc',
//         assignTo: 'Nguyen Phuong Nam',
//         dueDate: '2019-10-08T18:00:24+0000',
//         expectedHours: 0.5,
//     };
//     var {subject, dueDate, assignTo, ...others } = task;
//     console.log(subject);
//     console.log(dueDate);
//     console.log(assignTo);
//     console.log(others);
// }

// //3 
// //4 Initialize an object to represent a dictionary, with properties as keyword and values as explanation
// {
// //4.1
    
//     let dictionary = {
//         debug: "The process of figuring out why your program has a certain error and how to fix it",
//         done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//         defect: "The formal word for ‘error’",
//         pm: "The short version  of Project Manager, the person in charge of the final result of a project",
//         "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
//     };
//     let running = 1;
//     while(running){
//     let word = String(prompt("Enter the word you wanna know more: "));
    
//     if(dictionary[word] !== undefined ){
//         alert(`${word}: ${dictionary[word]}`);
//         running == 0;
//         break;
//     }else if(dictionary[word] == null ){
//         alert(`${word}: Not found.`);
//         running == 0;
//         break;
//     }else{
//         alert("We could not find your word: "+word);
//     //4.2
//     alert("Hi there, this is a dev dictionary");
//     let meaning = String(prompt(`We could find your word: ${word}, leave your explanation:`));
//            dictionary[word] = meaning;
//            alert("Done");
//            running == 0;
//     }
//     }
// }

// //5 Initialize a variable named products, containing an array of products,
// // each product has a name, price, brand, category, and color
// {
//  let product = [{
//      name: "Xiaomi charger",
//      brand: "xiaomi",
//      price: 428,
//      color: "while",
//      category: "Charger",
//  },{
//     name: "VSmart Active 1",
//     brand: "VSmart",
//     price: 5487,
//     color: "Black",
//     category: "Phone",
//  },{
//     name: "IPhone X",
//     brand: "Apple",
//     price: 21490,
//     color: "Gray",
//     category: "Phone",
//  },{
//     name: "Samsung Galaxy A9",
//     brand: "Samsung",
//     price: 8490,
//     color: "Blue",
//     category: "Phone",
//  },];
//  alert(product.join('\n'));
// //5.1
// console.log("5.1 \n");
// for(let i1 = 0; i1 < product.length; i1++){
//     console.log(`#${i1+1}-------------------------
//         \n Name:  ${product[i1].name}
//         \n Price: ${product[i1].price}`);
//         } 
// //5.2
// console.log("5.2 \n");
// let findNum = Number(prompt("Enter product's position you want know more: "));
//     if(findNum < product.length){
//     let i2 = findNum - 1;
//         alert(`#${i2+1}-------------------------
//             \n Name:  ${product[i2].name}
//             \n Brand: ${product[i2].brand}
//             \n Color: ${product[i2].color}
//             \n Price: ${product[i2].price}
//             \n Category: ${product[i2].category}`);
//             }       
// //5.3
// console.log("5.3 \n");
// let findCate = String(prompt("Enter the Category: "));
//     for(let i3 = 0; i3 < product.length; i3++){
//     if(findCate == product[i3].category.toLowerCase()){
//         alert(`#${i3+1}-------------------------
//         \n Name:  ${product[i3].name}
//         \n Price: ${product[i3].price}`);
//     }
//     }
// //5.4
// console.log("5.4 \n");
//             product[0]['providers'] = ['Phukienzero','Dientuccc'];
//             product[1]['providers'] = ['Tgdd','DDgg','VHstore'];
//             product[2]['providers'] = 'Tgdd';
//             product[3]['providers'] = 'Tgdd';
// for(let i4 = 0; i4 < product.length; i4++){
//     console.log(`#${i4+1}-------------------------
//         \n Name:  ${product[i4].name}
//         \n Price: ${product[i4].price}
//         \n Providers: ${product[i4].providers}`);
//         }   
// //5.5
// console.log("5.5 \n");    
// let Providers = String(prompt("Enter the provider:"));
//     for(let i5 = 0; i5 < product.length; i5++){
//         if(Providers == product[i5].providers){
//             console.log(`#${i5+1}-------------------------
//                 \n Name:  ${product[i5].name}
//                 \n Price: ${product[i5].price}
//                 \n Providers: ${product[i5].providers}`);
//         }
//     }

// }

// //6
// {
// let tasks = [{
//                 course: 'HTML',
//                 complete: false,
//             },{
//                course: 'CSS',
//                complete: false,
//             },{
//                 course: 'Basics of JavaScript',
//                 complete: false,
//             },{
//                 course: 'Node Package Manager (nmp)',
//                 complete: false,
//             },{
//                 course: 'Git',
//                 complete: false,
//             },];
//     console.log("Hi there, this is your learning tasks to Front-end developer career.");        
//     function output() {
//         for(let i = 0; i < tasks.length; i++){
//             console.log(`#${i+1}-------------------------
//                 \n Course:   ${tasks[i].course}
//                 \n Complete: ${tasks[i].complete}`);
//                 }   
//     }
//     console.log("6.1 \n");
//     output();        
//     let running = 1;
//     while (running) {
//         let sel = String(prompt("Enter your choice:(New, Delete, Update, Complete, Q) "));
//         switch (sel.toLowerCase()) {
//             case 'new':{
//                  let newCourse = String(prompt("Enter new task: "));
//                  console.log("----------------------\n");
//                  tasks.push({course: newCourse, complete: false});
//                  alert(`New tasks!:
//                  \n #${tasks.length + 1}-----------
//                  \n Course: ${newCourse}. 
//                  \n Complete: ${false}.`);
//                 break;}
//             case 'delete':{
//                 let position = Number(prompt("Enter the position you wanna Delete: "));
//                 alert(`This is the task will be Deleted:
//                 \n Course: ${tasks[position -1].course} 
//                 \n Complete: ${tasks[position -1].complete}
//                 \n [Ok] to Delete it :>>`);
//                 tasks.slice(position, 1);
//                 alert("Done");
//                 console.log("----------------------\n");
//                 break;}
//             case 'update':{
//                 console.log("----------------------\n");
//                 let position = Number(prompt("Enter the position you wanna Update "));
//                 let newTitle = prompt("Enter new Title: ");
//                 tasks[position].course = newTitle; 
//                 alert(`This is the New task:
//                        \n Course: ${tasks[position].course} 
//                        \n Complete: ${tasks[position].complete}`);
//                 alert("Done");       
//                 break;}
//             case 'complete':{
//                 console.log("----------------------\n");
//                 let position = Number(prompt("Enter the position you wanna Complete "));
//                 tasks[position].complete = true;
//                 alert(`Congrats, You completed it:
//                 \n Course: ${tasks[position].course} 
//                 \n Complete: ${tasks[position].complete}`);
//                 alert("Done");
//                 break;}
//             case 'q':
//                 alert("Thank you for choosing my services. See ya");
//                 running = 0;
//                 break;    
//             default:
//                 alert("The command has not been supported yet.Try again!")
//                 break;
//         }
//     }
// }

// //7 TURTLE
// //8
// //9
// //10
// //11
// //12

//16
/*
There are at least two ways to delete a property-value pair from an object,
 the first one is the one you learned in class, to use delete keyword (which you already learned)..
 The second one is to create a new object without the property-value pair and just use the new object from then
*/
{
    console.log("\n\t\t16=========================16===========================\n");
let oldData = {
    firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo'
    },
    noddle: {
        price: 20,
        vnName: 'My tom chanh'
    },
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin'
    },
    };

console.log(oldData);
delete oldData.noddle;
console.log(oldData);
}