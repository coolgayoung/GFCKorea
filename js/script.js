document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    const openBtn = document.getElementById("mobileMenuBtn");
    const closeBtn = document.getElementById("mobileMenuClose");
    const menu = document.getElementById("mobileMenu");
    openBtn.addEventListener("click", () => {
        menu.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.add("hidden");
    })

    var swiper = new Swiper('.rollingBanner', {
        loop: true, // Infinite loop of banners
        // effect: 'fade',
        autoplay: {
            delay: 3000, // Change banner every 3 seconds
        },
        slidesPerView: 7,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination', // Optional: Add pagination dots
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Optional: Next button
            prevEl: '.swiper-button-prev', // Optional: Previous button
        },
        loopAdditionalSlides: 3,
    });

    var swiper = new Swiper('.rollingCardBanner', {
        loop: true, // Infinite loop of banners
        // effect: 'fade',
        autoplay: {
            delay: 3000, // Change banner every 3 seconds
        },
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination', // Optional: Add pagination dots
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Optional: Next button
            prevEl: '.swiper-button-prev', // Optional: Previous button
        },
        loopAdditionalSlides: 3,
    });

    $(document).ready(function () {
        function startCounting() {
            $('.counting').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                    //num 초기화
                    $this.text("0");

                $({ countNum: 0 }).animate(
                    {
                        countNum: countTo,
                    },
                    {
                        duration: 1000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            console.log('finished: ${this.countNum}')
                        },
                    }
                );
            });
        }

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return elemBottom > docViewTop && elemTop < docViewBottom;
        }

        var countingTriggered = false;

        $(window).on('scroll', function () {
            if (isScrolledIntoView('.grid-container')) {
                if(!countingTriggered) {
                    console.log('숫자 카운팅 실행')
                    startCounting();
                    countingTriggered = true;

                    //3초 후 초기화, 재실행
                    setTimeout(() => {
                        countingTriggered = false;
                    }, 3000);
                }
            }
        });


        
    });
});


