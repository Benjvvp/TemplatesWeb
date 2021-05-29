window.addEventListener("load", function (event) {
    let spinner = document.getElementById('loader');
    let maincontent = document.getElementById('maincontent')
    spinner.style.display = 'none';
    maincontent.removeAttribute('style')
    spinner.parentElement.removeChild(spinner)
    
});

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', function () {
    let nav = this.document.getElementById('nav')
    let windowposition = window.scrollY > 0;
    if (nav.classList.contains('fix')) return;
    nav.classList.toggle('bg-dark', windowposition);
});

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

$(document).ready(function () {
    $("#sendcontact").click(function () {
        let email = document.getElementById('inputEmail4').value
        let fullname = document.getElementById('fullname').value
        let description = document.getElementById('exampleFormControlTextarea1').value
        let alertbox = document.getElementById('alertcontact')

        if (email == '' || fullname == '' || description == '') {
            alertbox.classList.remove('alert-success');
            alertbox.classList.add('alert-danger');

            alertbox.style.display = 'block';
            alertbox.innerHTML = 'Please enter a values.';
        } else {
            alertbox.classList.remove('alert-danger');
            alertbox.classList.add('alert-success');

            alertbox.style.display = 'block';
            alertbox.innerHTML = 'Has been sent correctly.';
        }
        setTimeout(() => {
            alertbox.style.transform = 'translateY(100px)';
        }, 5000);
        setTimeout(() => {
            alertbox.style.display = 'none'
            alertbox.style.transform = null;
        }, 6000);
    });
})