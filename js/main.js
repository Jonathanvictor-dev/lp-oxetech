const navbarMenu = document.querySelectorAll('.nav-links li a');
const sidebarMenu = document.querySelectorAll('.sidebar-links li a');
const sections = document.querySelectorAll("section");

// Functions 
const openSidebarBtn = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('openSidebar');
};

const closeSidebarBtn = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('openSidebar');
};

// Events
window.addEventListener('scroll', () => {
    let currentNavbar = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentNavbar = section.getAttribute('id');
        };
    });

    navbarMenu.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentNavbar}`) {
            link.classList.add('active');
        };
    });
});

window.addEventListener('scroll', () => {
    let currentSidebar = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSidebar = section.getAttribute('id');
        };
    });

    sidebarMenu.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSidebar}`) {
            link.classList.add('active');
        };
    });
});

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