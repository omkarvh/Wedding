// Show popup after 5 seconds
        window.onload = function () {
            setTimeout(() => {
                document.getElementById("popup").style.display = "block";
                document.getElementById("overlay").style.display = "block";
            }, 15000);
        };

        // Close the popup
        function closePopup() {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }

        // Download calendar event
        function downloadCalendar() {
            const title = "Omkar Wedding Celebration";
            const description = "Omkar Wedding celebration is today wake up muhurtam time is 11:00 AM";
            const location = "Ghale Function Hall";
            const startDate = "20241225T090000";
            const endDate = "20241225T100000";

            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR`;

            const blob = new Blob([icsContent], { type: "text/calendar" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "event.ics";
            link.click();

            // Close popup after download
            closePopup();
        }











(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

// Automatically play video when the modal opens
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");

videoModal.addEventListener("shown.bs.modal", () => {
    videoPlayer.play();
});

// Pause video when the modal is closed
videoModal.addEventListener("hidden.bs.modal", () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Reset video to start
});


//count down timer

function updateCountdown() {
    const targetDate = new Date("December 25, 2024 11:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "The time has arrived!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately

