$(document).ready(function () {
    "use strict";
    $('.our_client_content').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<img src='assets/images/left_arrow.png'>", "<img src='assets/images/right_arrow.png'>"]
    });

    $('.banner_area_carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        // autoplay: true,
        smartSpeed: 5000,
        navText: ["<img src='assets/images/banner/left.png'>", "<img src='assets/images/banner/right.png'>"]
    });

   


      $('.popup_magnific').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }

    });
     
      

});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.download_pdf');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var link = this.getAttribute('data-href'); // Get the data-href attribute value

            // Download the PDF
            var a = document.createElement('a');
            a.href = link;
            a.download = link.split('/').pop(); // Set the filename to be the same as the file's name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Open PDF in a new tab
            setTimeout(function() {
                window.open(link, '_blank');
            }, 500); // Add a delay to ensure the download is triggered first
        });
    });
});


// mega menu click script  
// var menu_count = 0;
// var menu_count1 = 0;
// $(document).on('click','.solutions_menu',function(){
//   if(menu_count == 0){
//     $('.mega_menu_mail').show();
//     $(this).addClass('active'); 
//     $('.drop_menu').removeClass('active'); 
//     $('.drop_down_menu').hide();
//     menu_count = 1;
//     menu_count1 = 0;
//   }else{ 
//     $('.mega_menu_mail').hide();
//     $(this).removeClass('active'); 
//     menu_count = 0
//   }
//   return false;
// });


// dorp down menu click  
// $(document).on('click','.drop_menu',function(){
//   if(menu_count1 == 0){
//     $('.drop_down_menu').show();
//     $('.mega_menu_mail').hide();
//     $('.solutions_menu').removeClass('active'); 
//     $(this).addClass('active'); 
//     menu_count1 = 1;
//     menu_count = 0
//   }else{ 
//     $('.drop_down_menu').hide();
//     $(this).removeClass('active'); 
//     menu_count1 = 0
//   }

//   return false;
// });


// mega menu hover script 
const menuItem = document.querySelector(".mega_show_at");
const megaMenu = document.querySelector(".mega_menu_mail");

menuItem.addEventListener("mouseenter", () => {
    megaMenu.style.display = "block";
    $('.drop_menu').removeClass('active');
    $('.drop_down_menu').hide();
    $('.solutions_menu').addClass('active');
});

menuItem.addEventListener("mouseleave", () => {
    megaMenu.style.display = "none";
    $('.solutions_menu').removeClass('active');
});

// drop down menu hover script 
const menuItem2 = document.querySelector(".drop_menu_at");
const megaMenu2 = document.querySelector(".drop_down_menu");

menuItem2.addEventListener("mouseenter", () => {
    megaMenu2.style.display = "block";
    $('.mega_menu_mail').hide();
    $('.solutions_menu').removeClass('active');
    $('.drop_menu').addClass('active');
});

menuItem2.addEventListener("mouseleave", () => {
    megaMenu2.style.display = "none";
    $('.drop_down_menu').hide();
    $('.drop_menu').removeClass('active');
});

// drop down menu hover script 
const menuItem3 = document.querySelector(".drop_menu_at2");
const megaMenu3 = document.querySelector(".drop_down_menu2");

menuItem3.addEventListener("mouseenter", () => {
    megaMenu3.style.display = "block";
    $('.mega_menu_mail').hide();
    $('.solutions_menu').removeClass('active');
    $('.drop_menu').removeClass('active');
    $('.drop_menu2').addClass('active');
});

menuItem3.addEventListener("mouseleave", () => {
    megaMenu3.style.display = "none";
    $('.drop_down_menu').hide();
    $('.drop_menu2').removeClass('active');
});



// mobile menu script 
var menu_count2 = 0;
$(document).on('click', '.click_bars', function () {

    if (menu_count2 == 0) {
        $('.menu_mobile_last').show();
        $('.click_bars').html('<i class="fa-solid fa-xmark"></i>');
        menu_count2 = 1
    } else {
        $('.menu_mobile_last').hide();
        $('.mega_menu').hide();
        $('.dorp_down').hide();
        $('.click_bars').html('<i class="fas fa-bars"></i>');
        menu_count2 = 0
    }

    return false;
});


// mobile collaps menu script 
$(document).ready(function () {
    $('.collaps_menu').hide();

    $('.menu_ul > li > .drop_menu').click(function (event) {
        if ($(window).width() < 992) {
            event.preventDefault();

            $(this).next('ul').slideToggle('slow');
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 992) {
            $('.menu_ul ul').css('display', '');
        } else {
            $('.menu_ul ul').slideUp('slow');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const screenWidth = window.innerWidth;

    if (screenWidth > 992) {
        const shapes = document.querySelectorAll('.shape');

        shapes.forEach((shape, index) => {
            shape.addEventListener('mouseover', () => handleMouseOver(shape, index, shapes));
            shape.addEventListener('mouseleave', resetShapes);
        });
    }
});

function handleMouseOver(targetShape, index, shapes) {
    targetShape.classList.add('active');
    shapes.forEach((shape, i) => {
      if (i !== index && !shape.classList.contains('inactive')) {
        shape.classList.add('inactive');
      }
    });
  }

function resetShapes() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape) => {
        shape.classList.remove('active', 'inactive');
    });
}



if (document.getElementById("contact-form")) {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        var form = event.target;
        var AllValidation = form.querySelector('.v-general');
        // First Name validation
        var firstNameInput = form.querySelector('#first-name');
        var firstNameValidation = form.querySelector('.v-fn');
        if (!firstNameInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            firstNameValidation.style.display = "block"; // Show validation message
            AllValidation.style.display = "block"; // Show validation message
        } else {
            firstNameValidation.style.display = "none"; // Hide validation message
            AllValidation.style.display = "none"; // Hide validation message
        }

        // Last Name validation
        var lastNameInput = form.querySelector('#last-name');
        var lastNameValidation = form.querySelector('.v-ln');
        if (!lastNameInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            lastNameValidation.style.display = "block"; // Show validation message
            AllValidation.style.display = "block"; // Show validation message
        } else {
            lastNameValidation.style.display = "none"; // Hide validation message
            AllValidation.style.display = "none"; // Hide validation message
        }

        // Company validation
        var companyInput = form.querySelector('#company');
        var companyValidation = form.querySelector('.v-c');
        if (!companyInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            companyValidation.style.display = "block"; // Show validation message
            AllValidation.style.display = "block"; // Show validation message
        } else {
            companyValidation.style.display = "none"; // Hide validation message
            AllValidation.style.display = "none"; // Hide validation message
        }


        // Email validation
        var emailInput = form.querySelector('#email');
        var emailValidation = form.querySelector('.v-e');
        if (!emailInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            emailValidation.style.display = "block"; // Show validation message
            AllValidation.style.display = "block"; // Show validation message
        } else {
            emailValidation.style.display = "none"; // Hide validation message
            AllValidation.style.display = "none"; // Hide validation message
        }
    })
}