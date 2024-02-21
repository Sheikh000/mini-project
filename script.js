const toggleButton = document.querySelector('.btn_one label');
const closeButton = document.querySelector('.btn_two label');
const sidebarMenu = document.querySelector('.sidebar_menu');


toggleButton.addEventListener('click', function() {
    
    sidebarMenu.classList.toggle('active');
});


closeButton.addEventListener('click', function() {
    
    sidebarMenu.classList.remove('active');
});

