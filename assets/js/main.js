// window.navigator.geolocation.getCurrentPosition(
//     (geoLocation) => {
//         console.log(geoLocation);
//     },
//     () => {
//         alert("oops sorry bro, you did not let us to get your location and because of this we can't do blah blah");
//     }
// )

// const heading = document.querySelector('#section.sec .heading');
// heading.style.color = 'red';

// const headings = Array.from(document.querySelectorAll("#section.sec .heading"));

// headings.forEach(heading => {
//     // heading.className = 'bg-primary text-white';
//     heading.classList.add('bg-primary');
//     // setTimeout(() => {
//     //     heading.classList.remove('text-white');
//     // }, 3000);

//     // setTimeout(() => {
//     //     heading.classList.replace('heading', 'heading-30');
//     // }, 5000);

//     // setInterval(() => {
//     //     heading.classList.toggle('text-white');
//     // }, 1000);

//     heading.classList.toggle('text-white');
// });


// const headingWrapper = document.getElementById('section');

// const headings = document.getElementsByClassName('heading');
// console.log(headings);
// heading.style.backgroundColor = 'red';
// headingWrapper.style.backgroundColor = 'blue';

// const headings = document.getElementsByTagName('h1');
// console.log(headings);

// Creating html markup with JavaScript
// const heading1 = document.createElement('h1');
// const wrapper = document.querySelector('.wrapper');

// heading1.innerHTML = `
//     Hello world <br>
//     <span class="text-danger">i am a span</span>
// `;

// wrapper.append();

// const span = document.createElement('span');
// span.className = 'text-danger';
// span.innerText = 'Ali is a good boy 1';

// const mySpan = document.querySelector('.my-span');

// wrapper.appendChild(mySpan);

// wrapper.append(span, mySpan, 'salam dunya');


const input = document.querySelector(`#my-input`);
const button = document.querySelector('.my-custom-button');
const errorText = document.querySelector('.firstname-error');

button.onclick = function () {
    if (input.value) {
        errorText.classList.add('d-none');
        alert('you have successfully submitted this form');
        input.value = '';
        window.location.href = 'home.html';
    } else {
        errorText.classList.remove('d-none');
    }
}

