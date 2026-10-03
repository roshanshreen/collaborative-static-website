// Shared by product-details.html and cart.html
// Uses the SAME localStorage key as index.html so the bag stays in sync.
const CART_KEY = 'shopease-product-quantities';

const PRODUCTS = {
    'shirt-classic': {
        name: "Men's Cotton Shirt",
        tagline: 'Soft structure, everyday ease',
        price: 999,
        image: 'images/product1.jpg',
        description: 'A classic shirt in breathable cotton with a soft structure that holds its shape through the day. Easy to dress up or wear loose.'
    },
    'shirt-premium': {
        name: 'Premium Cotton Shirt',
        tagline: 'A little more room to breathe',
        price: 1299,
        image: 'images/product2.jpg',
        description: 'A relaxed fit in a heavier premium cotton. A little more room through the body, and it softens with every wash.'
    },
    'handbag-structured': {
        name: 'Everyday Handbag',
        tagline: 'Room for what matters',
        price: 799,
        image: 'images/product3.jpg',
        description: 'A structured handbag with space for your daily carry, sturdy straps and brass hardware that ages well.'
    },
    'handbag-mini': {
        name: 'Mini Handbag',
        tagline: 'Small shape, long days',
        price: 1499,
        image: 'images/product4.jpg',
        description: 'A compact handbag that fits the essentials. Light on the shoulder and easy to carry from morning to night.'
    }
};

function getCart() {
    try {
        const saved = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
        return Object.fromEntries(
            Object.entries(saved).filter(([id, qty]) => PRODUCTS[id] && Number.isSafeInteger(qty) && qty > 0)
        );
    } catch {
        return {};
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
    updateBadge();
}

function cartCount() {
    return Object.values(getCart()).reduce((sum, qty) => sum + qty, 0);
}

function updateBadge() {
    document.querySelectorAll('.cart-count').forEach((el) => { el.textContent = cartCount(); });
}

function rupees(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

updateBadge();