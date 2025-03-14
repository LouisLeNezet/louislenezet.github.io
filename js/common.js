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


    /* =======================
    // Responsive Videos
    ======================= */
    $(".post__content, .page__content").fitVids({
        customSelector: ['iframe[src*="ted.com"]']
    });

    /* =======================
    // Zoom Image
    ======================= */
    $(".page img, .post img").attr("data-action", "zoom");
    $(".page a img, .post a img").removeAttr("data-action", "zoom");

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