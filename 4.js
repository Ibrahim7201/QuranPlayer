var aud = document.getElementById("quran");

var tm = document.getElementById("time");
var vol = document.getElementById("vol");
var vool = document.getElementById("vl");

var t1 = document.getElementById("td1");
var t2 = document.getElementById("td2");
var t3 = document.getElementById("td3");

var r = document.getElementById("dur");

var mg = document.getElementById("image");

function Play1() {
  aud.play();
  r.setAttribute("max", aud.duration);
  var timerID = setInterval(function () {
    r.value = aud.currentTime;
  }, 1000);
}

function Pause1() {
  aud.pause();
}

function Stop1() {
  aud.load();
  aud.pause();
}
function Mute1() {
  aud.muted = aud.muted == false ? (aud.muted = 1) : (aud.muted = 0);
}

window.onload = function () {
  r.setAttribute("max", aud.duration);
  aud.setAttribute("src", "");
};

function Alnas() {
  mg.setAttribute("src", "nas.png");
  aud.setAttribute("src", "114.mp3");
  t1.style.backgroundColor = "green";
  t1.style.color = "white";

  t2.style.backgroundColor = "#808080";
  t2.style.color = "black";

  t3.style.backgroundColor = "#FAEBD6";
  t3.style.color = "black";

  var ttt = setInterval(function () {
    n.innerText = parseInt(aud.currentTime);
  }, 1000);
}

function Alfalaq() {
  mg.setAttribute("src", "falaq.png");
  aud.setAttribute("src", "113.mp3");
  t2.style.backgroundColor = "green";
  t2.style.color = "white";

  t1.style.backgroundColor = "#FAEBD6";
  t1.style.color = "black";

  t3.style.backgroundColor = "#FAEBD6";
  t3.style.color = "black";

  var ttt = setInterval(function () {
    n.innerText = parseInt(aud.currentTime);
  }, 1000);
}
function Alekhlas() {
  mg.setAttribute("src", "e5las.png");
  aud.setAttribute("src", "112.mp3");
  t3.style.backgroundColor = "green";
  t3.style.color = "white";

  t2.style.backgroundColor = "#808080";
  t2.style.color = "black";

  t1.style.backgroundColor = "#FAEBD6";
  t1.style.color = "black";

  var ttt = setInterval(function () {
    n.innerText = parseInt(aud.currentTime);
  }, 1000);
}

function Range() {
  aud.currentTime = r.value;
}

function ChangeVolume() {
  aud.volume = vool.value;
  s.innerText = vool.value * 100 + " %";
}

var n = document.getElementById("now");
var s = document.getElementById("vlm");

t1.addEventListener("mouseover", function () {
  t1.style.borderColor = "#00AEFF";
});

t1.addEventListener("mouseout", function () {
  t1.style.borderColor = "black";
});

t2.addEventListener("mouseover", function () {
  t2.style.borderColor = "#00AEFF";
});

t2.addEventListener("mouseout", function () {
  t2.style.borderColor = "black";
});

t3.addEventListener("mouseover", function () {
  t3.style.borderColor = "#00AEFF";
});

t3.addEventListener("mouseout", function () {
  t3.style.borderColor = "black";
});
var audsrc = aud.getAttribute("src");
