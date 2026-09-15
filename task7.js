// Task 1 - Product API


let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("Task 1 - Products");

        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });

        let productDetails = products.map(product => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Product Names and Prices:", productDetails);

        let expensiveProducts = products.filter(product => product.price > 100);

        console.log("Products above $100:", expensiveProducts);

        let electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("First Electronics Product:", electronicsProduct);

        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("Total Price:", totalPrice);

        let sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("Highest to Lowest:", sortedProducts);

    })
    .catch(error => {
        console.log("Something went wrong:", error);
    })
    .finally(() => {
        console.log("Task 1 completed");
    });


// Task 2 - Product Category Dashboard


function showDashboard(products) {

    let electronics = products.filter(
        product => product.category === "electronics"
    );

    let jewelery = products.filter(
        product => product.category === "jewelery"
    );

    let mensClothing = products.filter(
        product => product.category === "men's clothing"
    );

    let womensClothing = products.filter(
        product => product.category === "women's clothing"
    );

    let prices = products.map(product => product.price);

    let highestPrice = Math.max(...prices);
    let lowestPrice = Math.min(...prices);

    let totalPrice = products.reduce((total, product) => {
        return total + product.price;
    }, 0);

    let averagePrice = totalPrice / products.length;

    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${mensClothing.length}
Women's Clothing: ${womensClothing.length}

Highest Price: $${highestPrice}
Lowest Price: $${lowestPrice}
Average Price: $${averagePrice.toFixed(2)}
`);
}

fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        showDashboard(products);
    })
    .catch(error => {
        console.log("Dashboard error:", error);
    });


// Task 3 - User and Post API


let usersApi = "https://jsonplaceholder.typicode.com/users";
let postsApi = "https://jsonplaceholder.typicode.com/posts";

fetch(usersApi)
    .then(response => response.json())
    .then(users => {

        console.log("Task 3 - Users");

        let userNames = users.map(user => user.name);

        console.log("User Names:", userNames);

        users.forEach(user => {
            console.log(user.name, "-", user.email);
        });

        let user5 = users.find(user => user.id === 5);

        console.log("User with ID 5:", user5);

        let city = "Gwenborough";

        let cityUsers = users.filter(
            user => user.address.city === city
        );

        console.log("Users from", city, ":", cityUsers);

    })
    .catch(error => {
        console.log("User API error:", error);
    });


fetch(postsApi)
    .then(response => response.json())
    .then(posts => {

        let userPosts = posts.filter(
            post => post.userId === 1
        );

        console.log("Posts by User ID 1:", userPosts);

        console.log(
            "Number of posts by User ID 1:",
            userPosts.length
        );

        let longTitle = posts.find(
            post => post.title.length > 50
        );

        console.log(
            "First post with title above 50 characters:",
            longTitle
        );

    })
    .catch(error => {
        console.log("Post API error:", error);
    });


// Task 4 - API Search


function searchProducts(products, category, maxPrice) {

    let result = products.filter(product => {
        return product.category === category &&
               product.price <= maxPrice;
    });

    console.log("Search Result:", result);
}

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        let category = prompt("Enter product category:");

        let maxPrice = Number(
            prompt("Enter maximum price:")
        );

        searchProducts(products, category, maxPrice);

    })
    .catch(error => {
        console.log("Search error:", error);
    });


// Task 5 - API Shopping Cart


function calculateCart(cart) {

    let total = cart.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    let discount = 0;

    if (total > 200) {
        discount = 20;
    } else if (total > 100) {
        discount = 10;
    }

    let discountAmount = total * discount / 100;

    let finalAmount = total - discountAmount;

    console.log("===== CART =====");

    cart.forEach((product, index) => {
        console.log(
            `Product ${index + 1}: ${product.title}`
        );

        console.log(
            `Price: $${product.price}`
        );
    });

    console.log("Total:", `$${total.toFixed(2)}`);
    console.log("Discount:", `${discount}%`);
    console.log("Final Amount:", `$${finalAmount.toFixed(2)}`);
}

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("Available Products:");

        products.forEach(product => {
            console.log(
                `ID: ${product.id} - ${product.title} - $${product.price}`
            );
        });

        let firstId = Number(
            prompt("Enter first product ID to add to cart:")
        );

        let secondId = Number(
            prompt("Enter second product ID to add to cart:")
        );

        let cart = [];

        let firstProduct = products.find(
            product => product.id === firstId
        );

        let secondProduct = products.find(
            product => product.id === secondId
        );

        if (firstProduct) {
            cart.push(firstProduct);
        }

        if (secondProduct) {
            cart.push(secondProduct);
        }

        calculateCart(cart);

    })
    .catch(error => {
        console.log("Cart error:", error);
    });


// Task 6 - FakeStore Product Report


function productReport(products) {

    console.log("========== PRODUCT REPORT ==========");

    console.log("Total Products:", products.length);


    let productNames = products.map(
        product => product.title
    );

    console.log("Product Names:", productNames);


    let expensiveProducts = products.filter(
        product => product.price > 100
    );

    console.log("Products Above $100:", expensiveProducts);


    let electronicsProduct = products.find(
        product => product.category === "electronics"
    );

    console.log(
        "Electronics Product:",
        electronicsProduct
    );


    let totalValue = products.reduce((total, product) => {
        return total + product.price;
    }, 0);

    console.log(
        "Total Product Value:",
        `$${totalValue.toFixed(2)}`
    );


    let anyAbove500 = products.some(
        product => product.price > 500
    );

    console.log(
        "Any Product Above $500:",
        anyAbove500
    );


    let allAbove1 = products.every(
        product => product.price > 1
    );

    console.log(
        "All Products Above $1:",
        allAbove1
    );


    let sortedProducts = [...products].sort(
        (a, b) => b.price - a.price
    );

    console.log(
        "Highest → Lowest:",
        sortedProducts
    );
}

fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        productReport(products);
    })
    .catch(error => {
        console.log("Product report error:", error);
    })
    .finally(() => {
        console.log("Product report completed");
    });