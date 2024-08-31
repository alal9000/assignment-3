function changeStyle() {
  var hd1 = document.getElementById('hd1');
  hd1.style.backgroundColor = 'red';
}

function changeText() {
  var para3 = document.getElementById('para3');
  para3.textContent = 'pooper';
}

function init() {
  var para1 = document.getElementById('para1');
  para1.onclick = changeText;

  var para2 = document.getElementById('para2');
  para2.onclick = changeStyle;
}

window.onload = init;
