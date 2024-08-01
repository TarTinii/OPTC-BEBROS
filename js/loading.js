document.addEventListener("DOMContentLoaded", function() {
    const loadingElement = document.getElementById("loading");
    const contentElement = document.getElementById("content");

    document.body.classList.add("loading");

    window.addEventListener("load", function() {
        loadingElement.style.display = "none";
        document.body.classList.remove("loading");
    });
});
