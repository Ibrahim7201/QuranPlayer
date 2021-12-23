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
};

function Alnas() {
  mg.setAttribute("src", "nas.png");
  aud.setAttribute("src", "114.mp3");
  var ttt = setInterval(function () {
    n.innerText = parseInt(aud.currentTime);
  }, 1000);
}

function Alfalaq() {
  mg.setAttribute("src", "falaq.png");
  aud.setAttribute("src", "113.mp3");
  var ttt = setInterval(function () {
    n.innerText = parseInt(aud.currentTime);
  }, 1000);
}
function Alekhlas() {
  mg.setAttribute("src", "e5las.png");
  aud.setAttribute("src", "112.mp3");
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
