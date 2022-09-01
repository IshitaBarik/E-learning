//Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    console.log("user scrolled")
    myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");
console.log(navbar)

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky)
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset != sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Navbar-Menu
document.getElementById("hamburger").addEventListener('click', function(){
    document.getElementById("navbar-collapse").classList.toggle("opened-nav")
})
document.getElementById("hamburger2").addEventListener('click', function(){
    document.getElementById("navbar-collapse").classList.toggle("opened-nav")
})

//OwlCarousel
$(".slider").owlCarousel({
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        900:{
            items:1,
        }
    }
 });

$(".CourseComputer").owlCarousel({
    margin:40,
    nav:true,
    loop:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,
        },
        900:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
});
