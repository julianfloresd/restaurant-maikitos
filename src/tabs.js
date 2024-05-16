import createContactPage from "./contact";
import createHomePage from "./home";
import createMenuPage from "./menu";

const createTabs = () => {
    const content = document.querySelector('#content');

    //NavBar
    const navBar = document.createElement('div')
    navBar.classList.add('nav-container')
    content.appendChild(navBar)

    //NavBar Logo
    const logo = document.createElement('span')
    logo.classList.add('logo')
    logo.textContent = `Maikitos`
    navBar.appendChild(logo)

    //Tabs
    const tabs = document.createElement('ul')
    navBar.appendChild(tabs)

    const homeTab = document.createElement('li')
    homeTab.textContent = `Home`
    homeTab.id = 'home-tab'
    tabs.appendChild(homeTab)

    const menuTab = document.createElement('li')
    menuTab.textContent = `Menu`
    menuTab.id = 'menu-tab'
    tabs.appendChild(menuTab)

    const contactTab = document.createElement('li')
    contactTab.textContent = `Contact Us`
    contactTab.id = 'contact-tab'
    tabs.appendChild(contactTab)

    homeTab.addEventListener('click', () => {
        clearContent();
        createHomePage();
    })
    menuTab.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    contactTab.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

const clearContent = () => {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".pageContent");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;


