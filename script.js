const products = [
  {
    id: 1,
    name: 'Oversized 50.1 Egípcia Minimalista',
    category: 'Camisetas',
    price: 'R$ 89,90',
    sizes: 'M',
    stock: 5,
    label: 'Premium',
    description: 'Modelagem oversized, visual minimalista e proposta premium.',
    tone: 'gold',
  },
  {
    id: 2,
    name: 'Peruana Pima 5% Elastano',
    category: 'Camisetas',
    price: 'R$ 79,90',
    sizes: 'M / GG',
    stock: 15,
    label: 'Mais vendida',
    description: 'Malha superior com toque macio e excelente caimento.',
    tone: 'light',
  },
  {
    id: 3,
    name: 'Camiseta Fio 30.1',
    category: 'Camisetas',
    price: 'R$ 49,90',
    sizes: 'M / G',
    stock: 20,
    label: 'Promoção',
    description: 'Peça básica de giro rápido, ideal para combo promocional.',
    tone: 'dark',
  },
  {
    id: 4,
    name: 'Polo 50.1 Gold Suedine',
    category: 'Polos',
    price: 'R$ 99,90',
    sizes: 'M / G',
    stock: 3,
    label: 'Elegante',
    description: 'Polo premium para elevar o ticket com visual alinhado.',
    tone: 'light',
  },
  {
    id: 5,
    name: 'Bermuda Mauricinho Sarja Cargo',
    category: 'Bermudas',
    price: 'R$ 89,90',
    sizes: 'P',
    stock: 3,
    label: 'Casual',
    description: 'Bermuda urbana para montar look completo de final de semana.',
    tone: 'dark',
  },
  {
    id: 6,
    name: 'Cueca Malha Peruana',
    category: 'Cuecas',
    price: 'R$ 29,90',
    sizes: 'M / G / GG',
    stock: 8,
    label: 'Conforto',
    description: 'Produto de recompra com ótimo giro e excelente margem.',
    tone: 'gold',
  },
];

const categories = [
  { name: 'Camisetas', desc: 'Modelos premium e básicos de alto giro.' },
  { name: 'Polos', desc: 'Peças mais alinhadas para elevar ticket médio.' },
  { name: 'Bermudas', desc: 'Looks práticos para o fim de semana.' },
  { name: 'Cuecas', desc: 'Essenciais com boa saída e recompra.' },
];

const categoriesEl = document.getElementById('categories');
const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('productsGrid');
const navlinks = document.getElementById('navlinks');
const menuToggle = document.getElementById('menuToggle');

document.getElementById('year').textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  navlinks.classList.toggle('open');
});

categories.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'category-card';
  card.innerHTML = `
    <div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    </div>
    <span class="badge">Ver catálogo</span>
  `;
  categoriesEl.appendChild(card);
});

const filterNames = ['Todos', ...new Set(products.map((p) => p.category))];
let activeFilter = 'Todos';

function renderFilters() {
  filtersEl.innerHTML = '';
  filterNames.forEach((name) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${name === activeFilter ? 'active' : ''}`;
    btn.textContent = name;
    btn.addEventListener('click', () => {
      activeFilter = name;
      renderFilters();
      renderProducts();
    });
    filtersEl.appendChild(btn);
  });
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-media ${product.tone}"></div>
      <div class="product-body">
        <div class="product-top">
          <h3 class="product-name">${product.name}</h3>
          <span class="price">${product.price}</span>
        </div>
        <div class="product-meta">
          <span class="badge">${product.label}</span>
          <span>Tamanhos: ${product.sizes}</span>
          <span>Estoque: ${product.stock}</span>
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="product-actions">
          <a class="btn btn--primary" href="https://wa.me/5500000000000?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(product.name)}" target="_blank" rel="noreferrer">Comprar</a>
          <a class="btn btn--ghost" href="https://www.instagram.com/g2storemg?igsh=MWM3a3V1aWZhaGNiNA==" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = activeFilter === 'Todos'
    ? products
    : products.filter((p) => p.category === activeFilter);

  gridEl.innerHTML = filtered.map(productCard).join('');
}

renderFilters();
renderProducts();
