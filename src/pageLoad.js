function pageLoad(){

    const page = document.getElementById('content');
    const nav = document.createElement('nav');
    const pageTitle = document.createElement('h1');
    const navLinksDiv = document.createElement('div');
    const navBtn = document.createElement('button');
    const navBtnNames = ['Menu', 'Contact', 'Home'];
    const main = document.createElement('main');
    const imgDiv = document.createElement('div');
    const backgroundImg = document.createElement('IMG');
    const footer = document.createElement('footer');

    pageTitle.innerHTML = 'Restaurant de Lierre';

    navLinksDiv.id = 'nav-links';
    nav.appendChild(pageTitle);
    nav.appendChild(navLinksDiv);
    for (let i = 0; i < navBtnNames.length; i++) {
        console.log(`${navBtnNames[i]}-btn`.toLowerCase());
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
    main.appendChild(imgDiv);


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

        heroDiv.id = 'hero-div';
        hero.id = 'hero';

        heroDiv.appendChild(hero);

        main.appendChild(heroDiv);
    }
    function renderMenu() {

        clearDoc(main);





    }
    function renderContact() {
        clearDoc(main);
    }

    /*

    < nav >
        <H1>Restaurant de Lierre</H1>
        <div id="nav-links">
            <button id="menu-btn" class="nav-btn">Menu</button>
            <button id="contact-btn" class="nav-btn">Contact</button>
            <button id="top-btn" class="nav-btn">Top</button>
        </div>
    </nav >
    <main>
        <div id="img-div">
                <img src="..\src\nick-karvounis-Ciqxn7FE4vE-unsplash.jpg" alt="Une image d'un bon restaurant/A nice restaurant picture.">
        </div>

        <div id="hero-div">
            <div id="hero">

            </div>
        </div>



    // UP TO HERE



        <div id="menu-div">
            <div id="menu"></div>
        </div>
        <div id="contact-div">
            <div id="contact-info"></div>
        </div>
    </main>
    <footer>
        <div id="footer-stuff">
            <div id="links">

            </div>
            <div id="credits">

            </div>
        </div>
    </footer>

    */
}


export {
    pageLoad
}