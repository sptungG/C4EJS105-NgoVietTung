async function load(){
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR274K9isLkZLn6mCWtO-iOfFSndMDIWyhTtEJBFxGopfz7XFr3Z7-aP8Vk");
    return await conn.json();
}
console.log(load())

// function generateID() {
//     const x = Math.random();
//     const y = x.toString(36);
//     const z = y.substr(0,10);
//     return z;
// }
// const myID = generateID();
// console.log(myID)