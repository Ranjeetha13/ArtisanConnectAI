// cart.js
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cartProductsGrid = document.getElementById('cart-products-grid');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const wishlistCount = document.querySelector('.wishlist-count');
    const cartCount = document.querySelector('.cart-count');

    // Load wishlist and cart from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render products
    function renderCartProducts() {
        if (cart.length === 0) {
            cartEmptyMessage.style.display = 'block';
            cartProductsGrid.style.display = 'none';
        } else {
            cartEmptyMessage.style.display = 'none';
            cartProductsGrid.style.display = 'grid';
            cartProductsGrid.innerHTML = ''; // Clear existing content
            cart.forEach(product => {
                const isLiked = wishlist.some(item => item.id === product.id);
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image || 'https://via.placeholder.com/200'}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">₹${product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.rating})</p>
                    <button class="btn btn-primary add-to-cart in-cart" data-product-id="${product.id}">
                        In Cart
                    </button>
                    <button class="like-btn ${isLiked ? 'liked' : ''}" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                `;
                cartProductsGrid.appendChild(productCard);
            });
        }

        // Update counts
        wishlistCount.textContent = wishlist.length;
        cartCount.textContent = cart.length;

        // Add event listeners to Like buttons
        document.querySelectorAll('.like-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                const product = cart.find(p => p.id === productId);
                const isLiked = wishlist.some(item => item.id === productId);

                if (isLiked) {
                    wishlist = wishlist.filter(item => item.id !== productId);
                    e.currentTarget.classList.remove('liked');
                } else {
                    wishlist.push(product);
                    e.currentTarget.classList.add('liked');
                }
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                wishlistCount.textContent = wishlist.length;
            });
        });

        // Add event listeners to Add to Cart buttons (to remove from cart)
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                cart = cart.filter(item => item.id !== productId);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCartProducts();
            });
        });
    }

    // Initial render
    renderCartProducts();
});