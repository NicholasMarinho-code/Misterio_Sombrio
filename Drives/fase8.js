const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "ilhadepascoa") {
        window.location.href = "fase9.html";
    }
});