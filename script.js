
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('hovered');
        });

        icon.addEventListener('mouseout', () => {
            icon.classList.remove('hovered');
        });
    });
});
