function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuButton = document.querySelector('.menu-button');
    menu.classList.toggle('open');
    menuButton.classList.toggle('open'); // Añade la clase para animar el botón
}

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu');
    const menuButton = document.querySelector('.menu-button');
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('open');
        menuButton.classList.remove('open');
    }
});


// Array de vinos con detalles
const wines = [
    {
        name: 'Vino Tinto Reserva',
        type: 'Tinto',
        price: '€25.00',
        description: 'Un vino tinto reserva con notas de roble y frutas maduras. Perfecto para carnes rojas.',
        image: 'https://via.placeholder.com/250x200?text=Vino+1'
    },
    {
        name: 'Vino Blanco Chardonnay',
        type: 'Blanco',
        price: '€18.00',
        description: 'Un vino blanco fresco y afrutado, ideal para mariscos y pescados.',
        image: 'https://via.placeholder.com/250x200?text=Vino+2'
    },
    {
        name: 'Vino Rosado Provence',
        type: 'Rosado',
        price: '€22.00',
        description: 'Un vino rosado suave con toques de fresa y durazno. Perfecto para aperitivos.',
        image: 'https://via.placeholder.com/250x200?text=Vino+3'
    },
    {
        name: 'Vino Tinto Cabernet Sauvignon',
        type: 'Tinto',
        price: '€30.00',
        description: 'Un Cabernet Sauvignon con cuerpo y notas de frutas negras y especias.',
        image: 'https://via.placeholder.com/250x200?text=Vino+4'
    },
    {
        name: 'Vino Blanco Sauvignon Blanc',
        type: 'Blanco',
        price: '€20.00',
        description: 'Vino blanco fresco y vibrante con notas cítricas. Ideal para acompañar pescados.',
        image: 'https://via.placeholder.com/250x200?text=Vino+5'
    },
    {
        name: 'Vino Espumoso Cava',
        type: 'Espumoso',
        price: '€35.00',
        description: 'Vino espumoso de la región de Cataluña, con burbujas finas y un sabor refrescante.',
        image: 'https://via.placeholder.com/250x200?text=Vino+6'
    }
];

// Función para renderizar las cards de vinos
function renderWines() {
    const wineContainer = document.getElementById('wine-container');
    
    wines.forEach(wine => {
        const wineCard = document.createElement('div');
        wineCard.classList.add('wine-card');
        
        wineCard.innerHTML = `
            <div class="wine-card-inner">
                <!-- Cara frontal -->
                <div class="wine-card-front">
                    <img src="${wine.image}" alt="${wine.name}">
                    <h3>${wine.name}</h3>
                    <p>${wine.type}</p>
                    <div class="price">${wine.price}</div>
                </div>
                
                <!-- Cara trasera -->
                <div class="wine-card-back">
                    <p>${wine.description}</p>
                </div>
            </div>
        `;
        
        // Añadir un evento de clic a la card
        wineCard.addEventListener('click', function() {
            wineCard.classList.toggle('flipped');  // Al hacer clic, se agrega o elimina la clase 'flipped'
        });

        wineContainer.appendChild(wineCard);
    });
}

// Llamar la función para renderizar los vinos
renderWines();
