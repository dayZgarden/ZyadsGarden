// Problem # 10

function remainder (num1 = 1,num2 = 1){
    return (num1 % num2);
}

const ans = remainder(7,5);

console.log(remainder(7, 8))
console.log(remainder(4, 2))
console.log(remainder(9, 8))
console.log(ans);

const remainderArrow = (num1, num2) => num1 % num2;
console.log(remainderArrow(7,5));

// Problem # 11

function isOdd(num1){
    a = remainder(num1,2);
    if(a === 0){
        return false;
    }
    return true;
}

const odd = isOdd(2);
console.log(odd);

// Problem # 12 

function even(num1){
    return num1 % 2 === 0 ? '1' : '-1';
}

const eve = even(6);
console.log(eve);

// Problem # 13 & 14

function logSub(a = '',b = ''){
    // if (a === 'LOGGED_IN' && b === 'SUBSCRIBED'){
    //     return true;
    // }
    // return false;
    return a === 'LOGGED_IN' && b === 'SUBSCRIBED' ? true : false;
}

const subLog = (a='',b='') => a === 'LOGGED_IN' && b === 'SUBSCRIBED' ? true : false;
const suLog = (a='',b='') => a === 'LOGGED_IN' || b === 'SUBSCRIBED' ? true : false;

const user = subLog('LOGGED_IN', 'SUBSCRIBED');
const user1 = suLog('LOGGED_IN', 'SUBSCRIBED');
console.log(user);
console.log(user1);


