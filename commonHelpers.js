import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-651d7991.js";const d=document.querySelector("#datetime-picker"),r=document.querySelector("button[data-start]"),f={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};r.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(h.error({position:"topRight",icon:"",message:"Please choose a date in the future"}),r.disabled=!0):r.disabled=!1}};m(d,y);function n(e){return e>=0&&e<10?`0${e}`:e}r.addEventListener("click",()=>p());function p(){const{days:e,hours:a,minutes:s,seconds:c}=f;let u=setInterval(()=>{let o=new Date(d.value)-new Date;if(o>=0){let t=D(o);e.textContent=n(t.days),a.textContent=n(t.hours),s.textContent=n(t.minutes),c.textContent=n(t.seconds)}else clearInterval(u)},1e3)}function D(e){const o=Math.floor(e/864e5),t=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:t,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map