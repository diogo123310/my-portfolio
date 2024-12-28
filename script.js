function showPopup() {
    document.getElementById("popup").style.display = "flex"; // Torna o pop-up visível
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Esconde o pop-up
}

function scrollToAbout(){
    document.getElementById("about").scrollIntoView({
        behavior: "smooth" // Rolagem suave
    });
}

