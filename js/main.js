const navbarMenu = document.querySelectorAll('.nav-links li a');
const sidebarMenu = document.querySelectorAll('.sidebar-links li a');
const sections = document.querySelectorAll('section');
const backToTop = document.querySelector('.back-to-top');

// Sidebar
const openSidebarBtn = () => {
    document.querySelector('.sidebar').classList.add('openSidebar');
};

const closeSidebarBtn = () => {
    document.querySelector('.sidebar').classList.remove('openSidebar');
};

// Active Links
const updateActiveLinks = (menuLinks) => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        };
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');

        if (
            link.getAttribute('href') === `#${currentSection}`
        ) {
            link.classList.add('active');
        };
    });
};

// Scroll Event
window.addEventListener('scroll', () => {
    updateActiveLinks(navbarMenu);
    updateActiveLinks(sidebarMenu);
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  };
});
