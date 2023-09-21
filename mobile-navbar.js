const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-list");
const logo = document.querySelector(".logo");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Adicione ou remova a classe 'hidden-logo' na logo
    logo.classList.toggle('hidden-logo');
});

// Adicione um event listener para o evento scroll no documento
document.addEventListener("scroll", () => {
    // Verifique a posição vertical da janela de visualização
    const scrollY = window.scrollY;

    // Verifique a altura do cabeçalho (ajuste conforme necessário)
    const headerHeight = 100; // Altura do cabeçalho em pixels

    // Se o scrollY for maior que a altura do cabeçalho, feche a interface
    if (scrollY > headerHeight) {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
        // Certifique-se de que a logo seja mostrada novamente
        logo.classList.remove('hidden-logo');
    }
});