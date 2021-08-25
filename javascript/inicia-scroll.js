document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", function() {
    this.classList.toggle("descubierto");
  });
});

var cabecera = basicScroll.create({
  elem: document.querySelector('.cabecera'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--titular-pos': {
      from: '0',
      to: '60vh'
    }
  }
});

var imagen1 = basicScroll.create({
  elem: document.querySelector('.perro1'),
  from: 'top-bottom',
  to: 'middle-bottom',
  props: {
    '--imagen1': {
      from: '15%',
      to: '-3%'
    }
  }
});

var imagen2 = basicScroll.create({
  elem: document.querySelector('.adopFondo'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--imagen2': {
      from: '0%',
      to: '-50%'
    }
  }
});




cabecera.start();
imagen1.start();
imagen2.start();