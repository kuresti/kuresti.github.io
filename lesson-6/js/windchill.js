
   var t = parseFloat(document.getElementById("t").textContent);
   var s = parseFloat(document.getElementById("s").textContent);
   var f = (t, s);

     f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));

     document.getElementById('chill').textContent = f;

  if (f <= 50 && s > 3) {
      document.getElementById('chill').textContent = f.toFixed(0);
  }
  else {
      document.getElementById('chill').textContent = "NA";
  }


