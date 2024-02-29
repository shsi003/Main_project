document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const accordion_toggle = accordion.querySelector('.accordion_toggle');
        const accordion_content = accordion.querySelector('.accordion_content');

        accordion_toggle.addEventListener('click', () => {
            accordion_content.classList.toggle('accordion_content--visible');
        });
    });
});
