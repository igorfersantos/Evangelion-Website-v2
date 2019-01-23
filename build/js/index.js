setInterval(CheckActive, 500);

function CheckActive() {
    var nav_active = document.querySelector('.item-3');

    var nav_active2 = document.querySelector('.item-3-1');

    var nav_active3 = document.querySelector('.item-3-2');

    if (nav_active.classList.contains('active') || nav_active2.classList.contains('active') || nav_active3.classList.contains('active') === true) {
        $('.collapse').collapse('show');
    } else {
        $('.collapse').collapse('hide');
    }
}