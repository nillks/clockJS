const handSecond = document.querySelector(".time__second");
const handMinute = document.querySelector(".time__minute");
const handHour = document.querySelector(".time__hour");

function setTime() {
  const currentTime = {
    second: new Date().getSeconds(),
    minute: new Date().getMinutes(),
    hour: new Date().getHours(),
  };

  handSecond.style.transform = `rotate(${
    (currentTime.second / 60) * 360 + 90
  }deg)`;
  handMinute.style.transform = `rotate(${
    (currentTime.minute / 60) * 360 + 90
  }deg)`;
  handHour.style.transform = `rotate(${(currentTime.hour / 60) * 360 + 90}deg)`;
}

setInterval(setTime, 1000);
