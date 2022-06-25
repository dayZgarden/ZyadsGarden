// // console.log(window);

// // Single element selector
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1')); // only selects the first h1

// //Multiple element selector

// console.log(document.querySelectorAll('.item')); // use this one
// console.log(document.getElementsByClassName('item')); // dont use this one
// console.log(document.getElementsByTagName('li')); // dont use this one

// // loop

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// // ul.remove(); - entire list
// // ul.lastElementChild.remove(); - last child is removed
// ul.firstElementChild.textContent = 'Hello'; //changes first li text content
// ul.children[1].innerText = 'Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red'; changes color to red

// btn.addEventListener('click' /*mouseover mouseout */, (e) => {
//     e.preventDefault(); // prevents form submission to page
//     // console.log(e.target.className);
//     document.querySelector('#my-form')
//     .style.background = 'red';
//     // document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

