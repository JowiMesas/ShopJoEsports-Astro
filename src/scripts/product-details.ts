// src/scripts/product-details.ts
export function initProductDetails() {
    const images = document.querySelectorAll<HTMLImageElement>('[data-carousel-image]');
    const colorButtons = document.querySelectorAll<HTMLButtonElement>('[data-color]');
    const sizeSelect = document.querySelector<HTMLSelectElement>('[data-size-select]');
    const addToCartButton = document.getElementById('add-to-cart') as HTMLButtonElement;

    // Null checks for required elements
    if (!sizeSelect || !addToCartButton) {
        console.error('Essential DOM elements not found');
        return;
    }

    let selectedSize: string | null = null;
    let selectedColor: string | null = null;

    // Selector de colores
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deselect all color buttons
            colorButtons.forEach(b => {
                b.classList.remove('ring-2', 'ring-primary', 'scale-110');
            });
            
            // Select clicked color button
            button.classList.add('ring-2', 'ring-primary', 'scale-110');
            selectedColor = button.getAttribute('data-color');

            // Show corresponding image for selected color
            images.forEach(img => {
                img.classList.remove('opacity-100', 'z-10');
                img.classList.add('opacity-0', 'z-0');
            });

            const colorIndex = button.getAttribute('data-color-index');
            if (colorIndex !== null) {
                const colorImage = images[parseInt(colorIndex)];
                
                if (colorImage) {
                    colorImage.classList.add('opacity-100', 'z-10');
                    colorImage.classList.remove('opacity-0', 'z-0');
                }
            }

            // Enable add to cart if size is also selected
            checkAddToCartEligibility();
        });
    });

    // Selector de tallas
    sizeSelect.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLSelectElement;
        selectedSize = target.value;
        
        // Enable add to cart if color is also selected
        checkAddToCartEligibility();
    });

    // Función para habilitar/deshabilitar botón de añadir al carrito
    function checkAddToCartEligibility() {
        if (selectedSize && selectedColor) {
            addToCartButton.disabled = false;
            addToCartButton.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
            addToCartButton.classList.add('bg-primary', 'text-white', 'hover:bg-primary-light');
        } else {
            addToCartButton.disabled = true;
            addToCartButton.classList.remove('bg-primary', 'text-white', 'hover:bg-primary-light');
            addToCartButton.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
        }
    }
}

// Llamada inicial
document.addEventListener('DOMContentLoaded', initProductDetails);