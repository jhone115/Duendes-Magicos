/* DUENDES MÁGICOS — Funcionalidades Globales  */

/*  Estado Global  */
let isLoggedIn = false;
let cart = [];

/*  WhatsApp — REEMPLAZA con tu número real  */
const WHATSAPP_NUMBER = '573209969023';

/*  Base de Datos de Productos  */
const productos = [
    {
        id: 1, name: 'Duende Protector del Bosque', category: 'Duendes', price: 120000,
        desc: 'Guardián de raíces antiguas, tejido con arcilla de río y resinas del bosque.',
        descLarga: 'Este ser ancestral fue modelado durante tres noches de luna creciente con arcilla de río, musgo seco y resinas de pino sagrado. Su propósito es proteger el umbral del hogar y mantener alejadas las energías pesadas. Ideal para ubicar cerca de la entrada principal o en el altar familiar.',
        cuidados: 'Limpia con palo santo cada lunes. Cárgalo bajo el sol de la mañana (7–10am) durante 20 minutos. Evita el agua directa sobre la pintura. Ubícalo en zonas de alta circulación de energía.',
        imgs: ['../Imagenes - Videos/d11.jpeg', '../Imagenes - Videos/d11.jpeg', '../Imagenes - Videos/d11.jpeg'],
        img: '../Imagenes - Videos/d11.jpeg',
        elemento: 'Tierra', tiempo: '3–5 días', disponible: true,
    },
    {
        id: 2, name: 'Rocío de Hadas — Agua', category: 'Esencias', price: 35000,
        desc: 'Esencia ritual de agua de manantial, pétalos de loto y cuarzo pulverizado.',
        descLarga: 'Destilada bajo luna llena con agua de manantial de los Andes, pétalos de loto azul, cristal de selenita pulverizado y esencia de nenúfar. Úsala para limpiar espacios, consagrar elementales nuevos o como perfume ritual en meditaciones de agua.',
        cuidados: 'Agita suavemente antes de usar. Conservar en lugar fresco, lejos de la luz solar directa. Una vez abierta, consumir en máximo 6 meses. No ingerir.',
        imgs: ['../Imagenes - Videos/d21.jpeg', '../Imagenes - Videos/d21.jpeg', '../Imagenes - Videos/d21.jpeg'],
        img: '../Imagenes - Videos/d21.jpeg',
        elemento: 'Agua', tiempo: '2–3 días', disponible: true,
    },
    {

        id: 3, name: 'Duende Sabio de la Montaña', category: 'Duendes', price: 150000,
        desc: 'Antiguo oráculo de piedra volcánica, tallado bajo luna llena.',
        descLarga: 'Nacido de roca volcánica molida mezclada con porcelanicrón negro. Fue tallado durante luna llena de octubre y pintado con pigmentos de tierras minerales. Ideal para espacios de estudio, meditación profunda o toma de decisiones importantes.',
        cuidados: 'Carga bajo luna llena. Limpia con incienso de copal. Ubícalo en zona norte del espacio o en el altar de los ancestros. Evita zonas con alta humedad.',
        imgs: ['../Imagenes - Videos/d17.jpeg', '../Imagenes - Videos/d17.jpeg', '../Imagenes - Videos/d17.jpeg'],
        img: '../Imagenes - Videos/d17.jpeg',
        elemento: 'Tierra', tiempo: '3–5 días', disponible: true,
    },
    {
        id: 4, name: 'Duende Guardián del Viento', category: 'Duendes', price: 135000,
        desc: 'Ser etéreo de porcelanicrón blanco, pintado con polvos de turquesa.',
        descLarga: 'Guardián alado creado con porcelanicrón blanco traslúcido decorado con polvos de turquesa, pluma natural y hilo de plata. Representa el aire, la comunicación y los mensajes del universo.',
        cuidados: 'Carga al exterior durante brisa matutina. Limpia con plumas de aves o campana de cuarzo. Sensible a golpes: manéjalo con cuidado especial.',
        imgs: ['../Imagenes - Videos/d18.jpeg', '../Imagenes - Videos/d18.jpeg', '../Imagenes - Videos/d18.jpeg'],
        img: '../Imagenes - Videos/d18.jpeg',
        elemento: 'Aire', tiempo: '3–5 días', disponible: true,
    },
    {
        id: 5, name: 'Esencia de Luna Nueva', category: 'Esencias', price: 38000,
        desc: 'Perfume ritual para rituales de inicio, con jazmín, salvia y plata coloidal.',
        descLarga: 'Creada para los rituales de luna nueva. Combina jazmín absoluto, salvia blanca, agua de rosas de Damasco y plata coloidal en base de alcohol de caña orgánico. Aroma fresco, floral y ligeramente amaderado.',
        cuidados: 'Úsala en luna nueva como parte de tu ritual. Aplica en el tercer ojo, las muñecas o el corazón. Conservar en lugar oscuro y fresco.',
        imgs: ['../Imagenes - Videos/d15.jpeg', '../Imagenes - Videos/d15.jpeg', '../Imagenes - Videos/d15.jpeg'],
        img: '../Imagenes - Videos/d15.jpeg',
        elemento: 'Agua', tiempo: '2–3 días', disponible: true,
    },
    {
        id: 6, name: 'Óleo de Tierra Sagrada', category: 'Óleos', price: 42000,
        desc: 'Mezcla de vetiver, pachulí y arcilla blanca para enraizamiento y protección.',
        descLarga: 'Formulado con vetiver de Haití, pachulí indonesio, arcilla blanca kaolín y chips de obsidiana negra. Aroma terroso, amaderado y persistente. Ideal para rituales de grounding y protección del aura.',
        cuidados: 'Aplica en plantas de los pies, base de la columna o palmas. Una gota es suficiente. Evitar contacto con ojos. Guardar tapado lejos del calor.',
        imgs: ['../Imagenes - Videos/d1.jpeg', '../Imagenes - Videos/d1.jpeg', '../Imagenes - Videos/d1.jpeg'],
        img: '../Imagenes - Videos/d1.jpeg',
        elemento: 'Tierra', tiempo: '2–3 días', disponible: true,
    },
    {
        id: 7, name: 'Duende Mensajero del Éter', category: 'Duendes', price: 160000,
        desc: 'Figura de porcelanicrón traslúcido con incrustaciones de cuarzo rosa.',
        descLarga: 'La pieza más etérea del refugio. Modelada en porcelanicrón semitransparente con incrustaciones de cuarzo rosa genuino, polvo de perla y hilo dorado. Facilita la intuición, los sueños lúcidos y la comunicación con guías espirituales.',
        cuidados: 'Carga bajo luna llena o durante eclipses. Limpia con agua de rosas y selenita. Colócalo cerca de la cama. No exponer al sol directo.',
        imgs: ['../Imagenes - Videos/d7.jpeg', '../Imagenes - Videos/d7.jpeg', '../Imagenes - Videos/d7.jpeg'],
        img: '../Imagenes - Videos/d7.jpeg',
        elemento: 'Éter', tiempo: '3–5 días', disponible: true,
    },
];

/*  WHATSAPP   */
function whatsappProducto(id) {
    const p = productos.find(x => x.id === id);
    if (!p) return;
    const msg = encodeURIComponent(
        `Hola! Me interesa adoptar: *${p.name}* ($${p.price.toLocaleString('es-CO')} COP). Esta disponible? `
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}

/*  MODALES */
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => modal.classList.add('modal-visible'));
    } else {
        modal.classList.remove('modal-visible');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

/* CARRITO LATERAL  */
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (!sidebar) return;
    sidebar.classList.toggle('cart-open');
}

function addToCart(id) {
    const product = productos.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(i => i.id === id);
    if (existing) { existing.qty += 1; }
    else { cart.push({ ...product, qty: 1 }); }
    updateCartUI();
    animateCartBadge();
    showToast(`Añadido: ${product.name} ✨`);
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar && !sidebar.classList.contains('cart-open')) {
        setTimeout(() => sidebar.classList.add('cart-open'), 300);
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const ivaEl = document.getElementById('cartIVA');
    const totalEl = document.getElementById('cartTotal');

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if (countEl) {
        countEl.textContent = totalQty;
        countEl.style.display = totalQty > 0 ? 'flex' : 'none';
    }

    if (!itemsEl) return;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<div class="empty-cart"><span class="empty-icon">🌿</span><p>Tu cesta está vacía.</p><p class="empty-sub">¡Busca algo de magia!</p></div>`;
        if (subtotalEl) subtotalEl.textContent = '$0';
        if (ivaEl) ivaEl.textContent = '$0';
        if (totalEl) totalEl.textContent = '$0';
        return;
    }

    let subtotal = 0;
    itemsEl.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return `<div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toLocaleString('es-CO')}</p>
        <div class="qty-controls">
          <button onclick="updateQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
    </div>`;
    }).join('');

    const iva = Math.round(subtotal * 0.19);
    const total = subtotal + iva;
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-CO')}`;
    if (ivaEl) ivaEl.textContent = `$${iva.toLocaleString('es-CO')}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-CO')}`;
}

function animateCartBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    badge.classList.remove('badge-pop');
    void badge.offsetWidth;
    badge.classList.add('badge-pop');
}

/* checkout: AQUÍ se pide login */
function checkout() {
    if (cart.length === 0) { showToast('Tu cesta está vacía 🌿'); return; }
    if (!isLoggedIn) {
        window._pendingCheckout = true;
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar) sidebar.classList.remove('cart-open');
        setTimeout(() => {
            const sub = document.querySelector('#loginModal .modal-sub');
            if (sub) sub.textContent = 'Inicia sesión para completar tu adopción 🌿';
            toggleModal('loginModal');
        }, 350);
        return;
    }
    procesarPago();
}

function procesarPago() {
    showToast('Redirigiendo a la pasarela mágica... ✨');
    setTimeout(() => {
        cart = [];
        updateCartUI();
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar) sidebar.classList.remove('cart-open');
    }, 1500);
}

/* LOGIN */
function loginUser() {
    const emailInput = document.querySelector('#loginForm input[type="email"]');
    if (emailInput && emailInput.value.trim() === '') {
        showToast('Por favor ingresa tu correo ✉️');
        return;
    }
    isLoggedIn = true;
    toggleModal('loginModal');
    showToast('¡Bienvenido al Refugio! ✨');
    updateLoginNavBtn();
    if (window._pendingCheckout) {
        window._pendingCheckout = false;
        setTimeout(() => procesarPago(), 400);
    }
    if (typeof renderProducts === 'function') renderProducts();
}

function logoutUser() {
    isLoggedIn = false;
    cart = [];
    updateCartUI();
    showToast('Has cerrado sesión 🌙');
    updateLoginNavBtn();
    if (typeof renderProducts === 'function') renderProducts();
}

function updateLoginNavBtn() {
    const btn = document.getElementById('loginNavBtn');
    if (!btn) return;
    if (isLoggedIn) {
        btn.innerHTML = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;
        btn.classList.add('logged-in');
        btn.title = 'Cerrar sesión';
        btn.onclick = logoutUser;
    } else {
        btn.innerHTML = `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`;
        btn.classList.remove('logged-in');
        btn.title = 'Iniciar sesión';
        btn.onclick = () => toggleModal('loginModal');
    }
}

/* CATÁLOGO — renderizado */
function renderProducts(filtro) {
    if (filtro === undefined) filtro = 'Todos';
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const filtered = filtro === 'Todos'
        ? productos
        : productos.filter(p => p.category === filtro);

    grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card scroll-reveal" style="transition-delay:${i * 0.07}s">
      <a href="Producto.html?id=${p.id}" class="product-img-wrap" style="display:block;cursor:none;">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="product-badge">${p.category}</span>
        <span class="product-elemento-badge">${p.elemento}</span>
      </a>
      <div class="product-body">
        <h3 class="product-name"><a href="Producto.html?id=${p.id}" style="color:inherit;">${p.name}</a></h3>
        <p class="product-desc">${p.desc}</p>
        <p class="product-price">$${p.price.toLocaleString('es-CO')} COP</p>
        <div class="product-actions">
           <button onclick="addToCart(${p.id})" class="btn-adopt">
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                 <span>Al carrito</span>
                </button>
          <button onclick="whatsappProducto(${p.id})" class="btn-whatsapp" title="Consultar por WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </button>
        </div>
      </div>
    </div>`
    ).join('');

    observeScrollReveal();
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(category);
}

/* TOAST */
function showToast(msg) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('toast-show');
    setTimeout(() => toast.classList.remove('toast-show'), 3000);
}

/* SCROLL REVEAL */
function observeScrollReveal() {
    const els = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
}

/* PARALLAX */
function initParallax() {
    const hero = document.querySelector('.hero-parallax');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        hero.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }, { passive: true });
}

/* CURSOR PERSONALIZADO */
function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const cursor = document.createElement('div');
    cursor.id = 'magicCursor';
    cursor.innerHTML = '<span class="cursor-dot"></span><span class="cursor-ring"></span>';
    document.body.appendChild(cursor);
    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px)`;
    });
    (function animateRing() {
        rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
        requestAnimationFrame(animateRing);
    })();
    document.addEventListener('mouseover', e => {
        if (e.target.closest('a, button')) cursor.classList.add('cursor-hover');
        else cursor.classList.remove('cursor-hover');
    });
}

/* PARTÍCULAS MÁGICAS */
function initParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    const symbols = ['✦', '✧', '⋆', '✺', '❋', '✿', '⟡'];
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 6}s;animation-duration:${4 + Math.random() * 6}s;font-size:${10 + Math.random() * 14}px;opacity:${0.2 + Math.random() * 0.5};`;
        container.appendChild(p);
    }
}

/* OTROS */
function submitContact(e) {
    e.preventDefault();
    showToast('¡Mensaje enviado! Los elementales te contactarán pronto 🌿');
    e.target.reset();
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('menu-open');
}

/*  INIT */
document.addEventListener('DOMContentLoaded', () => {
    observeScrollReveal();
    initParallax();
    initParticles();
    initCursor();
    updateCartUI();

    if (typeof renderProducts === 'function') renderProducts();

    document.querySelectorAll('.accordion-header').forEach(h => {
        h.addEventListener('click', () => {
            const item = h.parentElement;
            const body = item.querySelector('.accordion-body');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('open');
                i.querySelector('.accordion-body').style.maxHeight = '0';
            });
            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
});