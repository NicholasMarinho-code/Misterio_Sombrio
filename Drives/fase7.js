const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "46") {
        window.location.href = "fase8.html";
    }
});