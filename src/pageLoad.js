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
    const footerText = document.createElement('p');

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

    footerText.innerHTML = 'Please call or email to make a reservation.';

    footer.appendChild(footerText);


    renderHome();

    page.appendChild(nav);
    page.appendChild(main);
    page.appendChild(footer);
    
    function clearDoc(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function launch(e) {
        console.log(e.target.id);
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
        const heroTitle = document.createElement('h2');
        const heroCopy = document.createElement('p');

        heroDiv.classList.add('content-div');
        hero.id = 'hero';

        heroTitle.innerHTML = 'Bienvenue,';
        heroCopy.innerText = 'Dine with us and experience the finest, french culinary experience this side of the Atlantic.'


        hero.appendChild(heroTitle);
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
            'Salade Paysanne' : 'a salad with stuff in it.',
            'Duck Pâté en Croûte' : 'ground duck liver stuffed into pastry.',
            'Boeuf Bourguignon' : 'cow-type meat simmered until connective tissue starts to break down.',
            'Coffee Crème Brûlée' : 'coffee and sugar in a bowl baked and then blasted with a blowtorch.'
        };       

        menuDiv.classList.add('content-div');
        menu.id = 'menu';
        listDiv.id = 'menu-item-div';
        menuList.id = 'menu-list';
        menuHeader.innerHTML = 'December\'s Menu';
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
    function renderContact() {
        clearDoc(main);

        const contactDiv = document.createElement('div');
        const contactInfo = document.createElement('div');

        contactDiv.classList.add('content-div');
        contactInfo.id = 'contact-info';

        contactDiv.appendChild(contactInfo);

        main.appendChild(contactDiv);
    }
}
export {
    pageLoad
}