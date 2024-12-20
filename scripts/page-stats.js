(() => {
    window.addEventListener('load', () => {
        document.getElementsByClassName("load_time")[0].innerHTML = 
            `Страница загружена за ${performance.mark('pageEnd').startTime.toFixed(2)} мс`;
    });
})();

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const menuItems = document.querySelectorAll('.header__nav-item');
        const currentPage = document.location.pathname;
        
        console.log(currentPage)
        menuItems.forEach(item => {
            console.log(item.getAttribute('href'))
            if (currentPage.endsWith('/') && item.getAttribute('href').endsWith("index.html") || currentPage.includes(item.getAttribute('href'))) {
                
                item.classList.add('header__nav-item--active');
            }
        });

        menuItems.forEach(item => {
            item.addEventListener('mouseover', function () {
                item.style.color = '#adc7b5';
            });
            item.addEventListener('mouseout', function () {
                item.style.color = '#000000';
            });
        });
    });
})();