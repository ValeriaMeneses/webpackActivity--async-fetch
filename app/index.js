import request from 'superagent'; // ES6
import getListOfStates from './getListOfStates.js';
import printInPage from './printInPage.js'



document.querySelector('.show-list').addEventListener('click', function () {
  request
    .get('https://randomuser.me/api/?results=50')
    .then(getListOfStates)
    .then(printInPage)

})
