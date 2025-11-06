// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const categoriesList = document.getElementById('categories-list');
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    const categoriesGrid = document.getElementById('categories-grid');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const viewAllProductsButton = document.querySelector('.view-all a');
    const wishlistCount = document.querySelector('.wishlist-count');
    const cartCount = document.querySelector('.cart-count');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update wishlist count in header
    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Function to update cart count in header
    function updateCartCount() {
        cartCount.textContent = cart.length;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to render product cards
    function renderProducts(products, gridElement) {
        gridElement.innerHTML = ''; // Clear existing content
        products.forEach(product => {
            const isLiked = wishlist.some(item => item.id === product.id);
            const isInCart = cart.some(item => item.id === product.id);
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image || 'https://via.placeholder.com/200'}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">₹${product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.rating})</p>
                <button class="btn btn-primary add-to-cart ${isInCart ? 'in-cart' : ''}" data-product-id="${product.id}">
                    ${isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
                <button class="like-btn ${isLiked ? 'liked' : ''}" data-product-id="${product.id}">
                    <i class="fas fa-heart"></i>
                </button>
            `;
            gridElement.appendChild(productCard);
        });

        // Add event listeners to Like buttons
        document.querySelectorAll('.like-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                const product = categories.flatMap(cat => cat.products).find(p => p.id === productId);
                const isLiked = wishlist.some(item => item.id === productId);

                if (isLiked) {
                    wishlist = wishlist.filter(item => item.id !== productId);
                    e.currentTarget.classList.remove('liked');
                } else {
                    wishlist.push(product);
                    e.currentTarget.classList.add('liked');
                }
                updateWishlistCount();
            });
        });

        // Add event listeners to Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                const product = categories.flatMap(cat => cat.products).find(p => p.id === productId);
                const isInCart = cart.some(item => item.id === productId);

                if (isInCart) {
                    cart = cart.filter(item => item.id !== productId);
                    e.currentTarget.classList.remove('in-cart');
                    e.currentTarget.textContent = 'Add to Cart';
                } else {
                    cart.push(product);
                    e.currentTarget.classList.add('in-cart');
                    e.currentTarget.textContent = 'In Cart';
                }
                updateCartCount();
            });
        });
    }

    // Function to render categories in navigation
    function renderCategoriesNav() {
        categoriesList.innerHTML = '<li><a href="#" class="active" data-category="all">All Products</a></li>';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" data-category="${category.id}">${category.name}</a>`;
            categoriesList.appendChild(li);
        });
    }

    // Function to render categories in highlights
    function renderCategoriesGrid() {
        categoriesGrid.innerHTML = '';
        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('category-card');
            categoryCard.dataset.category = category.id;
            categoryCard.innerHTML = `
                <h3>${category.name}</h3>
                <p>${category.products.length} Products</p>
            `;
            categoriesGrid.appendChild(categoryCard);
        });
    }

    // Function to filter products by category
    function filterProducts(categoryId) {
        let productsToShow = [];
        if (categoryId === 'all') {
            productsToShow = categories.flatMap(category => category.products);
        } else {
            const selectedCategory = categories.find(category => category.id === categoryId);
            productsToShow = selectedCategory ? selectedCategory.products : [];
        }
        renderProducts(productsToShow, featuredProductsGrid);
    }

    // Function to sort products
    function sortProducts(products) {
        const sortValue = sortSelect.value;
        let sortedProducts = [...products];
        switch (sortValue) {
            case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                sortedProducts.sort((a, b) => b.id - a.id);
                break;
            case 'eco-score':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        return sortedProducts;
    }

    // Function to handle search
    function handleSearch(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        const allProducts = categories.flatMap(category => category.products);
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts, featuredProductsGrid);
    }

    // Function to handle view all products
    function handleViewAllProducts(event) {
        event.preventDefault();
        const allProducts = categories.flatMap(category => category.products);
        renderProducts(allProducts, featuredProductsGrid);
    }

    // Initial setup
    renderCategoriesNav();
    renderCategoriesGrid();
    renderProducts(featuredProducts, featuredProductsGrid);
    updateWishlistCount();
    updateCartCount();

    // Event listeners for category filtering
    categoriesList.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (target) {
            e.preventDefault();
            const categoryId = target.dataset.category;
            filterProducts(categoryId);

            categoriesList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            target.classList.add('active');
        }
    });

    categoriesGrid.addEventListener('click', (e) => {
        const target = e.target.closest('.category-card');
        if (target) {
            const categoryId = target.dataset.category;
            filterProducts(categoryId);

            categoriesList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            categoriesList.querySelector(`a[data-category="${categoryId}"]`).classList.add('active');
        }
    });

    // Event listener for search
    searchForm.addEventListener('submit', handleSearch);

    // Event listener for sorting
    sortSelect.addEventListener('change', () => {
        const activeCategory = categoriesList.querySelector('a.active').dataset.category;
        let productsToSort = [];
        if (activeCategory === 'all') {
            productsToSort = categories.flatMap(category => category.products);
        } else {
            const selectedCategory = categories.find(category => category.id === activeCategory);
            productsToSort = selectedCategory ? selectedCategory.products : [];
        }
        const sortedProducts = sortProducts(productsToSort);
        renderProducts(sortedProducts, featuredProductsGrid);
    });

    // Event listener for view all products
    viewAllProductsButton.addEventListener('click', handleViewAllProducts);
});