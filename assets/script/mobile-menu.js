document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.header nav > ul');

    function handleMobileMenu() {
        if (window.innerWidth <= 950) {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'flex';
        }
    }

    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);

    mobileMenuBtn.addEventListener('click', function() {
        if (window.innerWidth <= 950) {
            mainNav.style.display = mainNav.style.display === 'none' ? 'flex' : 'none';
        }
    });
});