tabs("product_tab-link", "product_tab-body");
setJsVoid(document.querySelectorAll(".product_tab-link"));

function tabs(btnClass, blockClass) {
  var link = document.querySelectorAll("." + btnClass);
  var tabs = document.querySelectorAll("." + blockClass);

  for (var i = 0; i < link.length; i++) {
    setClick(i);
  }

  function setClick(i) {
    link[i].addEventListener('click', function() {
      removeClass(link, 'active');
      removeClass(tabs, 'active');
      // При клике - убрать активный класс со всех кнопок и блоков,
      
      addClass(link[i], 'active');
      addClass(tabs[i], 'active');
      // Добавить на нужные элементы.
    });
  }
}

/**************************/

function addClass(elems, className) {
  if (elems instanceof HTMLElement) {
    elems.classList.add(className);
    return;
  }

  for (var i = 0; i < elems.length; i++) {
    elems[i].classList.add(className);
  }
}

function removeClass(elems, className) {
  if (elems instanceof HTMLElement) {
    elems.classList.remove(className);
    return;
  }

  for (var i = 0; i < elems.length; i++) {
    elems[i].classList.remove(className);
  }
}

function setJsVoid(elems) {
  for (var i = 0; i < elems.length; i++) {
    elems[i].setAttribute('href', "javascript:void(0);");
  }
}