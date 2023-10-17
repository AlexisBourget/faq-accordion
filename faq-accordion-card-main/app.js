document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('h2');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const panel = item.nextElementSibling; // L'élément p suivant le h2

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
                item.style.fontWeight = 'normal';
            } else {
                panel.style.display = 'block';
                item.style.fontWeight = 'bold';
            }
        });
    });
});
