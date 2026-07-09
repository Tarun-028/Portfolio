window.onload = function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) {
        console.log("Button not found!");
        return;
    }

    window.onscroll = function () {

        if (document.documentElement.scrollTop > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    };

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

};