function ex11(){
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(()=>{ resolve("Promise is da best")} , 5000);
    }); 
    myPromise.then(
            function(success) {
                alert(success);
                // code when Promise resolve
            },
            // function(error) {
            //     alert("Error");
            //     // code when Promise reject
            // }
    )
    console.log(myPromise); //Promise status
}
// ex11();
function ex12(){
    function wait(ms) {
        return new Promise(r => setTimeout(r, ms))  
    }
    async function main(){
        console.log("ONE");
        await wait(500);
        console.log("is da best");
    };
    main();
}
// ex12();

function ex13(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("Promise is da best");
    });
    myPromise.then(
        function(value){
            alert(value);
        }
    )
    console.log(myPromise); //Promise status
}
// ex13();


// EX2:
function ex2(){
    const fetchPromise = fetch("https://sheetdb.io/api/v1/58f61be4dda40");

    fetchPromise
    .then(response => {
        console.log('Connected');
        console.log(response);    
        console.log(response.json());
    })
}
// ex2();
// Ex3:
https://sheetdb.io/api/v1/58f61be4dda40
// Ex4:
function ex4(){
    function randomNum(){
        let randomNum = Math.random()* 10;
        console.log(randomNum);
        return(randomNum);
    }
    const x = randomNum();
    if(x < 0) {
        console.log('Failed: the number is smaller than 0');
    }else if(x > 10){
        console.log('Failed: the number is bigger than 10');
    }else{
        console.log('Passed, bravo');
    }
}
// ex4();
// Ex5:
function ex5(){
    function doRandom(a, b){
        let randomNum1 = Math.random()*(b - a )+ a;
        console.log(randomNum1);
        return randomNum1;
    }
    const x = doRandom(4, 16);
    if(x < 4){
        console.log('Failed');
    }else if(x > 16){
        console.log('Failed');
    }else{
        console.log('Passed, bravo');
    };
}
// ex5();
// Ex6:
function ex6(){
    function caDistance(x1, y1, x2, y2){
        let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
        console.log(distance);
        return distance;
    }
    const a = caDistance(3 , 10 , 0 , 6);
    if(a !== 5){
        console.log('Failed: the calculation is wrong');
    }else{
        console.log('Passed, bravo');
    }
}
// Ex7
function ex7(){// Tham khao Vũ Đức Nhật Minh
    async function getData() {
        let fetchPromise = await fetch('http://quotes.rest/qod.json');
        return fetchPromise.json();
    }
    getData().then(
        result => {
            console.log(result);
            let quoteText = result.contents.quotes[0].quote;
            let quoteAuthor = result.contents.quotes[0].author;
            document.getElementById("quote").insertAdjacentHTML("beforeend", quoteText);
            document.getElementById("author").insertAdjacentHTML("beforeend", `-${quoteAuthor}-`);
        }
    )
}
// ex7();
function ex8() {// Tham khao Vũ Đức Nhật Minh
    
}
ex8();
