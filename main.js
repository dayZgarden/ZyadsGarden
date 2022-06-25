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

