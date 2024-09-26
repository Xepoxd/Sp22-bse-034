let cart = [];
const addItemToCart = (productId, productName, quantity, price) => {
    cart.push({ productId, productName, quantity, price });
    console.log(`${productName} added to the cart.`);
};
const removeItemFromCart = (productId) => {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        console.log(`${cart[index].productName} removed from the cart.`);
        cart.splice(index, 1);  
    } else {
        console.log('Item not found in the cart.');
    }
};
const updateItemQuantity = (productId, newQuantity) => {
    cart = cart.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    console.log(`Quantity updated for product ID ${productId}`);
};
const calculateTotalCost = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Total cost: $${total.toFixed(2)}`);
    return total;
};
const displayCartSummary = () => {
    console.log('Cart Summary:');
    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        console.log(`${item.productName}: Quantity: ${item.quantity}, Total: $${totalPrice.toFixed(2)}`);
    });
};
const filterZeroQuantityItems = () => {
    cart = cart.filter(item => item.quantity > 0);
    console.log('Filtered out items with zero quantity.');
};
const applyDiscount = (discountCode) => {
    const discounts = {
        'SAVE10': 0.10,
        'SAVE20': 0.20
    };
    
    const discount = discounts[discountCode];
    
    if (discount) {
        const totalBeforeDiscount = calculateTotalCost();
        const totalAfterDiscount = totalBeforeDiscount * (1 - discount);
        console.log(`Discount applied! You saved ${(discount * 100)}%. Total after discount: $${totalAfterDiscount.toFixed(2)}`);
    } else {
        console.log('Invalid discount code.');
    }
};
addItemToCart(1, 'Laptop', 1, 999.99);
addItemToCart(2, 'Headphones', 2, 199.99);
addItemToCart(3, 'Mouse', 1, 49.99);
displayCartSummary();
updateItemQuantity(2, 3);
removeItemFromCart(1);
filterZeroQuantityItems();
calculateTotalCost();
applyDiscount('SAVE10');
