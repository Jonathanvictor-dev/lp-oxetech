const navbarMenu = document.querySelectorAll('.nav-links li a');
const sidebarMenu = document.querySelectorAll('.sidebar-links li a');

const openSidebarBtn = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('openSidebar');
};

const closeSidebarBtn = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('openSidebar');
};

navbarMenu.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active');
        navbarMenu.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            };
        });
    });
});

sidebarMenu.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active');
        sidebarMenu.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            };
        });
    });
});