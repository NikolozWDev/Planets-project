export function header() {
    
    const htmlHeader = `
        <div class="main-header">
            <p class="header-title">THE PLANETS</p>
            <div class="planet-links-container">
                <a href="mercury.html" class="planet-links">MERCURY</a>
                <a href="venus.html" class="planet-links">VENUS</a>
                <a href="earth.html" class="planet-links">EARTH</a>
                <a href="mars.html" class="planet-links">MARS</a>
                <a href="jupiter.html" class="planet-links">JUPITER</a>
                <a href="saturn.html" class="planet-links">SATURN</a>
                <a href="uranus.html" class="planet-links">URANUS</a>
                <a href="neptune.html" class="planet-links">NEPTUNE</a>
            </div>
            <img class="burger-bar" src="../assets/Group.png">
        </div>
    `;

    document.querySelector('.header').innerHTML = htmlHeader;

    let elementsClass = document.querySelectorAll('.planet-links');
    elementsClass.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.borderTop = '3px solid rgba(65, 158, 187, 1)';
        })
        element.addEventListener('mouseout', () => {
            element.style.borderTop = '';
        })
    })

}