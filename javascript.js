var ads = ["https://i.imgur.com/mZtTGFB.gif", "https://i.imgur.com/oAxdc1r.gif", "https://i.imgur.com/pEllR1a.gif", "https://i.imgur.com/rvuueva.gif"]

var ad = ads[Math.floor(Math.random() * ads.length)];

$('#ad').attr('src', ad);
$('#day').text(new Date().toLocaleString('en-us', {weekday:'long'}))