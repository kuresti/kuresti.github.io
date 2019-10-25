
    var t = parseFloat(document.getElementById('ht').textContent);
    var s = parseFloat(document.getElementById('ws').textContent);
    

windChill = (35.74 +(0.6215 * t) - (35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16))));
    

if (windChill <= 50 && s > 3) {
    document.getElementById('windChill').textContent = windChill.toFixed(0) + "\xB0F";
}
else {
    document.getElementById('windChill').textContent = "NA";
}



