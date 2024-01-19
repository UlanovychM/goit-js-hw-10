'use strict';
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const pickrTime = document.querySelector('#datetime-picker');
const button = document.querySelector('#data-start');
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates <= this.defaultDate) {
      iziToast.error({
        position: 'topRight',
        icon: '',
        message: 'Please choose a date in the future',
      });
    }
  },
};

flatpickr(pickrTime, options);

// options.onClose(userSelectedDate);
console.log(options.onClose(userSelectedDate));

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// button.addEventListener('click', e => {
//   console.log(options.onClose(e.target));
// });

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

const changeDateInTimer = () => {
  const days = document.querySelector('#data-days');
  const hours = document.querySelector('#data-hours');
  const minutes = document.querySelector('#data-minutes');
  const seconds = document.querySelector('#data-seconds');
};
