/*
   SESSION BONUS
   Counting and Grouping
Obj thao tác với việc đếm dữ liệu, thay vì sử dụng thuật toán 
*/

// const  s = "afafaf abc cgc asd jjkk svsvs odododo";
// //Dieu kien dau => quet qua tung du lieu => duyet => dem
// const countData ={
// }

// for(let i = 0; i < s.length; i++){
// const c = s[i].toLowerCase();
// console.log(c);
// // //dài
// // if(c == 'b') countData[c]++;
// // else if(c == 'o') countData[c]++;
// //
// // countData[c]++;//=>vẵn p liệt kê
// //
// // ko can dieu kien dau
// // c => ton tai => tang
// // c chua ton tai => 1
// if(countData[c]) countData[c]++;
// else countData[c] = 1;
// }
// console.log(countData);


//Thuat toan => in
// count: mang thong tin so lan xuat hien -> dung trong viec khac

//Structure của count (2 kiểu)
       // Array
/*
[
    {
        value:'b',
        count: 1,
    }.
    {
        value: 'o',
        count: 4,
    }
] 
để có thể tăng đc chính xác đúng vị trí 'o' thì sẽ p duyệt
for => trùng => tăng lên
*/
      // Object
/*
dùng chữ cái làm properties
    { 
        'b': 0,
        'o': 4,
    }
'o' truy cập thẳng vào Obj và lấy số ra
Obj sẽ tự tìm kiếm 'o' 
*/

// //GROUPING
// const movies = [
//     {
//         tittle: 'The Dark',
//         rate: 8.5,
//         genre: 'Action',

//     },
//     {
//         tittle: 'Me before your',
//         rate: 8,
//         genre: 'Romance',
//     },
//     {
//         tittle: 'Attack on Titan',
//         rate: 9,
//         genre: 'Action',
//     },
//     {
//         tittle: 'Termination',
//         rate: 8.2,
//         genre: 'Action',
//     },
// ];
// //nhóm phim cùng thể loại, có biến lưu trữ thể loại
// // 1: Structure
// // từ thể loại => danh sách các phim 
// // genre => property
// // danh sách phim => value
// // 2:
// const movieByGroup = {
// "Action":[],
// "Romance":[],
// "Anime":[],
// }

// for(let i = 0; i < movies.length; i++){
//     const movie = movies[i];
//     console.log(movie);
//     const genres = movies[i].genre;
//     console.log(genres);
// movieByGroup[genres].push(movie);
// }
// console.log(movieByGroup);

