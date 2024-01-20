'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
let userData = {};

form.addEventListener('input', e => {
  if (e.target.value !== '' && e.target.value !== null) {
    userData[e.target.name] = e.target.value.trim();
  }
  return;
});

const makePromise = ({ delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();

  makePromise(userData)
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        icon: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        position: 'topRight',
        icon: '',
        message: `❌ Rejected promise in ${delay}ms`,
      })
    );

  form.reset();
});
