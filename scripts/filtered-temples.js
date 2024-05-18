const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Trujillo,Peru",
        location: "Trujillo,Peru",
        dedicated: "2015, June, 21",
        area: 2620,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/Trujillo-Peru-Temple-2.jpg"
    },
    {
        templeName: "Chile,Santiago",
        location: "Chile, Santiago",
        dedicated: "1983, September, 17",
        area: 20831,
        imageUrl: "https://www.faroalasnaciones.com/wp-content/uploads/2022/11/0604e00377474ca519f263ea54d84109stgo.jpg"
    },
    {
        templeName: "Colombia,Barranquilla",
        location: "Colombia,Barranquilla",
        dedicated: "2018, December, 9",
        area: 21414,
        imageUrl: "https://files.mormonsud.org/wp-content/uploads/2018/11/Templo-de-Barranquilla-Colombia.jpg"
    }
];

createTempleCard(temples);

const OldLink = document.querySelector("#Old");
const NewLink = document.querySelector("#New");
const LargeLink = document.querySelector("#Large");
const SmallLink = document.querySelector("#Small");
const HomeLink = document.querySelector("#Home");
const año = 1900;
const año2 = 2000;
const size = 90000;
const size2 = 10000;
HomeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

OldLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(", ")[0]);
        return year < año;
    });
    createTempleCard(filteredTemples);
});
NewLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(", ")[0]);
        return year > año2;
    });
    createTempleCard(filteredTemples);
});
LargeLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.area);
        return year > size;
    });
    createTempleCard(filteredTemples);
});
SmallLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.area);
        return year < size2;
    });
    createTempleCard(filteredTemples);
});
function createTempleCard(filteredTemples) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        img.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        grid.appendChild(card);
    });
}