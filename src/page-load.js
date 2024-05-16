import createHomePage from './home';
import createTabs from './tabs';
import createMenuPage from './menu';
import createContactPage from './contact';

function initialLoad() {
    createTabs();
    createHomePage();
}

export default initialLoad;
