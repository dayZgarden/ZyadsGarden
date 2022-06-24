// Problem # 1
const falsy = (val1, val2) => val1 ? val2 : val1;

console.log(falsy(0,500));
console.log(falsy(false,100));
console.log(falsy(true, 'Dog'));

// Problem # 2

const len = (arr) => arr.length;

console.log(len([1,2,3]));
console.log(len([5,0,-4,1]));
console.log(len([]));

// Problem # 3 (4)?

function sum(arr) {
    let a = 0;
    for(let i of arr){
        a = i + a;
    }
    return a;
}

console.log(sum([2,2,2]));
console.log(sum([100,200,500]));
console.log(sum([0,-5,-10]));

// Problem # 5

function addUp(num){
    i = 0;
    total = 0;
    while(i < num){
        i++;
        total = total + i;
    }
    return total;
}

console.log(addUp(3));
console.log(addUp(4));
console.log(addUp(600));

// Problem # 6

function time(num){
    let min = Math.floor(num / 60);
    let sec = num % 60;
    if(min.toString().length < 2){
        min = min.toString();
        min = `0${min}`
    }
    if(sec.toString().length < 2){
        sec = sec.toString();
        sec = `0${sec}`
    }

    return `${min}:${sec}`
}

console.log(time(80));

// Problem # 7 

function getMax(arr){
    max = arr[0];
    for(let i of arr){
        if (i > max){
            max = i;
        }
    }
    return max;
}

console.log(getMax([5,100,0]));
console.log(getMax([12,10,-20]));
console.log(getMax([-300, -100, -200]));

// Problem # 8

function reverse(val){
    let word = '';
    for(let i = val.length - 1; i >= 0 ; i--){
        word += val[i];
    }
    return word;
}

console.log(reverse('abc'));
console.log(reverse('David'));
console.log(reverse('This is cool'));

// Problem # 9

function convert(arr){
    temp = [];
    for(let i = 0; i < arr.length; i++){
        temp[i] = 0;
    }
    return temp;
}

console.log(convert([5,100,0]));
console.log(convert([12]));
console.log(convert([1,2,3,4,5]));

// Problem # 10

function apple (arr){
    return arr.filter(a => a !== 'Apple');
}

console.log(apple(['Banana', 'Apple', 'Orange']))


// Problem # 11

function falfil(arr) { 
    return arr.filter(a => a ? true : false);
}

console.log(falfil(['',0,'null',undefined, '0']));
console.log(falfil(['tomato','orange',false]));

// Problem # 12

function conv (arr){
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i]){
    //         arr[i] = true;
    //     }
    //     else{
    //         arr[i] = false;
    //     }
    // }
    // return arr;
    return arr.map(a => !!a);
}

console.log(conv([500,0,'David','',0]));