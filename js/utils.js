let darkModeEnabled = false;
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled)
        document.body.classList.add("dark-mode");
    else
        document.body.classList.remove("dark-mode");
}

$(() => {
    $.get("navigation bar.html", function(data) {
        $("#nav-bar-placeholder").replaceWith(data);
    });
});