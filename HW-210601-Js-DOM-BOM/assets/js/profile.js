
const firstnameData = document.querySelector('.firstname-data');
const lastnameData = document.querySelector('.lastname-data');

const firstnameLocal = localStorage.getItem('firstname');
localStorage.removeItem('firstname');

const lastnameLocal = localStorage.getItem('lastname');
localStorage.removeItem('lastname');

firstnameData.innerHTML = firstnameLocal;
lastnameData.innerHTML = lastnameLocal;