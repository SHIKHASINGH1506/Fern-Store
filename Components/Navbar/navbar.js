navbarToggler = document.querySelector("#sidebar-toggler");
sidebarWrapper = document.querySelector("#sidebar-wrapper");
sidebar = document.querySelector("#sidebar");

navbarToggler.addEventListener('click', () => {
    sidebarWrapperClasses = sidebarWrapper.classList;
    sidebarClasses = sidebar.classList;
    sidebarWrapperClasses.toggle("show");
    sidebarClasses.toggle("view");
});