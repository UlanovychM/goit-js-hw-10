import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-651d7991.js";const d=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),f={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};o.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(h.error({position:"topRight",icon:"",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};m(d,y);function r(e){return e>=0&&e<10?`0${e}`:e}o.addEventListener("click",()=>p());function p(){const{days:e,hours:a,minutes:s,seconds:c}=f;o.disabled=!0;let u=setInterval(()=>{let n=new Date(d.value)-new Date;if(n>=0){let t=b(n);e.textContent=r(t.days),a.textContent=r(t.hours),s.textContent=r(t.minutes),c.textContent=r(t.seconds)}else clearInterval(u)},1e3)}function b(e){const n=Math.floor(e/864e5),t=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:t,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
