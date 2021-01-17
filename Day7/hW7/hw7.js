//1
function ex1() {
    const upDate = document.getElementsById("intro");
    upDate.insertAdjacentHTML("afterbegin",`afterBegin`)
    upDate.insertAdjacentHTML("afterend",`afterEnd`)
    upDate.insertAdjacentHTML("beforebegin",`beforeBegin`)
    upDate.insertAdjacentHTML("beforeend",`beforeEnd`)
}

//2
function ex2() {
    const container = document.getElementById("list");
    for(let i = 0; i < 3; i++) {
      container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
    }    
}

//3
function ex3() {
    setTimeout(() => {
     alert("Loadinggg")
 }, 5000);   
}


function ex4() {
    const x = document.getElementById("ex4");
    const ex44 = x.getElementsByTagName("li");
    // document.getElementById("length").innerHTML = readTag.length;
    document.getElementById("l1").innerHTML = ex44[1].innerHTML;
    for (let index in ex44) {
        console.log(ex44[index].innerHTML);
        // readTag[index].style.backgroundColor = "red";
    }
}


function ex5() {
    const ex5 = document.getElementsByClassName("singer");
    document.getElementById("class5").innerHTML = ex5[2].innerHTML;
    for (let index in ex5) {
        console.log(ex5[index].innerHTML);
    }
}


function ex6() {
    const ex6 = document.getElementsByClassName("singer");
    ex6[2].remove();
    for (let index in ex6) {
        console.log(ex6[index].innerHTML);
    }
}

function ex7() {
    const a = document.getElementById("button1");
    a.addEventListener('click', function(e){
        console.log(e.target);
        e.target.style.visibility = 'hidden';
    });
    const b = document.getElementById("input");
    b.addEventListener('keydown', function(e){
        console.log(e.key);
    });
}
// ex7()
function ex8(name,thing) {
    alert(`My name is ${name}, I wish ${thing} this year`);
}
// ex8("Tung", "Passed");
{
// let userName = prompt("Enter your name: ");
// let userWish = prompt("What is your wish for this year?: ");
function ex9(name, thing){
    alert(`My name is ${name}, I wish ${thing} this year`);
}
// ex9(userName, userWish1);
}
{
// let userName = prompt("Enter your name: ");
// let userWish = prompt("What is your wish for this year?: ");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function ex10(name, thing){
    if(thing){
        alert(`My name is ${capitalizeFirstLetter(name)}, I wish ${thing} this year`);
    }
    else{
        // alert(`Wooo, ${capitalizeFirstLetter(name)}, You have nothing to wish.\n`);
        let ans = String(prompt(`Wooo, ${capitalizeFirstLetter(name)}, You have nothing to wish.\n ---- Wanna try again?(Y/N): `));
        switch (ans.toLowerCase()) {
            case "y":{
                let wish = prompt("What is your wish for this year?: ");
                return alert(` ${capitalizeFirstLetter(name)}, you wish ${wish} this year`);
            }
            default:
                break;
        }
    }
}
//  ex10(userName, userWish);
}
function ex11() {
    let btn = document.getElementById("upper-button");
    let input = document.getElementById("name-input");
    let result =document.getElementById("result-div");
    //11.2
    console.log(btn);
    //11.3
    btn.addEventListener("click", function(event){
        console.log('Upper it!!! just clicked');
    });
    //11.4
    console.log(input);
    //11.5
    let p = document.getElementById("name");
    input.addEventListener('input', function(event) {
        p.textContent = event.target.value;
      });
    //11.6
    btn.addEventListener("click",function(e){
        console.log(`User's name: ${p.textContent}`);
        let Name = p.textContent.toUpperCase();
        console.log(`User's name UpperCase: ${Name}`);
        //11.8
        result.textContent = Name;
    })  
    //11.7
    console.log(result);
    //11.8 
}
// ex11();
function ex12() {
    let arr = ["BackPack","MiBand watch","iRing"];
    let list = document.getElementById("item-list-ul");
    let input = document.getElementById("name-input");
    let btnAdd = document.getElementById("item-add");
    let btnRemove = document.getElementsByClassName("item-remove");
    // console.log(list);
    console.log(arr);
    // 12.5 .6 .7
    for(let index in arr){
        list.insertAdjacentHTML("beforeend", `<li> <a>${arr[index]}</a> <button class="item-remove">Remove</button></li>`);
    }
    //
    let newItem =document.getElementById("name-12");
    input.addEventListener('input', function(event) {
          newItem.textContent = event.target.value;
      });
    btnAdd.addEventListener("click", function(event){
        console.log(`Add Button clicked. `);
        arr.push(newItem.textContent);
        console.log(arr);
        list.insertAdjacentHTML("beforeend",`<li><a>${newItem.textContent}</a> <button class="item-remove">Remove</button></li>`);
    });
    //
    list.addEventListener("click", function(event){
        event.target.parentElement.remove();
        console.log(list);
    });
}
// ex12();