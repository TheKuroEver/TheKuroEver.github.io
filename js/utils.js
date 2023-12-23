let darkModeEnabled = false;
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        document.body.classList.add("dark-mode");
        $("#dark-mode-button > img").attr("src", "../img/Light%20mode.svg")        
    }
    else {
        document.body.classList.remove("dark-mode");
        $("#dark-mode-button > img").attr("src", "../img/Dark%20mode.svg")           
    }
}

function replacePlaceholders() {
    $.get("templates/navigation bar.html", function(data) {
        $("#nav-bar-placeholder").replaceWith(data);
    });
    $.get("templates/main title.html", function(data) {
        const title = $("#main-title-placeholder").data("title");
        $("#main-title-placeholder").replaceWith(data);
        $("#main-title-text").html(title);
    });
}

$(() => {
    replacePlaceholders();
});