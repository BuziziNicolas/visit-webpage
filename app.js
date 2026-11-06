const inventory = [
    { name: "Laptop", price: 1200, quantity: 2, inStock: true },
    { name: "Desk Chair", price: 180, quantity: 15, inStock: true },
    { name: "Monitor", price: 300, quantity: 0, inStock: false },
    { name: "Bookshelf", price: 95, quantity: 8, inStock: true },
    { name: "Headphones", price: 150, quantity: 1, inStock: true },
    { name: "Desk Lamp", price: 40, quantity: 0, inStock: false },
];

//filtering

const outOfStock = inventory.filter((product) => {
    return product.inStock === false
})

console.log(outOfStock)

//maping

const stockLabels = inventory.map((product) =>
    product.quantity < 3
        ? `${product.name}: Low stock`
        : `${product.name}: OK`
);

console.log(stockLabels);


//reduce

const totalValue = inventory.reduce((total, product) => {
    if (product.inStock === true) {
        return total + product.price * product.quantity;
    }

    return total;
}, 0);

console.log(totalValue);

//if else condition
const inventor =
    { totalValue: 6010 }

if (totalValue < 1000) {
    console.log("Reorder needed");
} else {
    console.log("Inventory healthy");
}


