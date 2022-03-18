// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

//for Dark mode
$( ".inner-switch" ).on("click", function() {
    if( $( "html" ).hasClass( "dark" )) {
      $( "html" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "html" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});

//for slick slider
$(document).ready(function(){

    $('.items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
    });
    });