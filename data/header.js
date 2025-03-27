export function header() {
    const htmlHeader = `
        <div class="main-header">
            <p class="header-title">THE PLANETS</p>
            <div class="planet-links-container">
                <a class="planet-links">MERCURY</a>
                <a class="planet-links">VENUS</a>
                <a class="planet-links">EARTH</a>
                <a class="planet-links">MARS</a>
                <a class="planet-links">JUPITER</a>
                <a class="planet-links">SATURN</a>
                <a class="planet-links">URANUS</a>
                <a class="planet-links">NEPTUNE</a>
            </div>
            <img class="burger-bar" src="../assets/Group.png">
        </div>
    `;

    document.querySelector('.header').innerHTML = htmlHeader;
}