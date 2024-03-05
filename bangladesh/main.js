(function () {
    "use strict";
    // init
    const root = document.getElementById("root");
    const body = document.body;
    const buttonGroup = document.querySelector(".button-group");

    body.setAttribute("class", "relative");
    buttonGroup.innerHTML = get_button();

    // addRoute
    function addRoute(params) {
        return document.location.href.match(params);
    }

    function get_button() {
        let btn =
            "bg-slate-50 hover:bg-slate-100 text-slate-950 border border-slate-300 text-sm font-semibold py-1.5 px-2.5 rounded";

        return `
            <a href="./index.html?tab=design-one" class="${btn}">Design One</a>
            <a href="./index.html?tab=design-two" class="${btn}">Design Two</a>
        `;
    }

    function get_designOne() {
        return `
            <div class="design-one flex items-center justify-center h-screen bg-black relative">
                <h2 class="flex text-transparent text-7xl">
                    <span style="--ui:1;">১</span>
                    <span style="--ui:2;">৬</span>
                    <span style="--ui:2;">ই</span>
                    <span style="--ui:3;margin-left: 2vw;">ডি</span>
                    <span style="--ui:4;">সে</span>
                    <span style="--ui:5;">ম্ব</span>
                    <span style="--ui:6;">র</span><br>
                    <span style="--ui:7;margin-left: 2vw;">আ</span>
                    <span style="--ui:8;">মা</span>
                    <span style="--ui:9;">দে</span>
                    <span style="--ui:11;">র</span>
                    <span style="--ui:12;margin-left: 2vw;">বি</span>
                    <span style="--ui:13;">জ</span>
                    <span style="--ui:14;">য়</span>
                    <span style="--ui:15;margin-left: 2vw;">দি</span>
                    <span style="--ui:16;">ব</span>
                    <span style="--ui:17;">স</span>
                </h2>
            </div>
        `;
    }

    function get_designTwo() {
        return `
            <div class="design-two bg-pink-100 flex flex-col items-center justify-center h-screen h-screen relative">
                <h2>১৬ই ডিসেম্বর আমাদের বিজয় দিবস</h2>
                <p>Design & Develop by <a href="https://github.com/suhag10">Suhag Ahmed</a></p>
            </div>
        `;
    }

    openTab();
    function openTab() {
        if (addRoute("tab=design-two")) {
            root.innerHTML = get_designTwo();
        } else if (addRoute("tab=design-one")) {
            root.innerHTML = get_designOne();
        } else if (addRoute("/index.html")) {
            root.innerHTML = get_designOne();
        } else if (addRoute("/bangladesh")) {
            root.innerHTML = get_designOne();
        }
    }
})();
