const hSelecter = document.getElementById("hour");
const mSelecter = document.getElementById("min");
const apSelecter = document.getElementById("ap");
const selectTime = document.getElementById("getTime-container");
const showTime = document.getElementById("show-time");
const showCurrent = document.getElementById("showCurTime");
const showGapEle = document.getElementById("show-gap");

function render(tmp, element) {
  element.innerHTML = tmp;
}

function showCurrentTime() {
  const time = new Date();
  let h = set0(time.getHours());
  let m = set0(time.getMinutes());
  let s = set0(time.getSeconds());
  let ap = +h > 12 ? "PM" : "AM";
  let hour = +h > 12 ? h - 12 : h;
  let tmp = hour + " : " + m + " : " + s + " " + ap;
  render(tmp, showCurrent);
}

function setHour() {
  let tmp = "";
  for (let i = 1; i < 13; i++) {
    let num = i;
    if (num < 10) num = set0(num);
    tmp += `<option value="${i}">${i}</option>`;
  }
  render(tmp, hSelecter);
}
function setMin() {
  let tmp = "";
  for (let i = 1; i < 61; i++) {
    let num = i;
    if (num < 10) num = set0(num);
    tmp += `<option value="${num}">${num}</option>`;
  }
  render(tmp, mSelecter);
}
function set0(num) {
  if (num < 10) return "0" + num;
  return "" + num;
}

let AB;
function setUpEvent() {
  selectTime.addEventListener("click", event => {
    if (event.target.id === "getTime-button") {
      //collect info from h,m,ap list~~~~~~~~~~~~~~~~~~~~~~~~~~~start
      let ap = apSelecter.value;
      let m = set0(+mSelecter.value);
      let h = set0(+hSelecter.value);
      let tmp = h + " : " + m + " : 00 " + ap;
      render(tmp, showTime);
      //collect info from h,m,ap list~~~~~~~~~~~~~~~~~~~~~~~~~~~end

      //start interval render~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~start
      clearInterval(AB);
      AB = setInterval(getRender, 1000);
      //start interval render~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end

      function getRender() {
        const today = new Date();
        const now = today.getTime();
        let h24 = ap === "PM" ? +hSelecter.value + 12 : +hSelecter.value;
        const setTime = new Date(
          today.getFullYear(),
          today.getMonth() + 1, // Month index start from 0 to 11;
          today.getDay() + 1, // Day index start from 0 to 29? 30?;
          +h24,
          +m,
          0,
          0
        ).getTime();
        let countDownDate =
          setTime - now >= 0 ? setTime : setTime + 1000 * 24 * 60 * 60;
        let distance = countDownDate - now;

        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = set0(hours);
        minutes = set0(minutes);
        seconds = set0(seconds);
        let setCountDown = hours + " : " + minutes + " : " + seconds;
        render(setCountDown, showGapEle);
      }
    }
  });
}

function init() {
  setInterval(showCurrentTime, 1000);
  setHour();
  setMin();
  setUpEvent();
}
init();
