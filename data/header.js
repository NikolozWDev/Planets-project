
export function header() {
    
    const htmlHeader = `
        <div class="main-header">
            <p class="header-title">THE PLANETS</p>
            <div class="planet-links-container">
                <a href="mercury.html" class="planet-links" data-planet-hover="${0}">MERCURY</a>
                <a href="venus.html" class="planet-links" data-planet-hover="${1}">VENUS</a>
                <a href="earth.html" class="planet-links" data-planet-hover="${2}">EARTH</a>
                <a href="mars.html" class="planet-links" data-planet-hover="${3}">MARS</a>
                <a href="jupiter.html" class="planet-links" data-planet-hover="${4}">JUPITER</a>
                <a href="saturn.html" class="planet-links" data-planet-hover="${5}">SATURN</a>
                <a href="uranus.html" class="planet-links" data-planet-hover="${6}">URANUS</a>
                <a href="neptune.html" class="planet-links" data-planet-hover="${7}">NEPTUNE</a>
            </div>
            <img class="burger-bar" src="../assets/Group.png">
        </div>
    `;

    document.querySelector('.header').innerHTML = htmlHeader;

    let elementsClass = document.querySelectorAll('.planet-links');
    elementsClass.forEach((element) => {
        let linkdata = element.dataset.planetHover;
        element.addEventListener('mouseover', () => {
            element.style.borderTop = `3px solid ${linkdata}`;
        })
        element.addEventListener('mouseout', () => {
            element.style.borderTop = '';
        })
    })

}