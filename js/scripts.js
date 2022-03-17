/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // function InputCheckReq() {
    //     var form = document.getElementById('contactForm');
    //     if (form.name.value == '') {
    //         window.alert("성함을 입력해주세요.")
    //         return false;
    //     }
    //     if (!validEmailCheck(form.email)) {
    //         window.alert("이메일 주소가 유효하지 않습니다.");
    //         form.email.value = null;
    //         form.email.focus();
    //         return false;
    //     }
    //     if (!validPhoneNumberCheck(form.phone)) {
    //         window.alert("핸드폰 번호가 유효하지 않습니다.");
    //         form.phone.value = null;
    //         form.phone.focus();
    //         return false;
    //     }
    //     if (form.message.value == '') {
    //         window.alert("문의사항을 입력해주세요.");
    //         return false;
    //     }
    // }

    // document.getElementById("contactForm").addEventListener('submit', InputCheckReq);

});
