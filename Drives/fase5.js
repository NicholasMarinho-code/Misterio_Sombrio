const textarea = document.getElementById("text");

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && textarea.value.toLowerCase() === "igual") {
        window.location.href = "fase6.html";
    }
    else if(event.key === "Enter" && textarea.value.toLowerCase() !== "igual"){
        window.alert("O que está no nome do site e também está no titulo da página são...")
    }
});