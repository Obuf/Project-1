let value = 1;

function incremnet() {
  value *= 2;
}

function multi() {
  document.getElementById("value").innerHTML = value;
}
function clicky() {
  incremnet();
  document.getElementById("value").innerHTML = value;
}
function restNow() {
  value = 1;
  document.getElementById("value").innerHTML = value;
}
