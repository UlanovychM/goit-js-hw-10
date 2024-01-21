'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const makePromise = (delay, state) => {
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

  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  makePromise(delay, state)
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
