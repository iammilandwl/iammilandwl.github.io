var ads = ["https://i.imgur.com/mZtTGFB.gif", "https://i.imgur.com/oAxdc1r.gif", "https://i.imgur.com/pEllR1a.gif", "https://i.imgur.com/rvuueva.gif"]

var ad = ads[Math.floor(Math.random() * ads.length)];

$('#ad').attr('src', ad);
$('#day').text(new Date().toLocaleString('en-us', {
    weekday: 'long'
}))

function loadPage(page) {
    ad = ads[Math.floor(Math.random() * ads.length)];
    $('#ad').attr('src', ad);
    $('.innerpage').removeClass('loaded');
    setTimeout(() => {
        $.ajax({
            url: `/pages/${page}.html`,
            success: function (data) {
                $('.innerpage').html(data);
                $('.innerpage').addClass('loaded');
            },
            error: function () {
                $('.innerpage').html(`<h1>404</h1><p>Page not found</p>`);
                $('.innerpage').addClass('loaded');
            }

        });
    }, 500);


}