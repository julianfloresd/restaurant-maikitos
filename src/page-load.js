import createHomePage from './home'
import createMenuPage from './menu';
import createContactPage from './contact';
import createTabs from './tabs'

function initialLoad() {
    createTabs();
    createHomePage();
}

export default initialLoad;
