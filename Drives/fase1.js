const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "continuar") {
        window.location.href = "fase2.html";
    }
    else if(event.key === "Enter" && textarea.value.toLowerCase() !== "continuar"){
        window.alert("Olhe a letra maiúscula")
    }
});