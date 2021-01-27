$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: true,
    dots: true,
    dotsClass: 'before-slider_dots',
  });
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  dots: true,
  dotsClass: 'review-slider_dots',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

//слайдер в карточке товара
jQuery(document).ready(function($){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    itemWidth: 210,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    centerPadding: '0px',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    slideWidth: '150px',
    listWidth: '150px',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtЗначение = a[i].textСодержание || a[i].innerText;
    if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
};


/*filter_accordion*/

var acc = document.getElementsByClassName("filter_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion_active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$('.select').on('click', function(){
  $('.select_dropdown').toggleClass('select_dropdown_open');
});

$('.select_option').on('click', function(){
  var value = $(this).attr('data-value');
  $('#select_type').val(value);
  $('.select_checked').text(value);
  $('.select_dropdown').toggleClass('select_dropdown_open');
});


//accordion
var accordions = document.getElementsByClassName("product_accordion-title");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}