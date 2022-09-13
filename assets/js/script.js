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
  

  
$(function () {
    
    let headers = $("#black-slider .tab-menu .tab-header div");
    let contents = $("#black-slider .tab-menu .tab-body .swiperr");
  
     for (const header of headers) {
      $(header).on("click", function() {
       
          $(".active").removeClass("active");
          $(header).addClass("active");
          
          
          for (const content of contents) {
              if ($(header).attr("data-id") == $(content).attr("data-id")) {
                  $(content).removeClass("d-none");
                  var swiper = new Swiper(".mySwiper1", {
                    slidesPerView:4,
                    loop:true,
                    spaceBetween:20,
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false,
                    },
                    breakpoints:{
                        0:{
                            slidesPerView:1,
                        },
                        550:{
                            slidesPerView:2,
                        },
                        800:{
                            slidesPerView:3,
                        },
                        1000:{
                            slidesPerView:4,
                        },
                    },
                    pagination:{
                        el:".swiper-pagination",
                        clickable:true,
                    }
                  });
                  
              }else {
                  $(content).addClass("d-none");
              }
          }
          

      })
      
     }
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView:4,
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:4,
        },
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
  });
  


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView:5,
    loop:true,
    spaceBetween:20,
    // autoplay:{
    //     delay:3000,
    //     disableOnInteraction:false,
    // },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:4,
        },
        1000:{
            slidesPerView:5,
        },
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
  });