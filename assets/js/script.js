var swiper = new Swiper(".mySwiper", {
    slidesPerView:4,
    loop:true,
    spaceBetween:20,
    // autoplay:{
    //     delay:7000,
    //     disableOnInteraction:false,
    // },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:1,
        },
        800:{
            slidesPerView:1,
        },
        1000:{
            slidesPerView:1,
        },
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
  });
  