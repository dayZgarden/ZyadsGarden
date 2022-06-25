// Problem # 1

function rating(rate){
    let word='';
    length = Math.floor(rate);
    for(let i = 0; i < length; i++){
        word += '*';
    }
    if(rate % 1 === 0.5){
        word+= '.';
    }
    return word;
}

console.log(rating(3));
console.log(rating(4.5));
console.log(rating(0.5));

// Problem # 2

function sorta(arr) {
    return arr.sort((a,b) => a-b);
}

console.log(sorta([20,40,10,30,50,10]));
console.log(sorta([5,10,0,-5]));
console.log(sorta([3,2,1,0]));
console.log(sorta([1, 5, 0, 10000, 10]));

// Problem # 3

function highToLow(arr) {
    return arr.sort((a,b) => b.price-a.price);

}
    
console.log(highToLow(
    [{id: 1, price: 50},
    {id: 2, price: 0},
    {id: 3, price: 500}
])
);

// Promises Vid # 1

// L1
// console.log('Synchronous 1');

// // L2
// setTimeout(_ => console.log(` Timeout 2`),0);

// // L3
// Promise.resolve().then(_ => console.log(` Promise`));

// // L4
// console.log(' Synchronous 4');

// Promises Vid # 2

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// // Make promise to ticket checker that your wife is coming with ticket

// const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('ticket');
//     },3000)
// });
 
// // Make new promise that your getting popcorn

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: heres the ticket');
//     console.log('husband: we should go in');
//     console.log('wife: no I am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// const getButter =  getPopcorn.then((t) => {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


// ASYNC AWAIT


// const testUserForm = async() => {

// const loadUserForm = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('page loaded'),3000)
// });

// const enterUserName = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('user entered'),3000)
// });

// const verifyUserDetails = () => {

// };

// await loadUserForm;
// await enterUserName;
// const testResult = verifyUserDetails();

// // let ticket;
// // try {
// //     ticket = await loadUserForm;
// // } catch(e) {
// //     ticket = 'sad face';
// // };

// // const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
// // const getCandy = new Promise((resolve, reject) => resolve(`candy`));
// // const getCoke = new Promise((resolve, reject) => resolve(`coke`));
// // let [popcorn, candy, coke]= await Promise.all([getPopcorn, getCandy, getCoke]);
// // console.log(`${popcorn}, ${candy}, ${coke}`)

// // return ticket; 
// return testResult;
// }

// testUserForm().then((m) => console.log(m));

// Problem # 5

async function postsByUser(userId) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');

    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId)

    console.log(posts);
}

postsByUser(4);

// Problem # 6

async function incompleteTodos(completion){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const fe = await res.json();

    list = fe.filter(element => !element.completed).slice(0,6);

    console.log(list);
}

incompleteTodos(false);