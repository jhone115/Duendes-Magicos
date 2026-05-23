/* DUENDES MÁGICOS — Componentes compartidos (Header + Cart + Modal) */

function injectSharedUI() {
  /*  Header  */
  const headerHTML = `
<header>
  <div class="nav-inner">
    <a href="Home.html" class="nav-logo">DUENDES MÁGICOS</a>

    <nav>
      <ul class="nav-links" id="navLinks">
        <li><a href="Home.html" id="nav-home">Inicio</a></li>
        <li><a href="Nosotros.html" id="nav-nosotros">Nosotros</a></li>
        <li><a href="Catalogo.html" id="nav-catalogo">Catálogo</a></li>
        <li><a href="Consejeria.html" id="nav-consejeria">Consejería</a></li>
        <li><a href="Contacto.html" id="nav-contacto">Contacto</a></li>
      </ul>
    </nav>

    <div class="nav-actions">
      <button class="nav-icon-btn" id="loginNavBtn" onclick="toggleModal('loginModal')" title="Acceso">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </button>
      <button class="nav-icon-btn" onclick="toggleCart()" title="Carrito">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span class="cart-badge" id="cartCount">0</span>
      </button>
      <button class="hamburger" onclick="toggleMobileMenu()" title="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <nav id="mobileMenu">
    <a href="Home.html">Inicio</a>
    <a href="Nosotros.html">Nosotros</a>
    <a href="Catalogo.html">Catálogo</a>
    <a href="Consejeria.html">Consejería</a>
    <a href="Contacto.html">Contacto</a>
  </nav>
</header>`;

  /*  Cart Sidebar  */
  const cartHTML = `
<div id="cartSidebar">
  <div class="cart-header">
    <h2>✨ Tus Compañeros</h2>
    <button class="cart-close" onclick="toggleCart()">×</button>
  </div>
  <div id="cartItems">
    <div class="empty-cart">
      <span class="empty-icon">🌿</span>
      <p>Tu cesta está vacía.</p>
      <p class="empty-sub">¡Busca algo de magia!</p>
    </div>
  </div>
  <div class="cart-footer">
    <div class="cart-totals">
      <div class="row"><span>Subtotal</span><span id="cartSubtotal">$0</span></div>
      <div class="row"><span>IVA (19%)</span><span id="cartIVA">$0</span></div>
      <div class="row total"><span>Total</span><span id="cartTotal">$0</span></div>
    </div>
    <button class="btn-checkout" onclick="checkout()">Proceder al Pago 🌿</button>
    <p class="cart-iva-note">IVA incluido. Envío calculado al finalizar.</p>
  </div>
</div>`;

  /*  Login Modal  */
  const modalHTML = `
<div id="loginModal" class="modal-overlay hidden">
  <div class="modal-box" data-modal-content>
    <button class="modal-close" onclick="toggleModal('loginModal')">×</button>
    <div class="modal-icon">🌿</div>
    <h2 class="modal-title">Acceso al Refugio</h2>
    <p class="modal-sub">Inicia sesión para descubrir precios y adopciones exclusivas.</p>
    <form id="loginForm">
      <div class="form-group">
        <label>Correo Elemental</label>
        <input type="email" placeholder="tu@correo.com">
      </div>
      <div class="form-group">
        <label>Contraseña Mágica</label>
        <input type="password" placeholder="••••••••">
      </div>
      <button type="button" onclick="loginUser()" class="btn-primary" style="width:100%;justify-content:center;margin-top:0.5rem;">
        Entrar al Refugio
      </button>
    </form>
    <p style="text-align:center;font-size:0.78rem;color:var(--texto-suave);margin-top:1.25rem;">
      ¿No tienes cuenta? <a href="#" style="color:var(--verde);font-weight:700;">Regístrate aquí</a>
    </p>
  </div>
</div>`;

  // Inyectar al inicio del body
  document.body.insertAdjacentHTML('afterbegin', modalHTML + cartHTML);
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Marcar link activo
  const path = window.location.pathname.split('/').pop();
  const map = {
    'Home.html': 'nav-home',
    'Nosotros.html': 'nav-nosotros',
    'Catalogo.html': 'nav-catalogo',
    'Consejeria.html': 'nav-consejeria',
    'Contacto.html': 'nav-contacto',
  };
  const activeId = map[path];
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
}

// Ejecutar inmediatamente
injectSharedUI();