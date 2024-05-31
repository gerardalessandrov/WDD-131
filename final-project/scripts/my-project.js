const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open")
    hambutton.classList.toggle("open");
    ;
});
const products = [{
    productName: "Empanadas de pollo",
    descripcion: "Empanadas rellenas de lomo de pollo",
    price: 2.50,
    imageUrl: "https://www.superpollo.cl/img/recetas/empanadas-de-pollo.webp"
},
{
    productName: "Empanadas de pizza",
    descripcion: "Empanadas rellenas de jamon,queso,pomarola y oregano",
    price: 3.00,
    imageUrl: "https://www.caciquefoods.com/wp-content/uploads/2015/08/cacique-empanada-final-h-blue-1.jpg"

},
{
    productName: "Pastel de manzana ",
    descripcion: "Pastel relleno de manzana y dulce de azucar",
    price: 2.50,
    imageUrl: "https://katenm.pe/wp-content/uploads/2021/08/pastel-de-manzana.jpg"
},
{
    productName: "Pastel de platano ",
    descripcion: "Pastel relleno de platano y dulce de azucar",
    price: 2.50,
    imageUrl: "https://www.labuena.com.co/wp-content/uploads/2021/01/3-formas-de-preparar-platanos-rellenos.jpg"
},
{
    productName: "Pañuelo",
    descripcion: "Pastel relleno de manjarblanco",
    price: 2.50,
    imageUrl: "https://i.ytimg.com/vi/8S3HV32u0jU/maxresdefault.jpg"
},
{
    productName: "Miloja",
    descripcion: "Pastel relleno de manjarblanco y azucar impalpable",
    price: 2.50,
    imageUrl: "https://www.elsaloncito.com/wp-content/uploads/2019/11/DSC_0237-e1581705328510.jpg"

},
{
    productName: "Botija",
    descripcion: "Pastel relleno de manjarblanco",
    price: 2.50,
    imageUrl: "https://www.midiariodecocina.com/wp-content/uploads/2021/09/Cachitos-con-manjar02.jpg"
},
{
    productName: "Salchipollo",
    descripcion: "Pollo,papas fritas,ensalada y cremas",
    price: 8.00,
    imageUrl: "https://i.ytimg.com/vi/J-HmZyk4SA8/maxresdefault.jpg"
},
{
    productName: "Salchipapa",
    descripcion: "Papas fritas,hotdog y ensalada",
    price: 5.00,
    imageUrl: "https://www.ytuqueplanes.com/imagenes/fotos/novedades/dia-salchipapa-2020.jpg"
},
{
    productName: "Hamburguesa de Carne",
    descripcion: "Pan,hamburguesa de carne,ensalada y papas al hilo",
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
        flavor.innerHTML = `<span class="label">Descripcion:</span> ${product.descripcion}`;
        price.innerHTML = `<span class="label">Precio:S/</span> ${product.price}`;
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