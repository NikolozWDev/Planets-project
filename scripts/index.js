import { header } from "../data/header.js";
import { dataPlanet } from "../data/planets.js";
header();


function GenerateContent(index) {
    return `
    
    <!-- content buttons -->
    <div class="buttons-div delete1">
        <button class="buttons-div-button">OVERVIEW</button>
        <button class="buttons-div-button">STRUCTURE</button>
        <button class="buttons-div-button">SURFACE</button>
    </div>


    <div class="main-content-container">
    <!-- main selector (planet, content, content buttons) -->
    <div class="main-selector">


        <div class="main-img-selector">
            <div class="image-absolute">
            <img class="planet both1" src="${dataPlanet[index].planetImage1}">
            <img id="planet-images" class="invisible" src="${dataPlanet[index].planetImage1}">
            <img class="planet-2" src="${dataPlanet[index].planetImage2}">
            <img class="planet-3" src="${dataPlanet[index].planetImage3}">
        </div>
        </div>


        <div class="main-content-selector">

            <div class="content-selector">
                <p class="content-title">${dataPlanet[index].titleName}</p>
                <p class="content-text">${dataPlanet[index].content1}
                    </p>
                <p class="content-source">Source : <a href="${dataPlanet[index].source}" target="_blank" class="source-link">Wikipedia</a></p>
            </div>
            
            <div class="delete-it">
            <div class="buttons-div">
                <button class="buttons-div-button"><span class="button-number">01</span> OVERVIEW</button>
                <button class="buttons-div-button"><span class="button-number">02</span> INTERNAL STRUCTURE</button>
                <button class="buttons-div-button"><span class="button-number">03</span> SURFACE GEOLOGY</button>
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
    `

};


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