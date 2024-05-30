
const products = [{
    productName: "Empanadas",
    flavor: "pollo",
    price: 2.50,
    imageUrl: "https://www.superpollo.cl/img/recetas/empanadas-de-pollo.webp"
},
{
    productName: "Empanada de pizza",
    flavor: "jamon,queso,Pomarola y oregano",
    price: 3.00,
    imageUrl: "https://www.caciquefoods.com/wp-content/uploads/2015/08/cacique-empanada-final-h-blue-1.jpg"

},
{
    productName: "Pastel de manzana",
    flavor: "manzana",
    price: 3.00,
    imageUrl: "https://katenm.pe/wp-content/uploads/2021/08/pastel-de-manzana.jpg"
},
{
    productName: "Pastel de platano",
    flavor: "platano",
    price: 2.50,
    imageUrl: "https://www.labuena.com.co/wp-content/uploads/2021/01/3-formas-de-preparar-platanos-rellenos.jpg"
},
{
    productName: "Pañuelo",
    flavor: "manjarblanco",
    price: 2.50,
    imageUrl: "https://i.ytimg.com/vi/8S3HV32u0jU/maxresdefault.jpg"
},
{
    productName: "Miloja",
    flavor: "manjarblanco",
    price: 2.50,
    imageUrl: "https://www.elsaloncito.com/wp-content/uploads/2019/11/DSC_0237-e1581705328510.jpg"

},
{
    productName: "Botija",
    flavor: "manjarblanco",
    price: 2.50,
    imageUrl: "https://www.midiariodecocina.com/wp-content/uploads/2021/09/Cachitos-con-manjar02.jpg"
},
{
    productName: "Salchipollo",
    flavor: "papa y pollo",
    price: 8.00,
    imageUrl: "https://i.ytimg.com/vi/J-HmZyk4SA8/maxresdefault.jpg"
},
{
    productName: "Salchipapa",
    flavor: "papa y hotdog",
    price: 5.00,
    imageUrl: "https://www.ytuqueplanes.com/imagenes/fotos/novedades/dia-salchipapa-2020.jpg"
},
{
    productName: "Hamburguesa ",
    flavor: "carne",
    price: 5.00,
    imageUrl: "https://media.ambito.com/p/e8a1ff58fb2d15a7740287ae7cea4db5/adjuntos/239/imagenes/041/540/0041540110/1200x675/smart/galpon-hamburguesa-2jpg.jpg"
}
];
const HomeLink = document.querySelector(".home");
const CupcakeLink = document.querySelector(".cupcake");
const HamburguerLink = document.querySelector(".hamburguer");
price1 = 3.00;
price2 = 5.00;
HomeLink.addEventListener("click", () => {
    createProductsCard(products);
})
CupcakeLink.addEventListener("click", () => {
    const filteredProducts = products.filter(product => {
        const price_product = parseInt(product.price)
        return price_product <= price1;
    });
    createProductsCard(filteredProducts);
})
HamburguerLink.addEventListener("click", () => {
    const filteredProducts = products.filter(product => {
        const price_product = parseInt(product.price)
        return price_product >= price2;
    })
    createProductsCard(filteredProducts);
})

createProductsCard(products);
function createProductsCard(filteredProducts) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";
    filteredProducts.forEach(product => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let flavor = document.createElement("p");
        let img = document.createElement("img");
        name.textContent = product.productName;
        flavor.innerHTML = `<span class="label">Sabor:</span>${product.flavor}`;
        price.innerHTML = `<span class="label">Precio:S/</span>${product.price}`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.name}Product`);
        img.setAttribute("width", 400);
        img.setAttribute("height", 250);
        img.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(flavor);
        card.appendChild(img);
        grid.appendChild(card);
    });


}