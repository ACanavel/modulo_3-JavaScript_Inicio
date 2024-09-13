// scripts.js

// Añadir funcionalidad para resaltar la navegación actual
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = 'active';
        }
    }
});
