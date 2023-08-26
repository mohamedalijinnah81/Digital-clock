const hourDiv = document.createElement("span");
hourDiv.setAttribute("id", "hourSpan");
hourDiv.setAttribute("class", "time");
document.getElementById("clock").appendChild(hourDiv);

const colon1 = document.createElement("span");
colon1.setAttribute("class", "colonSpan");
document.getElementById("clock").appendChild(colon1);

const minDiv = document.createElement("span");
minDiv.setAttribute("id", "minSpan");
minDiv.setAttribute("class", "time");
document.getElementById("clock").appendChild(minDiv);

const colon2 = document.createElement("span");
colon2.setAttribute("class", "colonSpan");
document.getElementById("clock").appendChild(colon2);

const secDiv = document.createElement("span");
secDiv.setAttribute("id", "secSpan");
secDiv.setAttribute("class", "time");
document.getElementById("clock").appendChild(secDiv);

const amDiv = document.createElement("span");
amDiv.setAttribute("id", "ampm");
document.getElementById("clock").appendChild(amDiv);

function calZero(num) {
  if (num < 10) return "0" + num;
  else return num;
}

function calculateTime() {
  colon1.innerHTML = "";
  colon2.innerHTML = "";
  //   sec++;
  amDiv.style.fontSize = "0.4em";
  let currentTime = new Date();
  let ampm = "AM";
  let sec = currentTime.getSeconds();
  let min = currentTime.getMinutes();
  let hour = currentTime.getHours();
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (sec > 59) {
    sec = 0;
    min++;
  }
  if (min > 59) {
    min = 0;
    // hour++;
  }
  if (ampm == "AM") amDiv.style.alignSelf = "flex-start";
  else amDiv.style.alignSelf = "flex-end";
  secDiv.innerHTML = calZero(sec);
  minDiv.innerHTML = calZero(min);
  hourDiv.innerHTML = calZero(hour);
  amDiv.innerHTML = ampm;
  colon1.innerHTML = ":";
  colon2.innerHTML = ":";
}

setInterval(calculateTime, 500);

// console.log(hour, min, sec);
