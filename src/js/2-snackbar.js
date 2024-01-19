'use strict';

import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';

const form = document.querySelector('.form');
let userData = {};
const localStorageKey = 'feedback-form-state';

// const promise = new Promise();

form.addEventListener('input', e => {
  if (e.target.value !== '' && e.target.value !== null) {
    userData[e.target.name] = e.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  }
  return;
});

if (localStorage.getItem(localStorageKey)) {
  userData = JSON.parse(localStorage.getItem(localStorageKey));

  form.elements.delay.value = userData.delay;
  form.elements.state.value = userData.state;
}

const makePromise = ({ delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      }
      return reject(delay);
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

  localStorage.removeItem(localStorageKey);
  form.reset();
});
