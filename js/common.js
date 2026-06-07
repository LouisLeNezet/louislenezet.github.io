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

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".page__content, .post__content");
    const toc = document.querySelector("#table-of-contents");

    if (!content || !toc) return;

    // -----------------------------
    // 1. Generate IDs for headings
    // -----------------------------
    const headings = content.querySelectorAll("h1, h2");

    headings.forEach(h => {
        if (!h.id) {
        h.id = h.textContent
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
        }
    });

    // -----------------------------
    // 2. Build TOC
    // -----------------------------
    const ul = document.createElement("ul");

    headings.forEach(h => {
        const li = document.createElement("li");

        li.className = h.tagName.toLowerCase();

        li.innerHTML = `
        <a href="#${h.id}">
            ${h.textContent}
        </a>
        `;

        ul.appendChild(li);
    });

    toc.appendChild(ul);

    // -----------------------------
    // 3. Mobile toggle
    // -----------------------------
    const toggle = document.querySelector(".toc__mobile-toggle");
    const sidebar = document.querySelector(".page-toc");

    if (toggle && sidebar) {
        toggle.addEventListener("click", () => {
        sidebar.classList.toggle("is-open");
        });
    }

});

document.querySelector(".toc__mobile-toggle")?.addEventListener("click", () => {
    document.querySelector(".page-toc").classList.toggle("is-open");
});
