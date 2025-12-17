const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "lápis") {
        window.location.href = "fase3.html";
    }
    else if(event.key === "Enter" && textarea.value.toLowerCase() === "lapis") {
        window.alert("Adcione o acento")
    }
});