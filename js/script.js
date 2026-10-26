const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add(
            "bg-gray-900",
            "backdrop-blur-4xl",
            "shadow-lg",
            "border-b",
            "border-white"
        );

    navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove(
                "bg-gray-900",
                "backdrop-blur-4xl",
                "shadow-lg",
                "border-b",
                "border-white"
            );

            navbar.classList.add("bg-transparent");
    }
});