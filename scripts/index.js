import { header } from "../data/header.js";
import { dataPlanet } from "../data/planets.js";
header();


// return page content
function GenerateContent(index) {
    
    return `
    
    <!-- content buttons -->

        <div class="menubar">
                
            <a href="mercury.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl1"></div>
                    <p class="planetname">MERCURY</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="venus.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl2"></div>
                    <p class="planetname">VENUS</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="earth.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl3"></div>
                    <p class="planetname">EARTH</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="mars.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl4"></div>
                    <p class="planetname">MARS</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="jupiter.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl5"></div>
                    <p class="planetname">JUPITER</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="saturn.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl6"></div>
                    <p class="planetname">SATURN</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="uranus.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl7"></div>
                    <p class="planetname">URANUS</p>
                </div>
                <p class="container-right">></p>
            </a>
            <a href="neptune.html" class="menubar-container">
                <div class="container-left">
                    <div class="divplanet pl8"></div>
                    <p class="planetname">NEPTUNE</p>
                </div>
                <p class="container-right">></p>
            </a>

        </div>


    <div class="buttons-div delete1">
        <button class="buttons-div-button anotherbutton" data-planet-index2="${index}">OVERVIEW</button>
        <button class="buttons-div-button anotherbutton" data-planet-index2="${index}">STRUCTURE</button>
        <button class="buttons-div-button anotherbutton" data-planet-index2="${index}">SURFACE</button>
    </div>


    <div class="main-content-container">
    <!-- main selector (planet, content, content buttons) -->
    <div class="main-selector">


        <div class="main-img-selector">
            <div class="image-absolute">
            <img class="planet both1 animation1" src="${dataPlanet[index].planetImage1}">
            <img id="planet-images" class="invisible animation1" src="${dataPlanet[index].planetImage1}">
            <img class="planet-2" src="${dataPlanet[index].planetImage2}">
            <img class="planet-3" src="${dataPlanet[index].planetImage3}">
        </div>
        </div>


        <div class="main-content-selector animation2">

            <div class="content-selector">
                <p class="content-title">${dataPlanet[index].titleName}</p>
                <p class="content-text">${dataPlanet[index].content1}
                    </p>
                <p class="content-source">Source : <a href="${dataPlanet[index].source}" target="_blank" class="source-link">Wikipedia</a></p>
            </div>
            
            <div class="delete-it">
            <div class="buttons-div">
                <button class="buttons-div-button anotherbutton2" data-planet-index="${index}"><span class="button-number">01</span> OVERVIEW</button>
                <button class="buttons-div-button anotherbutton2" data-planet-index="${index}"><span class="button-number">02</span> INTERNAL STRUCTURE</button>
                <button class="buttons-div-button anotherbutton2" data-planet-index="${index}"><span class="button-number">03</span> SURFACE GEOLOGY</button>
            </div>
        </div>

        </div>


    </div>
</div>


<div class="main-buttons-container">
    <!-- record containers -->
    <div class="record-container">

        <div class="record-selector">
            <p class="record-left">ROTATION TIME</p>
            <p class="record-right">${dataPlanet[index].button1Content}</p>
        </div>
        <div class="record-selector">
            <p class="record-left">REVOLUTION TIME</p>
            <p class="record-right">${dataPlanet[index].button2Content}</p>
        </div>
        <div class="record-selector">
            <p class="record-left">RADIUS</p>
            <p class="record-right">${dataPlanet[index].button3Content}</p>
        </div>
        <div class="record-selector">
            <p class="record-left">AVERAGE TEMP.</p>
            <p class="record-right">${dataPlanet[index].button4Content}</p>
        </div>

    </div>
</div>
    `;

};



    // Generate with HTML with Planet Pages
    const mercuryContent = document.querySelector('.mercury');
    const venusContent = document.querySelector('.venus');
    const earthContent = document.querySelector('.earth');
    const marsContent = document.querySelector('.mars');
    const jupiterContent = document.querySelector('.jupiter');
    const saturnContent = document.querySelector('.saturn');
    const uranusContent = document.querySelector('.uranus');
    const neptuneContent = document.querySelector('.neptune');
    
    if (mercuryContent) {
        mercuryContent.innerHTML = GenerateContent(0);
    }
    if (venusContent) {
        venusContent.innerHTML = GenerateContent(1);
    }
    if(earthContent) {
        earthContent.innerHTML = GenerateContent(2)
    }
    if(marsContent) {
        marsContent.innerHTML = GenerateContent(3)
    }
    if(jupiterContent) {
        jupiterContent.innerHTML = GenerateContent(4)
    }
    if(saturnContent) {
        saturnContent.innerHTML = GenerateContent(5)
    }
    if(uranusContent) {
        uranusContent.innerHTML = GenerateContent(6)
    }
    if(neptuneContent) {
        neptuneContent.innerHTML = GenerateContent(7)
    }





    // make website functionality
function manipulation() {


        // active Menu (BurgerBar)
        const burgerMenu = document.querySelector('.burger-bar')

        burgerMenu.addEventListener('click', () => {
            document.querySelector('.menubar').classList.toggle('active');
            if(burgerMenu.src.includes('dasdw.png')) {
                burgerMenu.src = `../assets/Group.png`
            } else {
            burgerMenu.src = '../assets/dasdw.png'
        }
        });

    
    
    
        // buttons manipulation with Colors pc / Ipad version
        let lastclicked = null;
        let lastclicked2 = null;

        const buttons = document.querySelectorAll('.anotherbutton2');
        let i2 = 0;
        while(i2 < buttons.length) {
            let allButton = buttons[i2]

            allButton.addEventListener('click', () => {
                let plIn = allButton.dataset.planetIndex;
                if(lastclicked) {
                    lastclicked.style.backgroundColor = 'rgba(7, 7, 36, 1)'
                }
                buttons[0].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn].content1;
                    document.querySelector('.planet-2').classList.remove('active2')
                    document.querySelector('.planet-3').classList.remove('active3')
                });
                buttons[1].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn].content2;
                    document.querySelector('.planet-2').classList.add('active2')
                    document.querySelector('.planet-3').classList.remove('active3')
                });
                buttons[2].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn].content3;
                    document.querySelector('.planet-2').classList.remove('active2')
                    document.querySelector('.planet-3').classList.add('active3')
                });
                allButton.style.backgroundColor = dataPlanet[plIn].animationColor
                lastclicked = allButton;
            })


            i2++;
        };


        if(buttons.length > 0) {
            buttons[0].click()
        }


        
        
        // buttons manipulation with Colors phone version
        const anotherbuttons = document.querySelectorAll('.anotherbutton');
        let i3 = 0;
        while(i3 < anotherbuttons.length) {
            let another = anotherbuttons[i3];
            another.addEventListener('click', () => {
                let plIn2 = another.dataset.planetIndex2;
                console.log(plIn2)
                if(lastclicked2) {
                    lastclicked2.style.borderBottom = `3px solid rgba(7, 7, 36, 1)`
                }
                anotherbuttons[0].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn2].content1;
                    document.querySelector('.planet-2').classList.remove('active2')
                    document.querySelector('.planet-3').classList.remove('active3')
                });
                anotherbuttons[1].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn2].content2;
                    document.querySelector('.planet-2').classList.add('active2')
                    document.querySelector('.planet-3').classList.remove('active3')
                });
                anotherbuttons[2].addEventListener('click', function() {
                    document.querySelector('.content-text').innerHTML = dataPlanet[plIn2].content3;
                    document.querySelector('.planet-2').classList.remove('active2')
                    document.querySelector('.planet-3').classList.add('active3')
                });
                another.style.borderBottom = `3px solid ${dataPlanet[plIn2].animationColor}`;
                lastclicked2 = another
            })
            i3++;
        };
        if(anotherbuttons.length > 0) {
            anotherbuttons[0].click()
        }




        // buttons manipulation with Colors hover
        let plLinks = document.querySelectorAll('.planet-links');
        let i4 = 0;
        while(i4 < plLinks.length) {
            let allPlLinks = plLinks[i4];
            allPlLinks.addEventListener('mouseenter', () => {
                let plLinksHover = allPlLinks.dataset.planetHover;
                allPlLinks.style.borderTop = `3px solid ${dataPlanet[plLinksHover].animationColor}`
            })
            i4++;
        };
    
}
manipulation();



            // // button mousemove effect
            // const element2 = document.querySelectorAll('.test');
            // let i5 = 0;
            // while(i5 < element2.length) {

            //     let another2 = element2[i5];

            //     allButton.addEventListener("mousemove", (event) => {
            //         if(element2) {
            //         let dataIndex = another2.dataset.colorData;
            //         another2.style.backgroundColor = `${dataPlanet[dataIndex].animationColor}`
            //         another2.style.left = `${event.clientX - 15}px`;
            //         another2.style.top = `${event.clientY - 15}px`;
            //         }
            //     });

            //     i5++;
            // };