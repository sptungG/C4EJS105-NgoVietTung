// //1
// {
//     let movie = {
//         Name: "Killjoy",
//         Year: "2020",
//         Rate: 10, 
//     };

// console.log(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// console.log(movie);
// console.log(movie.Title);
// {
// let x = String(prompt("What your want to know?(Name,Rate,Year):"));
// if(x == null|| x == undefined ){
//   alert(x+" has not Supported yet");
// }else if(x.toLowerCase() == 'name'){
//     alert(movie['Name']);
// }else if(x.toLowerCase() == 'year'){
//     alert(movie['Year']);
// }else if(x.toLowerCase() == 'rate'){
//     alert(movie['Rate']);
// }
// }

// //3
// {
// //3.1
// movie.Rate = 8.7;
// console.log("\nToday Rate: " + movie.Rate);
// movie.Rate += 0.5;
// console.log("The newest Rate: " + movie.Rate);
// //3.2

// let x = String(prompt("What your want to Update?(Name,Rate,Year):"));
// if(x == null|| x == undefined ){
//   alert(x+" has not Supported yet");
// }else if(x.toLowerCase() == 'name'){
//     let y = String(prompt("Enter movie Name you wanna Update: "));
//     movie.Name = y;
//     alert(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }else if(x.toLowerCase() == 'year'){
//     let y = String(prompt("Enter movie Year you wanna Update: "));
//     movie.Year = y;
//     alert(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }else if(x.toLowerCase() == 'rate'){
//     let y = Number(prompt("Enter movie Rate you wanna Update: "));
//     movie.Rate = y;
//     alert(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }
// }

// //4
// {
// let x = String(prompt("What your want to Update?(Name,Rate,Year):"));
// if(x.toLowerCase() == 'name'){
//     let y = String(prompt("Enter movie Name you wanna Update: "));
//     movie.Name = y;
//     console.log(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }else if(x.toLowerCase() == 'year'){
//     let y = String(prompt("Enter movie Year you wanna Update: "));
//     movie.Year = y;
//     console.log(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }else if(x.toLowerCase() == 'rate'){
//     let y = Number(prompt("Enter movie Rate you wanna Update: "));
//     movie.Rate = y;
//     console.log(movie.Name+"--"+ movie.Rate  +"--"+ movie.Year);
// }else{
//     alert(`[${x}] has not exist in our data, we will add new`);
//     let y = String(prompt("Enter the new data: "));
//     movie[x] = y;
//     console.log(movie);
//   }
// }

// }

// {
// //let movie = [];
// // let n = Number(prompt("Enter the number of Movie: "));
// // for(let i = 0; i < n; i++){
// //     let  title = String(prompt(`Enter title[ ${i} ]:`));
// //     movie[i] = {
// //          Title: title[i],
// //          Year: year[i],
// //          Rate: rate[i],
// //      };
// // }

// //1
// let movie = [{
//     Title: "AAA",
//     Year: "2020",
//     Rate: 10,
// },{
//     Title: "BBB",
//     Year: "2021",
//     Rate: 9,
// },{
//     Title: "CCC",
//     Year: "2019",
//     Rate: 8,
// }];             
// //2
// console.log(movie[0]);
// //3
// console.log( "\n the title of the last movie: "+ movie[movie.length-1].Title +"\n ");
// //4
// for (let i = 0; i < movie.length; i++) {
//     console.log(movie[i]);
// }
// //5
// for (let j = 0; j < movie.length; j++) {
//     console.log(`-------------------
//     \nTitle:${movie[j].Title}
//     \nYear: ${movie[j].Year}
//     \nRate: ${movie[j].Rate}`);
// }
// //6
// movie[movie.length-1].Rate += 0.7;
// console.log(movie[movie.length-1]);
// }
// //6 Object containing array
// //1:Create an object named movie, with title, year and rate and characters.
// //The characters contain at least 3 characters of the movie
// {
//     //1
// let movie = {
//     Title: "AAAA",
//     Year: 2020,
//     Rate: 10,
//     Characters: ["iii","jjj","kkk"],
// };
// console.log(movie);
// let cNew = prompt("Enter the Character you wanna addd: ");
// movie.Characters.push(cNew);
// console.log(movie);

// //2
//     console.log(`-------------------
//     \nTitle:${movie.Title}
//     \nYear: ${movie.Year}
//     \nRate: ${movie.Rate}
//     \nCasts: ${movie.Characters}`);


// }
// // 7
// {
//     let movie = [{
//         Title: "AAA",
//         Year: "2020",
//         Rate: 10,
//         Casts: ["ii","iii","iiii"],
//     },{
//         Title: "BBB",
//         Year: "2021",
//         Rate: 9,
//         Casts: ["jjjj","jjj","jj"],
//     },{
//         Title: "CCC",
//         Year: "2019",
//         Rate: 8,
//         Casts: ["kk","kkk","kkk"],
//     }];
//     console.log(movie);
//     for (let i = 0; i < movie.length; i++) {
//         console.log(`-------------------
//         \nTitle:${movie[i].Title}
//         \nYear: ${movie[i].Year}
//         \nRate: ${movie[i].Rate}
//         \nCasts: ${movie[i].Casts}`);
//     }             
// }