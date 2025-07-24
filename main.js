// main.js
import { products } from './products.js';

const catalogo = document.getElementById('catalogo');

function renderCatalogo(lista) {
  catalogo.innerHTML = ''; // Limpiar catálogo
  lista.forEach(({ id, nombre, categoria, precio }) => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <h3>${nombre}</h3>
      <p><strong>Tipo:</strong> ${categoria}</p>
      <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
      <button data-id="${id}" class="agregar-btn">Add to Cart</button>
    `;
    catalogo.appendChild(card);
  });
}

// Inicializar catálogo
renderCatalogo(products);
