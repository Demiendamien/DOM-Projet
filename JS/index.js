




document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').innerText);
            const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
            total += quantity * unitPrice;
        });
        document.querySelector('.total').innerText = total + ' $';
    }

    // Gestion des boutons de quantité
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.nextElementSibling;
            quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.previousElementSibling;
            if (parseInt(quantityElement.innerText) > 0) {
                quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
                updateTotalPrice();
            }
        });
    });

    // Gestion de la suppression d'articles
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.card-body').remove();
            updateTotalPrice();
        });
    });

    // Gestion des favoris
    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('favorite');
        });
    });
    
    updateTotalPrice();
});

