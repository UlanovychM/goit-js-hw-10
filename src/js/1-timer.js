'use strict';
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const pickrTime = document.querySelector('#datetime-picker');

const button = document.querySelector('button[data-start]');

const dataTimerValue = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.error({
        position: 'topRight',
        icon: '',
        message: 'Please choose a date in the future',
      });
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
};

flatpickr(pickrTime, options);

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

button.addEventListener('click', () => changeDateInTimer());

function changeDateInTimer() {
  let timer = setInterval(() => {
    let countdown = new Date(pickrTime.value) - new Date();
    button.disabled = true;
    pickrTime.disabled = true;

    let timerData = convertMs(countdown);

    dataTimerValue.days.textContent = getZero(timerData.days);
    dataTimerValue.hours.textContent = getZero(timerData.hours);
    dataTimerValue.minutes.textContent = getZero(timerData.minutes);
    dataTimerValue.seconds.textContent = getZero(timerData.seconds);

    if (countdown <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

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
