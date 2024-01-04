// ... (previous JavaScript code) ...

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add code here to handle the form submission, such as sending the data to a server.
    alert('Message sent successfully!');
});
