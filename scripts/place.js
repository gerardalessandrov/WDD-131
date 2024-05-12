const temperature = 25;
const velocity = 5;
function CalculateWindChill(t, v) {
    const windchillfarenheit = 35.74 + 0.6215 * t - 35.75 * v ** 0.16 + 0.4275 * t * v ** 0.016;
    return windchillfarenheit;
}
const windchill_factor = CalculateWindChill(temperature, velocity);
document.addEventListener("DOMContentLoaded", function () {
    const weatherSection = document.querySelector('.weather-section');
    const windChillElement = document.createElement('p');
    windChillElement.textContent = `Windchill: ${windchill_factor.toFixed(2)} °F`; // Display windchill in Fahrenheit with two decimal places
    weatherSection.appendChild(windChillElement);
});