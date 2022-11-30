var menu = document.querySelector('.hamburgeza');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector(".todos")
const btnNorte = document.querySelector(".Z-Norte")
const btnSur = document.querySelector(".Z-sur")
const btnEste = document.querySelector(".Z-Este")
const btnOeste = document.querySelector(".Z-Oeste")
const contenedorCasas = document.querySelector(".casas")
document.addEventListener('DOMContentLoaded', () => {
    eventos();

});
const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();

}
const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    while (navegacion.children[5]) {
        navegacion.removeChild(navegacion.children[5])
    }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    })
})


imagenes.forEach(imagen => {
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);

})


const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
    });
    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}/*
const casas = () => {
    let casasArreglo = [];
    const casas = document.querySelectorAll('.casa');
    casas.forEach(casa => casasArreglo = [...casasArreglo, casa]);
    const apartamentos = casasArreglo.filter(apartamento => apartamento.getAttribute('data-casa') === 'apartamento');
    const hogar = casasArreglo.filter(casa => casa.getAttribute('data-casa') === 'casa');
    const comercio = casasArreglo.filter(comercio => comercio.getAttribute('data-casa') === 'comercio');
    const terreno = casasArreglo.filter(terreno => terreno.getAttribute('data-casa') === 'terreno');
    const galpon = casasArreglo.filter(galpon => galpon.getAttribute('data-casa') === 'galpon');
    mostrarCasas(galpon, hogar, terreno, comercio, apartamentos);
}
const mostrarCasas = (hogar, galpon, terreno, comercio, aparatamentos) => {
    btnSur.addEventListener('click', () => {
        casas.forEach(casas => contenedorCasas.appendChild(casas))
    })
}*/


$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// FILTRANDO PRODUCTOS  ============================================

$('.category_item').click(function () {
    var catProduct = $(this).attr('category');

    console.log(catProduct);

    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

    // OCULTANDO PRODUCTOS =========================
    $('.product-item').css('transform', 'scale(0)');
    function hideProduct() {
        $('.product-item').hide();
    } setTimeout(hideProduct, 400);

    // MOSTRANDO PRODUCTOS =========================
    function showProduct() {

        $('.product-item[category="' + catProduct + '"]').show();
        $('.product-item[category="' + catProduct + '"]').css('transform', 'scale(1)');
    } setTimeout(showProduct, 400);
});

// MOSTRANDO TODOS LOS PRODUCTOS =======================

$('.category_item[category="all"]').click(function () {

    function showAll() {
        $('.product-item').show();
        $('.product-item').css('transform', 'scale(1)');
    } setTimeout(showAll, 400);
});