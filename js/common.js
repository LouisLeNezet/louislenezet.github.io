$(document).ready(function() {
    'use strict';

    var headerOverlay = $(".header__overlay"),
        menuList = $(".main-nav");

    /* =======================
    // Menu
    ======================= */
    $(document).on('click', '.nav__icon-menu', function() {
        console.log('Menu icon clicked');
        menuOpen();
    });

    $(document).on('click', '.nav-icon__close', function() {
        menuClose();
    });

    headerOverlay.click(function () {
        menuClose();
    });

    function menuOpen() {
        menuList.addClass("is-open");
        headerOverlay.addClass("is-visible");
    }

    function menuClose() {
        menuList.removeClass("is-open");
        headerOverlay.removeClass("is-visible");
    }

    /* =======================
    // Scroll Top Button
    ======================= */
    $(".top").click(function() {
        $("html, body")
        .stop()
        .animate({ scrollTop: 0 }, "slow", "swing");
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
        $(".top").addClass("is-active");
        } else {
        $(".top").removeClass("is-active");
        }
    });

});