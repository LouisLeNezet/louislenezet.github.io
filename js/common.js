$(document).ready(function() {
    'use strict';

    var headerOverlay = $(".header__overlay"),
        menuOpenIcon = $(".nav__icon-menu"),
        menuCloseIcon = $(".nav-icon__close"),
        menuList = $(".main-nav");

    /* =======================
    // Menu
    ======================= */
    menuOpenIcon.click(function() {
        menuOpen();
    })

    menuCloseIcon.click(function () {
        menuClose();
    })

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

});