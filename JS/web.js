/* adding the product items images and details */

const products = [
    {
        id: 1,
        name: "Fantasy Figure Collection",
        category: "Figurines",
        price: 4950,
        image: "https://images.unsplash.com/photo-1722498256995-fcc480892dfd?auto=format&fit=crop&w=900&q=85",
        description: "A colourful collectible figure set for display shelves and imaginative play."
    },
    {
        id: 2,
        name: "Toy Woody",
        category: "Figurines",
        price: 3850,
        image: "https://m.media-amazon.com/images/I/8142H2yCd7L._AC_SL1500_.jpg",
        description: "Mattel Disney and Pixar Toy Story 5 Interactables Woody 23 cm scale toy figure, movie sets and can talk to other figures"
    },
    {
        id: 3,
        name: "Spiderman Final Battle No Way Home",
        category: "Figurines",
        price: 2950,
        image: "https://toystorepakistan.pk/wp-content/uploads/2022/01/616a33BRYL._AC_SL1500_.jpg",
        description: "Figura SH Figuarts Spiderman Final Battle No Way Home Spiderman Marvel 15cm"
    },
    {
        id: 4,
        name: "LEGO Minifigures",
        category: "Figurines",
        price: 3150,
        image: "https://m.media-amazon.com/images/I/81IjwCtpO8L._AC_SL1500_.jpg",
        description: "A collectible LEGO Minifigures set featuring a fun assortment of colorful characters and themed accessories for imaginative play and collecting."
    },
    {
        id: 5,
        name: "Collector Dragon Figure",
        category: "Figurines",
        price: 5650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkJDrQPYxXCw9lpWPHlsL8VVcTI_XfnUghQduLoVi5Pi_p0Rlf8I8d88&s=10",
        description: "A fantasy dragon figure with a dramatic collector display style."
    },
    {
        id: 6,
        name: "Rainbow Stacking Rings",
        category: "Toys",
        price: 4250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAaedRnyefxODEyFmjzBZp2ehjGH3oAxt7dGGWmK5JhUBwkIo7mRZgws&s=10",
        description: "A colourful stacking toy that helps young children explore shapes, sizes and coordination."
    },
    {
        id: 7,
        name: "Building Blocks",
        category: "Toys",
        price: 2750,
        image: "https://i5.walmartimages.ca/asr/0e2683c0-d823-413d-9484-21b2be47a2d1.72f13a74c8ba7d13c1a2b1a2c36493b7.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        description: "Colourful building blocks that encourage creativity, construction skills and imaginative play."
    },
    {
        id: 8,
        name: "Dinosaur Adventure",
        category: "Toys",
        price: 3400,
        image: "https://m.media-amazon.com/images/I/81m1P3ZpmgL._AC_SL1300_.jpg",
        description: "A dinosaur-themed toy set for children who enjoy prehistoric creatures and adventure stories."
    },
    {
        id: 9,
        name: "Train Set with More Tracks & Carriages",
        category: "Toys",
        price: 4650,
        image: "https://m.media-amazon.com/images/I/81roRw3F-XL._AC_SL1500_.jpg",
        description: "Luxury Train Toys with Smoke, Light and Sound, Christmas Train Sets for Around The Tree, Toy Train Set for 3 4 5 6 7 8+ Years Old Boys Toddlers Gifts"
    },
    {
        id: 10,
        name: "Mini Toy Builder Set",
        category: "Toys",
        price: 3900,
        image: "https://m.media-amazon.com/images/I/91q85tcTb0L._SL1500_.jpg",
        description: "A colourful construction set that lets children create buildings, vehicles and imaginative designs."
    },
    {
        id: 11,
        name: "Adventure Tabletop Game",
        category: "Board Games",
        price: 6750,
        image: "https://images.unsplash.com/photo-1676651471150-0e3a5f8de05e?auto=format&fit=crop&w=900&q=85",
        description: "A family tabletop adventure game with exciting challenges and replay value."
    },
    {
        id: 12,
        name: "Ludo Family Fun",
        category: "Board Games",
        price: 5900,
        image: "https://lk-live-21.slatic.net/kf/Se0ca775f1ee840de8093f36059162408e.png",
        description: "A colourful family Ludo game combining simple rules, strategy and exciting competition."
    },
    {
        id: 13,
        name: "Word Builder Challenge",
        category: "Board Games",
        price: 3600,
        image: "https://cf.geekdo-images.com/mVmmntn2oQd0PfFrWBvwIQ__opengraph_left/img/H309VorTZlM7pGQDYn-e7r8SC0Y=/fit-in/445x445/filters:strip_icc()/pic404651.jpg",
        description: "A word-building game that helps players practise vocabulary while having fun."
    },
    {
        id: 14,
        name: "Connect Four",
        category: "Board Games",
        price: 7200,
        image: "https://5.imimg.com/data5/SELLER/Default/2025/7/528213462/WM/RI/YB/228557085/gaming-the-classic-game-of-connect-4-grid-get-4-in-a-row-strategy-game-multicolor.jpeg",
        description: "A fast and simple strategy game where players race to connect four pieces in a row."
    },
    {
        id: 15,
        name: "QP Monopoly Board Game The Classic Edition",
        category: "Board Games",
        price: 3100,
        image: "https://img.drz.lazcdn.com/static/lk/p/86502ff6b469ccf98ec41290510dc0af.jpg_720x720q80.jpg",
        description: "A property-trading game where players buy, sell and develop properties to build their fortune."
    },
    {
        id: 16,
        name: "Classic Blue Diecast Car",
        category: "Diecast Cars",
        price: 3250,
        image: "https://images.unsplash.com/photo-1579175374145-5760e2046318?auto=format&fit=crop&w=900&q=85",
        description: "A detailed blue diecast model car for display and collection."
    },
    {
        id: 17,
        name: "Red Classic Diecast Car",
        category: "Diecast Cars",
        price: 3550,
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=900&q=85",
        description: "A glossy red classic model with a sleek collector finish."
    },
    {
        id: 18,
        name: "Hot Wheels 5-Pack Die-Cast Toy Cars & Trucks",
        category: "Diecast Cars",
        price: 4100,
        image: "https://i5.walmartimages.com/seo/Hot-Wheels-Cars-5-Pack-of-Die-Cast-Toy-Cars-or-Trucks-in-1-64-Scale-Styles-May-Vary_ffdac783-94f0-4277-8898-f66d7d4fe37f.21ee62f1545675ef154a52e8577d9230.jpeg",
        description: "A colourful Hot Wheels diecast racer with a bold flame-inspired design, perfect for collecting and racing."
    },
    {
        id: 19,
        name: "Antique Car Model",
        category: "Diecast Cars",
        price: 4850,
        image:"https://m.media-amazon.com/images/I/61k4NS4UZEL._SL1500_.jpg",
        description: "Antique Car Model Collectible Miniature Car with Spoked Wheels"
    },
    {
        id: 20,
        name: "Mini City Police Car",
        category: "Diecast Cars",
        price: 3350,
        image: "https://m.media-amazon.com/images/I/81RqSKKDtvL._AC_SL1500_.jpg",
        description: "A miniature police car designed for rescue missions"
    },
    {
        id: 21,
        name: "Avatar",
        category: "Figurines",
        price: 2850,
        image: "https://image-cdn.ubuy.com/500_500_100/69502c80c7305a844104377c-avatar-fire-and-ash-neytiri-omatikaya.jpg",
        description: 'Fire and Ash Neytiri (Omatikaya Warrior) 7" Action Figure Collector Edition - McFarlane Toys'
    },
    {
        id: 22,
        name: "Blue Cuddle Bear",
        category: "Toys",
        price: 5200,
        image: "https://m.media-amazon.com/images/I/61iwy6iWxHL._AC_UF350,350_QL80_.jpg",
        description: "A soft blue teddy bear that makes a comforting and friendly companion for children."
    },
    {
        id: 23,
        name: "Snakes and Ladders",
        category: "Board Games",
        price: 6450,
        image: "https://media.diy.com/is/image/KingfisherDigital/the-magic-toy-shop-classic-snakes-ladders-traditional-board-game-for-kids-adults-families-play~5033849047887_02c_MP?$MOB_PREV$&$width=600&$height=600",
        description: "A colourful classic where players climb ladders, avoid snakes and race to the finish."
    },
    {
        id: 24,
        name: "Racing Formula",
        category: "Diecast Cars",
        price: 4600,
        image: "https://m.media-amazon.com/images/I/8149QEDqlqL._AC_SL1500_.jpg",
        description: "A Formula-style miniature racing car created for fast-paced pretend races and collecting."
    }
];

const storageKeys = {
    cart: "toyHavenCart",
    wishlist: "toyHavenWishlist",
    orders: "toyHavenOrders",
    feedback: "toyHavenFeedback",
    newsletter: "toyHavenNewsletter",
    ratings: "toyHavenRatings",
    login: "toyHavenLogin"
};

function getPagePrefix() {
    return window.location.pathname.includes("/html/") ? "../" : "";
}

function formatPrice(price) {
    return `LKR ${price.toLocaleString("en-LK")}`;
}

// Read saved data from the  localStorage.
function readStorage(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
        return fallback;
    }
}

// Save JavaScript data in localStorage as JSON so it can be used again later.
// This reusable function is used by the cart, wishlist, login, ratings, orders and forms.
function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function createProductCard(product, options = {}) {
    const prefix = getPagePrefix();
    const showDescription = options.showDescription ? `<p class="product-description">${product.description}</p>` : "";

    return `
        <article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="View details for ${product.name}">
            <section class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-tag">${product.category}</span>
                <button class="wishlist-card-button" type="button" data-wishlist-id="${product.id}" aria-label="Add ${product.name} to wishlist">&hearts;</button>
            </section>
            <section class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                ${showDescription}
                <section class="product-bottom">
                    <span class="price">${formatPrice(product.price)}</span>
                    <button class="quick-add" type="button" data-cart-id="${product.id}" aria-label="Add ${product.name} to cart">+</button>
                </section>
                <section class="product-actions">
                    <button class="shop-button" type="button" data-cart-id="${product.id}">Add to Cart</button>
                    <a class="secondary-button" href="${prefix}html/products.html" data-view-id="${product.id}">View Details</a>
                </section>
            </section>
        </article>
    `;
}

function findProduct(productId) {
    return products.find((product) => product.id === Number(productId));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showTemporaryMessage(message) {
    let messageBox = document.getElementById("temporaryMessage");

    if (!messageBox) {
        messageBox = document.createElement("p");
        messageBox.id = "temporaryMessage";
        messageBox.className = "temporary-message";
        document.body.appendChild(messageBox);
    }

    messageBox.textContent = message;
    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show");
    }, 1800);
}

function initializeNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (!hamburger || !navMenu) {
        return;
    }

    hamburger.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });
}

function initializeHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.getElementById("prevSlide");
    const next = document.getElementById("nextSlide");

    if (!slides.length) {
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active-slide", slideIndex === currentSlide);
        });
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active-dot", dotIndex === currentSlide);
        });
    }

    if (prev) {
        prev.addEventListener("click", () => showSlide(currentSlide - 1));
    }

    if (next) {
        next.addEventListener("click", () => showSlide(currentSlide + 1));
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide)));
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// Update the small number shown on the cart icon using the saved cart data.
function updateCartBadge() {
    // Get the existing cart. If the user has no cart yet, start with an empty array.
    const cart = readStorage(storageKeys.cart, []);
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll("#cartBadge").forEach((badge) => {
        badge.textContent = count;
    });
}

// Add a product to the shopping cart and save the updated cart in localStorage.
function addToCart(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const cart = readStorage(storageKeys.cart, []);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: product.id, quantity: 1 });
    }

    // Save the updated cart so it remains available after refreshing the page.
    writeStorage(storageKeys.cart, cart);
    updateCartBadge();
    renderCartPage();
    renderCheckoutPage();
    showTemporaryMessage(`${product.name} added to cart.`);
}

// Save a product to the user's wishlist using localStorage.
function addToWishlist(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const wishlist = readStorage(storageKeys.wishlist, []);
    const alreadySaved = wishlist.some((item) => item.id === product.id);

    if (!alreadySaved) {
        // New wishlist items start with the default status "Interested".
        wishlist.push({ id: product.id, status: "Interested" });
        // Save the wishlist so the selection is not lost when the page is refreshed.
        writeStorage(storageKeys.wishlist, wishlist);
        renderWishlistPage();
        showTemporaryMessage(`${product.name} added to wishlist.`);
    } else {
        showTemporaryMessage(`${product.name} is already in your wishlist.`);
    }
}

function initializeProductButtons() {
    document.addEventListener("click", (event) => {
        const cartButton = event.target.closest("[data-cart-id]");
        const wishlistButton = event.target.closest("[data-wishlist-id]");

        if (cartButton) {
            event.preventDefault();
            event.stopPropagation();
            addToCart(cartButton.dataset.cartId);
            return;
        }

        if (wishlistButton) {
            event.preventDefault();
            event.stopPropagation();
            addToWishlist(wishlistButton.dataset.wishlistId);
            return;
        }

        const viewButton = event.target.closest("[data-view-id]");
        if (viewButton && document.getElementById("productModal")) {
            event.preventDefault();
            openProductModal(viewButton.dataset.viewId);
            return;
        }

        const card = event.target.closest(".product-card[data-product-id]");
        if (card && document.getElementById("productModal")) {
            openProductModal(card.dataset.productId);
        }
    });

    document.addEventListener("keydown", (event) => {
        const card = event.target.closest(".product-card[data-product-id]");
        if (card && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            openProductModal(card.dataset.productId);
        }
    });
}

// Get the saved star rating for one product.
function getProductRating(productId) {
    const ratings = readStorage(storageKeys.ratings, {});
    return Number(ratings[productId] || 0);
}

// Save the user's star rating for a product in localStorage.
function saveProductRating(productId, rating) {
    const ratings = readStorage(storageKeys.ratings, {});
    // Store the rating using the product ID so each product has its own rating.
    ratings[productId] = rating;
    writeStorage(storageKeys.ratings, ratings);
}

function renderRatingStars(productId, selectedRating = 0) {
    return [1, 2, 3, 4, 5].map((rating) => `
        <button class="rating-star ${rating <= selectedRating ? "selected" : ""}" type="button" data-rating-product="${productId}" data-rating="${rating}" aria-label="Rate ${rating} out of 5">★</button>
    `).join("");
}

function openProductModal(productId) {
    const modal = document.getElementById("productModal");
    const modalContent = document.getElementById("modalProductContent");
    const product = findProduct(productId);

    if (!modal || !modalContent || !product) {
        return;
    }

    const currentRating = getProductRating(product.id);
    modalContent.innerHTML = `
        <article class="modal-product">
            <img src="${product.image}" alt="${product.name}">
            <section class="modal-product-info">
                <p class="product-category">${product.category}</p>
                <h2 id="modalProductName">${product.name}</h2>
                <p class="modal-price">${formatPrice(product.price)}</p>
                <section class="modal-rating" aria-label="Product rating">
                    <span class="rating-label">Your rating:</span>
                    <span class="rating-stars" id="ratingStars">${renderRatingStars(product.id, currentRating)}</span>
                    <span class="rating-value" id="ratingValue">${currentRating ? `${currentRating}/5` : "Not rated yet"}</span>
                </section>
                <p class="modal-description">${product.description}</p>
                <section class="product-actions">
                    <button class="shop-button" type="button" data-cart-id="${product.id}">Add to Cart</button>
                    <button class="secondary-button" type="button" data-wishlist-id="${product.id}">♡ Add to Wishlist</button>
                </section>
            </section>
        </article>
    `;

    modal.hidden = false;
    document.body.classList.add("modal-open");

    modalContent.querySelectorAll("[data-rating-product]").forEach((star) => {
        star.addEventListener("click", () => {
            const rating = Number(star.dataset.rating);
            saveProductRating(product.id, rating);
            modalContent.querySelector("#ratingStars").innerHTML = renderRatingStars(product.id, rating);
            modalContent.querySelector("#ratingValue").textContent = `${rating}/5`;
            showTemporaryMessage(`You rated ${product.name} ${rating}/5.`);
            modalContent.querySelectorAll("[data-rating-product]").forEach((newStar) => {
                newStar.addEventListener("click", () => {
                    const nextRating = Number(newStar.dataset.rating);
                    saveProductRating(product.id, nextRating);
                    modalContent.querySelector("#ratingStars").innerHTML = renderRatingStars(product.id, nextRating);
                    modalContent.querySelector("#ratingValue").textContent = `${nextRating}/5`;
                });
            });
        });
    });
}

function closeProductModal() {
    const modal = document.getElementById("productModal");

    if (modal) {
        modal.hidden = true;
        document.body.classList.remove("modal-open");
    }
}

function initializeProductModal() {
    const modal = document.getElementById("productModal");
    const closeButton = document.getElementById("closeProductModal");

    if (!modal) {
        return;
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeProductModal);
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeProductModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeProductModal();
        }
    });
}

function renderFeaturedProducts() {
    const featuredGrid = document.getElementById("featuredProducts");

    if (!featuredGrid) {
        return;
    }

    const featured = products.slice(0, 4);
    featuredGrid.innerHTML = featured.map((product) => createProductCard(product)).join("");
}

function renderFeaturedProductOfDay() {
    const featuredDay = document.getElementById("featuredProductOfDay");

    if (!featuredDay) {
        return;
    }

    const dayProducts = [products[10], products[15]];
    featuredDay.innerHTML = dayProducts.map((product) => createProductCard(product, { showDescription: true })).join("");
}

function renderProductsPage() {
    const grid = document.getElementById("productsGrid");
    const searchInput = document.getElementById("productSearch");
    const count = document.getElementById("productCount");
    const emptyMessage = document.getElementById("productsEmptyMessage");
    const categoryInputs = document.querySelectorAll("input[name='categoryFilter']");

    if (!grid) {
        return;
    }

    function getSelectedCategory() {
        const selected = document.querySelector("input[name='categoryFilter']:checked");
        return selected ? selected.value : "All";
    }

    function displayProducts() {
        const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
        const category = getSelectedCategory();

        const filteredProducts = products.filter((product) => {
            const matchesCategory = category === "All" || product.category === category;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        grid.innerHTML = filteredProducts.map((product) => createProductCard(product, { showDescription: true })).join("");

        if (count) {
            count.textContent = filteredProducts.length;
        }

        if (emptyMessage) {
            emptyMessage.hidden = filteredProducts.length > 0;
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", displayProducts);
    }

    categoryInputs.forEach((input) => {
        input.addEventListener("change", displayProducts);
    });

    displayProducts();
}

// Convert the saved cart IDs and quantities into full product information for display.
function getCartDetails() {
    const cart = readStorage(storageKeys.cart, []);

    return cart
        .map((item) => {
            const product = findProduct(item.id);
            const quantity = Math.max(1, Number(item.quantity) || 1);
            return product ? { ...product, quantity, subtotal: product.price * quantity } : null;
        })
        .filter(Boolean);
}

// Save updated quantities back to localStorage after + / - buttons are used.
function saveCartDetails(cartDetails) {
    const cart = cartDetails.map((item) => ({ id: item.id, quantity: item.quantity }));
    writeStorage(storageKeys.cart, cart);
    updateCartBadge();
}

// Increase or decrease a cart item's quantity, then save the new quantity.
function changeQuantity(productId, amount) {
    const cartDetails = getCartDetails();
    const item = cartDetails.find((cartItem) => cartItem.id === Number(productId));

    if (!item) {
        return;
    }

    item.quantity = Math.max(1, item.quantity + amount);
    saveCartDetails(cartDetails);
    renderCartPage();
    renderCheckoutPage();
}

function removeFromCart(productId) {
    const cartDetails = getCartDetails().filter((item) => item.id !== Number(productId));
    saveCartDetails(cartDetails);
    renderCartPage();
    renderCheckoutPage();
}

function clearCart() {
    writeStorage(storageKeys.cart, []);
    updateCartBadge();
    renderCartPage();
    renderCheckoutPage();
}

function renderCartPage() {
    const cartItems = document.getElementById("cartItems");
    const emptyMessage = document.getElementById("cartEmptyMessage");
    const totalItems = document.getElementById("cartTotalItems");
    const subtotal = document.getElementById("cartSubtotal");
    const total = document.getElementById("cartTotal");

    if (!cartItems) {
        return;
    }

    const cartDetails = getCartDetails();
    const itemCount = cartDetails.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cartDetails.reduce((sum, item) => sum + item.subtotal, 0);

    cartItems.innerHTML = cartDetails.map((item) => `
        <article class="cart-item">
            <section class="cart-product">
                <img src="${item.image}" alt="${item.name}">
                <section>
                    <h3>${item.name}</h3>
                    <p class="product-category">${item.category}</p>
                </section>
            </section>
            <strong>${formatPrice(item.price)}</strong>
            <section class="quantity-control" aria-label="Quantity controls for ${item.name}">
                <button type="button" data-quantity-minus="${item.id}" aria-label="Decrease quantity">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-quantity-plus="${item.id}" aria-label="Increase quantity">+</button>
            </section>
            <strong>${formatPrice(item.subtotal)}</strong>
            <button class="remove-button" type="button" data-remove-cart="${item.id}" aria-label="Remove ${item.name}">x</button>
        </article>
    `).join("");

    if (emptyMessage) {
        emptyMessage.hidden = cartDetails.length > 0;
    }

    if (totalItems) {
        totalItems.textContent = itemCount;
    }

    if (subtotal) {
        subtotal.textContent = formatPrice(cartTotal);
    }

    if (total) {
        total.textContent = formatPrice(cartTotal);
    }
}

function initializeCartPage() {
    const clearButton = document.getElementById("clearCartButton");

    document.addEventListener("click", (event) => {
        const plusButton = event.target.closest("[data-quantity-plus]");
        const minusButton = event.target.closest("[data-quantity-minus]");
        const removeButton = event.target.closest("[data-remove-cart]");

        if (plusButton) {
            changeQuantity(plusButton.dataset.quantityPlus, 1);
        }

        if (minusButton) {
            changeQuantity(minusButton.dataset.quantityMinus, -1);
        }

        if (removeButton) {
            removeFromCart(removeButton.dataset.removeCart);
        }
    });

    if (clearButton) {
        clearButton.addEventListener("click", clearCart);
    }

    renderCartPage();
}

function renderCheckoutPage() {
    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutTotal = document.getElementById("checkoutTotal");

    if (!checkoutItems) {
        return;
    }

    const cartDetails = getCartDetails();
    const total = cartDetails.reduce((sum, item) => sum + item.subtotal, 0);

    checkoutItems.innerHTML = cartDetails.length
        ? cartDetails.map((item) => `
            <article class="checkout-item">
                <span>${item.name} x ${item.quantity}</span>
                <strong>${formatPrice(item.subtotal)}</strong>
            </article>
        `).join("")
        : "<p class=\"empty-message\">Your cart is empty. Add products before checkout.</p>";

    if (checkoutTotal) {
        checkoutTotal.textContent = formatPrice(total);
    }
}

function setError(id, message) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = message;
    }
}

function clearCheckoutErrors() {
    [
        "fullNameError",
        "checkoutEmailError",
        "deliveryAddressError",
        "paymentMethodError",
        "cardNumberError",
        "cardNameError"
    ].forEach((id) => setError(id, ""));
}

function initializeCheckoutPage() {
    const form = document.getElementById("checkoutForm");
    const cardDetails = document.getElementById("cardDetails");
    const success = document.getElementById("checkoutSuccess");
    const orderIdElement = document.getElementById("orderId");

    if (!form) {
        return;
    }

    function updateCardVisibility() {
        const method = form.querySelector("input[name='paymentMethod']:checked");
        if (cardDetails) {
            cardDetails.hidden = !method || method.value !== "Card";
        }
    }

    form.querySelectorAll("input[name='paymentMethod']").forEach((input) => {
        input.addEventListener("change", updateCardVisibility);
    });

    updateCardVisibility();
    renderCheckoutPage();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearCheckoutErrors();

        const cartDetails = getCartDetails();
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("checkoutEmail").value.trim();
        const address = document.getElementById("deliveryAddress").value.trim();
        const paymentMethod = form.querySelector("input[name='paymentMethod']:checked");
        const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
        const cardName = document.getElementById("cardName").value.trim();
        let isValid = true;

        if (!cartDetails.length) {
            showTemporaryMessage("Your cart is empty. Add products before checkout.");
            isValid = false;
        }

        if (fullName.length < 2) {
            setError("fullNameError", "Please enter your full name.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            setError("checkoutEmailError", "Please enter a valid email address.");
            isValid = false;
        }

        if (address.length < 8) {
            setError("deliveryAddressError", "Please enter a complete delivery address.");
            isValid = false;
        }

        if (!paymentMethod) {
            setError("paymentMethodError", "Please choose a payment method.");
            isValid = false;
        }

        if (paymentMethod && paymentMethod.value === "Card") {
            if (!/^\d{12,19}$/.test(cardNumber)) {
                setError("cardNumberError", "Please enter a valid card number.");
                isValid = false;
            }

            if (cardName.length < 2) {
                setError("cardNameError", "Please enter the name on the card.");
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        const total = cartDetails.reduce((sum, item) => sum + item.subtotal, 0);
        const orderId = `TH-${Date.now().toString().slice(-8)}`;
        // Load previous orders so the new order can be added to the order history.
        const orders = readStorage(storageKeys.orders, []);

        // Add the completed order, customer details and purchased items to the order history.
        orders.push({
            orderId,
            fullName,
            email,
            address,
            paymentMethod: paymentMethod.value,
            items: cartDetails,
            total,
            date: new Date().toISOString()
        });

        // Store the order history in localStorage.
        writeStorage(storageKeys.orders, orders);
        // The order is complete, so remove the purchased items from the cart.
        clearCart();
        form.reset();
        updateCardVisibility();

        if (orderIdElement) {
            orderIdElement.textContent = orderId;
        }

        if (success) {
            success.hidden = false;
            success.scrollIntoView({ behavior: "smooth" });
        }
    });
}

function getWishlistDetails() {
    const wishlist = readStorage(storageKeys.wishlist, []);

    return wishlist
        .map((item) => {
            const product = findProduct(item.id);
            return product ? { ...product, status: item.status || "Interested" } : null;
        })
        .filter(Boolean);
}

function saveWishlistDetails(wishlistDetails) {
    writeStorage(storageKeys.wishlist, wishlistDetails.map((item) => ({ id: item.id, status: item.status })));
}

function renderWishlistPage(filter = "All") {
    const grid = document.getElementById("wishlistGrid");
    const emptyMessage = document.getElementById("wishlistEmptyMessage");
    const interestedCount = document.getElementById("interestedCount");
    const ownedCount = document.getElementById("ownedCount");
    const notInterestedCount = document.getElementById("notInterestedCount");
    const totalCount = document.getElementById("wishlistTotalCount");

    if (!grid) {
        return;
    }

    const wishlistDetails = getWishlistDetails();
    const visibleItems = filter === "All"
        ? wishlistDetails
        : wishlistDetails.filter((item) => item.status === filter);

    grid.innerHTML = visibleItems.map((item) => `
        <article class="product-card">
            <section class="product-image">
                <img src="${item.image}" alt="${item.name}">
                <button class="wishlist-card-button" type="button" data-remove-wishlist="${item.id}" aria-label="Remove ${item.name} from wishlist">&times;</button>
            </section>
            <section class="product-info">
                <p class="product-category">${item.category}</p>
                <h3>${item.name}</h3>
                <p class="price">${formatPrice(item.price)}</p>
                <select class="wishlist-status" data-wishlist-status="${item.id}" aria-label="Wishlist status for ${item.name}">
                    <option value="Interested"${item.status === "Interested" ? " selected" : ""}>Interested</option>
                    <option value="Owned"${item.status === "Owned" ? " selected" : ""}>Owned</option>
                    <option value="Not Interested"${item.status === "Not Interested" ? " selected" : ""}>Not Interested</option>
                </select>
            </section>
        </article>
    `).join("");

    if (emptyMessage) {
        emptyMessage.hidden = wishlistDetails.length > 0;
    }

    if (interestedCount) {
        interestedCount.textContent = wishlistDetails.filter((item) => item.status === "Interested").length;
    }

    if (ownedCount) {
        ownedCount.textContent = wishlistDetails.filter((item) => item.status === "Owned").length;
    }

    if (notInterestedCount) {
        notInterestedCount.textContent = wishlistDetails.filter((item) => item.status === "Not Interested").length;
    }

    if (totalCount) {
        totalCount.textContent = wishlistDetails.length;
    }
}

function initializeWishlistPage() {
    const tabs = document.querySelectorAll("[data-wishlist-filter]");
    const clearButton = document.getElementById("clearWishlistButton");
    let activeFilter = "All";

    if (!document.getElementById("wishlistGrid")) {
        return;
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((item) => item.classList.remove("active"));
            tab.classList.add("active");
            activeFilter = tab.dataset.wishlistFilter;
            renderWishlistPage(activeFilter);
        });
    });

    document.addEventListener("change", (event) => {
        const statusSelect = event.target.closest("[data-wishlist-status]");

        if (!statusSelect) {
            return;
        }

        const wishlistDetails = getWishlistDetails();
        const item = wishlistDetails.find((wishlistItem) => wishlistItem.id === Number(statusSelect.dataset.wishlistStatus));

        if (item) {
            item.status = statusSelect.value;
            saveWishlistDetails(wishlistDetails);
            renderWishlistPage(activeFilter);
        }
    });

    document.addEventListener("click", (event) => {
        const removeButton = event.target.closest("[data-remove-wishlist]");

        if (!removeButton) {
            return;
        }

        const wishlistDetails = getWishlistDetails().filter((item) => item.id !== Number(removeButton.dataset.removeWishlist));
        saveWishlistDetails(wishlistDetails);
        renderWishlistPage(activeFilter);
    });

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            writeStorage(storageKeys.wishlist, []);
            renderWishlistPage(activeFilter);
        });
    }

    renderWishlistPage(activeFilter);
}

function initializeFeedbackPage() {
    const form = document.getElementById("feedbackForm");
    const confirmation = document.getElementById("feedbackConfirmation");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("feedbackName").value.trim();
        const email = document.getElementById("feedbackEmail").value.trim();
        const message = document.getElementById("feedbackMessage").value.trim();
        let isValid = true;

        setError("feedbackNameError", "");
        setError("feedbackEmailError", "");
        setError("feedbackMessageError", "");

        if (name.length < 2) {
            setError("feedbackNameError", "Please enter your name.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            setError("feedbackEmailError", "Please enter a valid email address.");
            isValid = false;
        }

        if (message.length < 10) {
            setError("feedbackMessageError", "Please enter a message with at least 10 characters.");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Get previously submitted feedback so new feedback can be added to it.
        const feedback = readStorage(storageKeys.feedback, []);
        // Add the new feedback together with the date and time it was submitted.
        feedback.push({
            name,
            email,
            message,
            date: new Date().toISOString()
        });
        // Save the feedback in localStorage.
        writeStorage(storageKeys.feedback, feedback);

        if (confirmation) {
            confirmation.textContent = "Thank you! Your message has been saved successfully.";
        }

        form.reset();
    });
}

function initializeFAQ() {
    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            button.closest(".faq-item").classList.toggle("open");
        });
    });
}

function initializeSiteSearch() {
    const siteSearch = document.getElementById("siteSearch");

    if (!siteSearch) {
        return;
    }

    const searchBox = siteSearch.closest(".search-box");
    let results = searchBox ? searchBox.querySelector(".search-results") : null;

    if (!results && searchBox) {
        results = document.createElement("section");
        results.className = "search-results";
        results.setAttribute("aria-live", "polite");
        searchBox.appendChild(results);
    }

    function showResults(query) {
        if (!results) return;
        const term = query.trim().toLowerCase();
        if (!term) {
            results.innerHTML = "";
            results.classList.remove("show");
            return;
        }
        const matches = products.filter((product) =>
            `${product.name} ${product.category}`.toLowerCase().includes(term)
        ).slice(0, 6);

        results.innerHTML = matches.length
            ? matches.map((product) => `
                <button class="search-result-item" type="button" data-search-product="${product.id}">
                    <img src="${product.image}" alt="">
                    <span><strong>${product.name}</strong><small>${product.category} · ${formatPrice(product.price)}</small></span>
                </button>`).join("")
            : `<p class="search-no-results">No products found.</p>`;
        results.classList.add("show");
    }

    siteSearch.addEventListener("input", () => {
        showResults(siteSearch.value);
        const productSearch = document.getElementById("productSearch");
        if (productSearch && productSearch !== siteSearch) {
            productSearch.value = siteSearch.value;
            productSearch.dispatchEvent(new Event("input", { bubbles: true }));
        }
    });

    siteSearch.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        const query = siteSearch.value.trim();
        if (!query) return;
        const productSearch = document.getElementById("productSearch");
        if (productSearch) {
            productSearch.value = query;
            productSearch.dispatchEvent(new Event("input", { bubbles: true }));
            if (results) results.classList.remove("show");
            return;
        }
        const productsPath = getPagePrefix() ? "products.html" : "html/products.html";
        window.location.href = `${productsPath}?search=${encodeURIComponent(query)}`;
    });

    if (results) {
        results.addEventListener("click", (event) => {
            const item = event.target.closest("[data-search-product]");
            if (!item) return;
            const product = findProduct(item.dataset.searchProduct);
            if (!product) return;
            const productSearch = document.getElementById("productSearch");
            if (productSearch) {
                productSearch.value = product.name;
                productSearch.dispatchEvent(new Event("input", { bubbles: true }));
                results.classList.remove("show");
                return;
            }
            const productsPath = getPagePrefix() ? "products.html" : "html/products.html";
            window.location.href = `${productsPath}?search=${encodeURIComponent(product.name)}`;
        });
    }

    document.addEventListener("click", (event) => {
        if (searchBox && !searchBox.contains(event.target) && results) {
            results.classList.remove("show");
        }
    });
}

function applySearchFromUrl() {
    const searchInput = document.getElementById("productSearch");

    if (!searchInput) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");

    if (search) {
        searchInput.value = search;
    }
}

function initializeLogin() {
    const loginButtons = document.querySelectorAll(".user-button");
    if (!loginButtons.length) return;

    let modal = document.getElementById("loginModal");
    if (!modal) {
        modal = document.createElement("section");
        modal.id = "loginModal";
        modal.className = "login-modal";
        modal.hidden = true;
        modal.innerHTML = `
            <section class="login-dialog" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
                <button class="modal-close" id="closeLoginModal" type="button" aria-label="Close login">&times;</button>
                <div class="login-icon">♙</div>
                <p class="section-label">TOY HAVEN ACCOUNT</p>
                <h2 id="loginTitle">Welcome Back</h2>
                <p>Enter your email to continue.</p>
                <form id="loginForm">
                    <label for="loginEmail">Email address</label>
                    <input type="email" id="loginEmail" placeholder="you@example.com" required>
                    <p id="loginError" class="error-message"></p>
                    <button class="shop-button login-submit" type="submit">Continue</button>
                </form>
                <p id="loginSuccess" class="login-success" hidden>Logged in successfully!</p>
            </section>`;
        document.body.appendChild(modal);
    }

    const close = () => {
        modal.hidden = true;
        document.body.classList.remove("modal-open");
    };

    loginButtons.forEach((button) => button.addEventListener("click", () => {
        modal.hidden = false;
        document.body.classList.add("modal-open");
        const input = document.getElementById("loginEmail");
        if (input) setTimeout(() => input.focus(), 50);
    }));

    document.getElementById("closeLoginModal")?.addEventListener("click", close);
    modal.addEventListener("click", (event) => { if (event.target === modal) close(); });

    document.getElementById("loginForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("loginEmail");
        const error = document.getElementById("loginError");
        const success = document.getElementById("loginSuccess");
        const email = input.value.trim();
        if (!isValidEmail(email)) {
            error.textContent = "Please enter a valid email address.";
            success.hidden = true;
            return;
        }
        error.textContent = "";
        // Save a simple login record in localStorage.
        // This is a front-end simulation; it does not create a real user account.
        writeStorage(storageKeys.login, { email, loggedIn: true, loggedInAt: new Date().toISOString() });
        success.hidden = false;
        success.textContent = `Logged in successfully as ${email}`;
        showTemporaryMessage("Logged in successfully!");
        setTimeout(close, 1200);
    });
}

function initializeNewsletter() {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("newsletterEmail");
    const message = document.getElementById("newsletterMessage");

    if (!form || !emailInput || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (!email || !email.includes("@")) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        // Save the newsletter email so the subscription persists after refreshing.
        writeStorage(storageKeys.newsletter, { email });
        message.textContent = "Thank you for subscribing!";
        form.reset();
    });
}

function initializeBackToTop() {
    const button = document.getElementById("backToTop");

    if (!button) {
        return;
    }

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeNavigation();
    initializeHeroSlider();
    initializeProductButtons();
    initializeProductModal();
    initializeCartPage();
    initializeCheckoutPage();
    initializeWishlistPage();
    initializeFeedbackPage();
    initializeFAQ();
    initializeSiteSearch();
    initializeLogin();
    initializeNewsletter();
    initializeBackToTop();
    updateCartBadge();
    renderFeaturedProducts();
    renderFeaturedProductOfDay();
    applySearchFromUrl();
    renderProductsPage();
});
