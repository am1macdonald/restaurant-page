function pageLoad(){

    const page = document.getElementById('content');
    const nav = document.createElement('nav');
    const pageTitle = document.createElement('h1');
    const navLinksDiv = document.createElement('div');
    const navBtn = document.createElement('button');
    const navBtnNames = ['Home', 'Menu', 'Contact'];
    const main = document.createElement('main');
    const imgDiv = document.createElement('div');
    const backgroundImg = document.createElement('IMG');
    const footer = document.createElement('footer');

    pageTitle.innerHTML = 'Restaurant de Lierre';

    navLinksDiv.id = 'nav-links';
    nav.appendChild(pageTitle);
    nav.appendChild(navLinksDiv);
    for (let i = 0; i < navBtnNames.length; i++) {
        let newBtn = navBtn.cloneNode();
        newBtn.innerHTML = navBtnNames[i];
        newBtn.className = 'nav-btn';
        newBtn.id = `${navBtnNames[i]}-btn`.toLowerCase();
        newBtn.addEventListener('click', launch);
        navLinksDiv.appendChild(newBtn);
    };

    imgDiv.id = 'img-div';
    backgroundImg.setAttribute('src', "..\\src\\nick-karvounis-Ciqxn7FE4vE-unsplash.jpg");
    backgroundImg.setAttribute('alt', "Une image d'un bon restaurant / A nice restaurant picture.");
    imgDiv.appendChild(backgroundImg);
    page.appendChild(imgDiv);


    const makeFooter = function() {

        const footerList = document.createElement('ul');
        const footerLink = document.createElement('a');
        const footerItem = document.createElement('li');
        const footerLinks = {
            'Github' : 'https://github.com/am1macdonald'
        };

        for (let link in footerLinks) {
            let newItem = footerItem.cloneNode();
            let newLink = footerLink.cloneNode();
            newLink.innerHTML = `${link}`;
            newLink.setAttribute('href', `${footerLinks[link]}`);
            newItem.appendChild(newLink);
            footerList.appendChild(newItem);
        }
        
        footer.appendChild(footerList);
    }

    renderHome();
    makeFooter();

    page.appendChild(nav);
    page.appendChild(main);
    page.appendChild(footer);
    
    function clearDoc(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function launch(e) {
        let btn = e.target.id;
        if (btn == 'menu-btn') {
            renderMenu();
        }
        else if (btn == 'contact-btn') {
            renderContact();
        }
        else if (btn == 'home-btn') {
            renderHome();
        };
    }
    function renderHome() {

        clearDoc(main);

        const heroDiv = document.createElement('div');
        const hero = document.createElement('div');
        const heroCopy = document.createElement('p');

        heroDiv.classList.add('content-div');
        hero.id = 'hero';

        heroCopy.innerText = 'New York\'s finest french dining experience.'


        hero.appendChild(heroCopy);

        heroDiv.appendChild(hero);

        main.appendChild(heroDiv);
    }
    function renderMenu() {

        clearDoc(main);

        const menuDiv = document.createElement('div');
        const menu = document.createElement('div');
        const menuHeader = document.createElement('h3');
        const listDiv = document.createElement('div');
        const menuList = document.createElement('ul');
        const menuItem = document.createElement('li');
        const menuPrice = document.createElement('p');
        const menuFooter = document.createElement('p');
        const menuItemsObj = {
            'Salade Paysanne' : 'with lardons, walnuts, and Roquefort cheese',
            'Duck Pâté en Croûte' : 'wild duck and porcini mushroom',
            'Boeuf Bourguignon': 'grass-fed beef in burgundy',
            'Café Crème Brûlée': 'rich cream & single origin coffee'
        };       

        menuDiv.classList.add('content-div');
        menu.id = 'menu';
        listDiv.id = 'menu-item-div';
        menuList.id = 'menu-list';
        menuHeader.innerHTML = `${todayMonth()}`;
        menuPrice.innerHTML = '$200';
        menuFooter.innerHTML = '*Please inquire about our wine list'

        for (let key in menuItemsObj) {
            const itemName = document.createElement('h4');
            itemName.classList.add('menu-item-title');
            const itemDescription = document.createElement('p');
            itemDescription.classList.add('menu-item-description');
            itemName.innerHTML = `${key}`;
            itemDescription.innerHTML = `${menuItemsObj[key]}`;

            const newMenuItem = menuItem.cloneNode();
            newMenuItem.classList.add('menu-item');
            newMenuItem.appendChild(itemName);
            newMenuItem.appendChild(itemDescription);
            menuList.appendChild(newMenuItem);
            
        };

        menu.appendChild(menuHeader);
        listDiv.appendChild(menuList);
        listDiv.appendChild(menuPrice);
        menu.appendChild(listDiv);
        menu.appendChild(menuFooter);

        menuDiv.appendChild(menu);

        main.appendChild(menuDiv);
    }
    function todayMonth() {

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
         'August', 'September', 'October', 'November', 'December'];
        const date = new Date();
        return months[date.getMonth()];
    }
    function renderContact() {
        clearDoc(main);

        const contactDiv = document.createElement('div');
        const contactInfo = document.createElement('div');
        const contactHeader = document.createElement('h3');
        const contactList = document.createElement('ul');
        const contactItem = document.createElement('li');
        const contactsObject = {
            'phone' : '1.888.898.9898',
            'email' : 'reservations@lierre.com',
        };
        const map = document.createElement('iframe');
        map.id = 'map';
        const mapAttributes = {
            'src': 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96650.48124223364!2d-73.9510135497831!3d40.79879568055046!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1638571461264!5m2!1sen!2sca',
            'allowfullscreen' : '',
            'loading' : 'lazy'
        }
        for (let att in mapAttributes){
            map.setAttribute(`${att}`, `${mapAttributes[att]}`);
        }

        contactHeader.innerHTML = 'Contact us';

        for (let contact in contactsObject) {
            let newContact = contactItem.cloneNode();
            newContact.innerHTML = `${contact}: ${contactsObject[contact]}`;
            contactList.appendChild(newContact);
        };

        contactDiv.classList.add('content-div');
        contactInfo.id = 'contact-info';

        


        contactInfo.appendChild(contactHeader);
        contactInfo.appendChild(contactList);
        contactInfo.appendChild(map);


        contactDiv.appendChild(contactInfo);
        main.appendChild(contactDiv);
    }
}
export {
    pageLoad
}