let isDobOpen = true;
let afterDobBtn;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const startEl = document.getElementById("initial");
const afterPressBtnEl = document.getElementById("afterDobText");
const btnEl = document.getElementById("dobButton");
const dateInput = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigit = (number) => {
  return number > 9 ? number : `0${number}`;
}

const toggle = () => {
  if (isDobOpen) {
    settingContentEl.classList.add("hide");
    isDobOpen = false;
  } else {
    settingContentEl.classList.remove("hide");
    isDobOpen = true;
  }
};

const btnHandler = () => {
  const dateValue = dateInput.value; 
  if (dateValue) {
    afterDobBtn = new Date(dateValue); 
    startEl.classList.add("hide");
    afterPressBtnEl.classList.remove("hide");
    setInterval(() => updateAge(),1000) ;
  } else {
    afterPressBtnEl.classList.add("hide");
    startEl.classList.remove("hide");
  }
};


const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - afterDobBtn; 
  console.log("dateDiff in milliseconds:", dateDiff);


  const ageInYears = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));// 1min * 60 = 60min = 1 hr * 24hr = 1day * 365
  const ageInMonths = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const ageInDays = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

  const ageInHours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const ageInMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const ageInseconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

 yearEl.innerHTML = makeTwoDigit(ageInYears);
 monthEl.innerHTML = makeTwoDigit(ageInMonths);
 dayEl.innerHTML = makeTwoDigit(ageInDays);
 hourEl.innerHTML = makeTwoDigit(ageInHours);
 minuteEl.innerHTML = makeTwoDigit(ageInMinutes);
 secondEl.innerHTML = makeTwoDigit(ageInseconds);

}
settingCogEl.addEventListener("click", toggle);
btnEl.addEventListener("click", btnHandler);
