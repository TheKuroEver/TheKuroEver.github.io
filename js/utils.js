let darkModeEnabled = false;
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled)
        document.body.classList.add("dark-mode");
    else
        document.body.classList.remove("dark-mode");
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