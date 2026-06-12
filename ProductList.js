const cupcakes = [
    {
        name: "Carrot Cupcake",
        price: 49.99,
        image: "Images/Img cupcake/Carrot_cupcake.jpg"
    },
    {
        name: "Classic Cupcake",
        price: 89.99,
        image: "Images/Img cupcake/Classic_cupcake.jpg"
    },
    {
        name: "Chocolate Cupcake",
        price: 199.99,
        image: "Images/Img cupcake/Coco_cupcake.jpg"
    },
    {
        name: "Cream Cupcake",
        price: 49.99,
        image: "Images/Img cupcake/Cream_cupcake.jpg"
    },
    {
        name: "Oreo Cupcake",
        price: 89.99,
        image: "Images/Img cupcake/Oreo_cupcake.jpg"
    },
    {
        name: "Rainbow Cupcake",
        price: 89.99,
        image: "Images/Img cupcake/Rainbow_cupcake.jpg"
    },
    {
        name: "Sprinkels Cupcake",
        price: 199.99,
        image: "Images/Img cupcake/Sprinkels_cupcake.jpg"
    },
    {
        name: "Strawberry Cupcake",
        price: 49.99,
        image: "Images/Img cupcake/Strawberry_cupcake.jpg"
    }
];
const weddingCakes = [
    {
        name: "Britney",
        price: 49.99,
        image: "Images/Img weddingcake/Britney.jpg"
    },
    {
        name: "Diana",
        price: 49.99,
        image: "Images/Img weddingcake/Diana.jpg"
    },
    {
        name: "Elinor",
        price: 49.99,
        image: "Images/Img weddingcake/Elinor.jpg"
    },
    {
        name: "Lily",
        price: 49.99,
        image: "Images/Img weddingcake/Lily.jpg"
    },
        {
        name: "Lisa",
        price: 49.99,
        image: "Images/Img weddingcake/Lisa.jpg"
    },
    {
        name: "Mia",
        price: 49.99,
        image: "Images/Img weddingcake/Mia.jpg"
    },
    {
        name: "Victoria",
        price: 49.99,
        image: "Images/Img weddingcake/Victoria.jpg"
    },
    {
        name: "Zoe",
        price: 49.99,
        image: "Images/Img weddingcake/Zoe.jpg"
    }
];

const cakes = [...cupcakes, ...weddingCakes];
cakes.sort(() => Math.random() - 0.5);

const container = document.getElementById("products-display");

function renderProducts(list) {
    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">$${product.price}</p>
            </div>
        `;
    });
}

function showCupcakes() {
    renderProducts(cupcakes);
}

function showWedding() {
    renderProducts(weddingCakes);
}

function showAll() {
    renderProducts(cakes);
}

renderProducts(cakes);