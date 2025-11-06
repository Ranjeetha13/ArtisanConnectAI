// wishlist.js
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const wishlistProductsGrid = document.getElementById('wishlist-products-grid');
    const wishlistEmptyMessage = document.getElementById('wishlist-empty-message');
    const wishlistCount = document.querySelector('.wishlist-count');
    const cartCount = document.querySelector('.cart-count');

    // Load wishlist and cart from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render products
    function renderWishlistProducts() {
        if (wishlist.length === 0) {
            wishlistEmptyMessage.style.display = 'block';
            wishlistProductsGrid.style.display = 'none';
        } else {
            wishlistEmptyMessage.style.display = 'none';
            wishlistProductsGrid.style.display = 'grid';
            wishlistProductsGrid.innerHTML = ''; // Clear existing content
            wishlist.forEach(product => {
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
                    <button class="like-btn liked" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                `;
                wishlistProductsGrid.appendChild(productCard);
            });
        }

        // Update counts
        wishlistCount.textContent = wishlist.length;
        cartCount.textContent = cart.length;

        // Add event listeners to Like buttons
        document.querySelectorAll('.like-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                wishlist = wishlist.filter(item => item.id !== productId);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                renderWishlistProducts();
            });
        });

        // Add event listeners to Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                const product = wishlist.find(p => p.id === productId);
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
                localStorage.setItem('cart', JSON.stringify(cart));
                cartCount.textContent = cart.length;
            });
        });
    }

    // Initial render
    renderWishlistProducts();
});