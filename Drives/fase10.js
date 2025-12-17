const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "clnmipqin") {
        window.location.href = "Tesouro.html";
    }
});