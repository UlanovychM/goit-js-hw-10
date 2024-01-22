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

  const delay = Number(form.elements.delay.value);
  const state = e.target.elements.state.value; // якщо знову не правильно піскажіть будь ласка як зробити, бо честно кажучи в мене вже ідей

  makePromise(delay, state)
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        icon: '', // Якщо я тут не залишу пусту строчку то воно підтягне власну іконку прописану за замовчуванням 
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
