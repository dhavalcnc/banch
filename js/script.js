jQuery(window).on("load", function () {
  setTimeout(function () {
    jQuery(".banner .animation_sec").addClass("come-in");
    setTimeout(function () {
      jQuery(".countdown.animation_sec").addClass("come-in");
    }, 300); // Delay for the second animation
  }, 300); // Initial delay before first animation
});

jQuery(document).ready(function ($) {
  // Initialize the first element as active
  const $rightColItems = $(".our_goal .inner .right_col li");
  const $firstItem = $rightColItems.first();

  $firstItem.find("h3").addClass("active");
  $firstItem.find(".text").slideDown();

  // Click event handler
  $rightColItems.find("h3").click(function () {
    const $this = $(this);

    // If the clicked item is already active, do nothing
    if ($this.hasClass("active")) return;

    // Remove active class and slide up all text elements
    $rightColItems.find("h3").removeClass("active");
    $rightColItems.find(".text").slideUp();

    // Add active class to clicked element and slide down the corresponding text
    $this.addClass("active");
    $this.next(".text").slideDown();
  });

  $("header ul li a,footer .bottom_footer ul li a").each(function () {
    var _this = $(this); // Store the jQuery object
    var currentWidth = _this.width(); // Get the width of the element
    console.log(currentWidth);
    var newWidth = currentWidth + 6; // Add 5 to the current width
    _this.css("width", newWidth + "px"); // Set the new width
  });

  // let lastScrollTop = 0; // Keep track of the last scroll position

  // $(window).on("scroll", function () {
  //   let currentScroll = $(this).scrollTop(); // Get the current scroll position

  //   if (currentScroll > lastScrollTop) {
  //     // Scrolling down
  //     $("header").addClass("hidden");
  //   } else {
  //     // Scrolling up
  //     $("header").removeClass("hidden");
  //   }

  //   lastScrollTop = currentScroll; // Update the last scroll position
  // });

  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop(); // Get the current scroll position

    if (currentScroll <= 0) {
      // If scrolled to the very top
      $("header").removeClass("hidden");
    } else if (currentScroll > lastScrollTop && currentScroll > 50) {
      // Scrolling down and scrolled at least 50px
      $("header").addClass("hidden");
    } else {
      // Scrolling up
      $("header").removeClass("hidden");
    }

    lastScrollTop = currentScroll; // Update the last scroll position
  });

  $("header ul li.menu-item-has-children>a").after("<span></span>");
  if ($(window).width() < 767) {
    $("header nav>ul>li span").click(function () {
      $(this).toggleClass("open");
      $(this).next().slideToggle();
    });
  }

  $("header .navbar-toggler").click(function () {
    $(this).toggleClass("active");
    $("header nav").toggleClass("active");
  });

  $("header ul li a").click(function () {
    $("header .navbar-toggler").removeClass("active");
    $("header nav").removeClass("active");
  });

  /* megnify */
  $('[data-pop="megnify"]').each(function () {
    var _this = $(this);
    _this.find(".image-pop").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },

      zoom: {
        enabled: true,
        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function
        opener: function (openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  });
  /* megnify */

  (function ($) {
    $.fn.visible = function (partial) {
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        bottom = _top + $t.height(),
        compareTop = partial === true ? bottom : _top,
        compareBottom = partial === true ? _top : bottom;

      return compareBottom <= viewBottom && compareTop >= viewTop;
    };
  })(jQuery);

  var win = $(window);
  var allMods = $(".animation_sec,.rr_footer,footer");
  win.scroll(function (event) {
    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        setTimeout(function () {
          el.addClass("come-in");
        }, i * 50);
      }
    });
  });

  // Function to pause all videos
  function pauseAllVideos() {
    $("video").each(function () {
      this.pause(); // Pause the video
      $(this).siblings(".play-icon").show(); // Show the play icon
      $(this).siblings(".pause-icon").hide(); // Hide the pause icon
    });
  }

  // Play/Pause on clicking the play-icon
  $(".customers-testimonials .item").on("click", ".play-icon", function () {
    let $video = $(this).siblings("video"); // Target the video in the current item

    pauseAllVideos(); // Pause all other videos

    $video.get(0).play(); // Play the clicked video

    // Toggle play/pause icons
    $(this).hide(); // Hide the play icon
    $(this).siblings(".pause-icon").show(); // Show the pause icon
  });

  // Pause on clicking the pause-icon
  $(".customers-testimonials .item").on("click", ".pause-icon", function () {
    let $video = $(this).siblings("video"); // Target the video in the current item

    $video.get(0).pause(); // Pause the video

    // Toggle play/pause icons
    $(this).hide(); // Hide the pause icon
    $(this).siblings(".play-icon").show(); // Show the play icon
  });
});

(function ($) {
  $(window).scroll(function () {
    var sticky = $("header"),
      scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  if ($(window).width() > 767) {
    /* banner aniamtion */
    gsap.registerPlugin(ScrollTrigger);
    let scrollDistance3 = 370;
    const circlezoom = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner_image",
        scrub: 0.1,
        pin: true,

        //start: "top-=65% top+=20%", // Start at top
        start: "top top+=50%",
        end: `+=${scrollDistance3}`,
        //end: "bottom top+=80%", // End when bottom hits top
        //markers: true, // Debug markers
        pinSpacing: true, // Pin with accurate spacing
      },
    });

    circlezoom.to(".banner_image .bg", {
      top: "0%",
      scale: 1,
      ease: "none",
      borderRadius: "112px",
    });
    /* banner aniamtion end  */

    /* Three blog */
    if ($(".on_instagram").length > 0) {
      gsap.registerPlugin(ScrollTrigger);
      let scrollDistance1 = 300;

      // Timeline with ScrollTrigger
      const circlezoom1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".on_instagram",
          scrub: 0.5, // Smooth scrolling animation
          start: "top 100%", // Start when .on_instagram reaches 60% of the viewport
          end: `+=${scrollDistance1}`, // Animation ends after scrollDistance1
          pin: false, // No pinning
          //markers: true, // Debugging markers (remove in production)
          onUpdate: (self) => {
            let progress = self.progress; // Progress of scroll (0 to 1)
            if (progress >= 0.8) {
              document.querySelector(".on_instagram").classList.add("active");
            } else {
              document
                .querySelector(".on_instagram")
                .classList.remove("active");
            }

            if (progress >= 0.99) {
              document.querySelector(".on_instagram").classList.add("open");
            } else {
              document.querySelector(".on_instagram").classList.remove("open");
            }

            if (progress >= 0.8) {
              document.querySelector(".comman_sec").classList.add("active");
            } else {
              document.querySelector(".comman_sec").classList.remove("active");
            }
          },
        },
      });

      circlezoom1.to(".on_instagram", {
        y: -300, // Moves up by 150px
        ease: "none",
      });
      /* Three blog end */
    }

    /* Three blog */
    if ($(".social_media").length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      let scrollDistance2 = 600;

      // Timeline with ScrollTrigger
      const circlezoom2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".social_media",
          scrub: 0.5, // Smooth scrolling animation
          start: "top top+=10%", // Start when .social_media reaches 50% of the viewport
          end: `+=${scrollDistance2}`, // Animation ends after scrollDistance2
          //markers: true, // Debugging markers (remove in production)
          pinSpacing: true,
          pin: true,
        },
      });

      // Animate scale while maintaining position values
      circlezoom2.to(".social_media .bg", {
        //y: 0, // Maintains the top position at -50px
        //marginLeft: "0", // Maintains margin-left
        //scale: 0.8, // Scale to 1
        maxWidth: "70%",
        maxHeight: "70%",
        borderRadius: "100px", // Keeps the border-radius
        ease: "none",
      });

      let scrollDistance4 = 600;
      const circlezoom4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".banchmarketing",
          scrub: 0.5, // Smooth scrolling animation
          start: "top 100%", // Start when .on_instagram reaches 60% of the viewport
          end: `+=${scrollDistance4}`, // Animation ends after scrollDistance1
          pin: false, // No pinning
        },
      });

      circlezoom4.to(".banchmarketing h2", {
        x: 0, // Moves up by 150px
        ease: "none",
      });
    }

    if ($(".profitable_campaigns").length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      const scrollDistance11 = 800;

      // Loop through each `.profitable_campaigns` section
      $(".profitable_campaigns").each(function (index, section) {
        const $section = $(this); // Current section
        const sectionId = $section.attr("id"); // Get the ID of the section (optional)
        console.log(sectionId);
        if ($("#" + sectionId + " .animation_col .col").length > 1) {
          // Create a timeline for each section
          const animationTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: "#" + sectionId, // Trigger animation for the current section
              start: "top top", // Start when the section reaches the top of the viewport
              end: `+=${scrollDistance11}`, // Animation duration
              scrub: true, // Smooth scrolling animations
              pin: true, // Pin the section during animations
              //markers: true, // Enable debugging markers (remove in production)
            },
          });

          // Sequential animations for the `.col` elements in the current section
          animationTimeline
            .to(`${"#" + sectionId} .col1`, {
              top: 0,
              ease: "power1.out",
              duration: 0.5,
              onComplete: () => {
                const col1 = document.querySelector(`${"#" + sectionId} .col1`);
                col1.classList.add("active");

                setTimeout(() => {
                  col1.classList.add("open");
                }, 200);
              },
              onReverseComplete: () => {
                const col1 = document.querySelector(`${"#" + sectionId} .col1`);
                gsap.to(col1, {
                  top: "250%",
                  duration: 0.5,
                  onComplete: () => {
                    col1.classList.remove("open");
                    col1.classList.remove("active");
                  },
                });
              },
            })
            .to(
              `${"#" + sectionId} .col2`,
              {
                top: 0,
                ease: "power1.out",
                duration: 0.5,
                onComplete: () => {
                  const col2 = document.querySelector(
                    `${"#" + sectionId} .col2`
                  );
                  col2.classList.add("active");

                  setTimeout(() => {
                    col2.classList.add("open");
                  }, 200);
                },
                onReverseComplete: () => {
                  const col2 = document.querySelector(
                    `${"#" + sectionId} .col2`
                  );
                  gsap.to(col2, {
                    top: "250%",
                    duration: 0.5,
                    onComplete: () => {
                      col2.classList.remove("open");
                      col2.classList.remove("active");
                    },
                  });
                },
              },
              "+=0.5"
            )
            .to(
              `${"#" + sectionId} .col3`,
              {
                top: 0,
                ease: "power1.out",
                duration: 0.5,
                onComplete: () => {
                  const col3 = document.querySelector(
                    `${"#" + sectionId} .col3`
                  );
                  col3.classList.add("active");

                  setTimeout(() => {
                    col3.classList.add("open");
                  }, 200);
                },
                onReverseComplete: () => {
                  const col3 = document.querySelector(
                    `${"#" + sectionId} .col3`
                  );
                  gsap.to(col3, {
                    top: "250%",
                    duration: 0.5,
                    onComplete: () => {
                      col3.classList.remove("open");
                      col3.classList.remove("active");
                    },
                  });
                },
              },
              "+=0.5"
            );
        }
      });
    }
  }
})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {
//   const onInstagramSection = document.querySelector(".on_instagram");
//   const commanSecSection = document.querySelector(".comman_sec");

//   if (onInstagramSection && commanSecSection) {
//     window.addEventListener("scroll", function () {
//       const rect = onInstagramSection.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       // Check if .on_instagram is in the viewport
//       if (rect.top < viewportHeight && rect.bottom > 0) {
//         // .on_instagram is in the viewport, add class to both sections
//         commanSecSection.classList.add("active");
//         onInstagramSection.classList.add("active");
//         onInstagramSection.classList.add("open");
//       } else {
//         // .on_instagram is out of the viewport, remove class from both sections
//         commanSecSection.classList.remove("active");
//         onInstagramSection.classList.remove("active");
//         onInstagramSection.classList.remove("open");
//       }
//     });
//   }
// });

/* Three blog */
if ($(".casestudy_instagram").length > 0) {
  gsap.registerPlugin(ScrollTrigger);
  let scrollDistance5 = 90;

  // Timeline with ScrollTrigger
  const circlezoom5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".casestudy_instagram",
      scrub: 0.5, // Smooth scrolling animation
      start: "top 100%", // Start when .casestudy_instagram reaches 60% of the viewport
      end: `+=${scrollDistance5}`, // Animation ends after scrollDistance5
      pin: false, // No pinning
      //markers: true, // Debugging markers (remove in production)
      onUpdate: (self) => {
        let progress = self.progress; // Progress of scroll (0 to 1)
        if (progress >= 0.8) {
          document
            .querySelector(".casestudy_instagram")
            .classList.add("active");
        } else {
          document
            .querySelector(".casestudy_instagram")
            .classList.remove("active");
        }

        if (progress >= 0.99) {
          document.querySelector(".casestudy_instagram").classList.add("open");
        } else {
          document
            .querySelector(".casestudy_instagram")
            .classList.remove("open");
        }
      },
    },
  });

  circlezoom5.to(".casestudy_instagram", {
    y: -90, // Moves up by 150px
    ease: "none",
  });
  /* Three blog end */
}


let scrollDistance4 = 600;
const circlezoom4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banchmarketing",
    scrub: 0.5, // Smooth scrolling animation
    start: "top 100%", // Start when .on_instagram reaches 60% of the viewport
    end: `+=${scrollDistance4}`, // Animation ends after scrollDistance1
    pin: false, // No pinning
  },
});

circlezoom4.to(".banchmarketing h2", {
  x: 0, // Moves up by 150px
  ease: "none",
});

// if($('.casestudySlider').length > 0){
//   const casestudySlider = new Swiper(".casestudySlider", {
//     effect: "cards",
//     grabCursor: true,
//     centeredSlides: true,
//     keyboard: {
//       enabled: true
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }


if ($('.casestudySlider').length > 0) {
  const casestudySlider = new Swiper(".casestudySlider", {
    loop: true, // Enable continuous loop of slides

    slidesPerView: 1,  // Display only 1 slide at a time in the view
    spaceBetween: 0,  // Set space between slides (0 means no space)
    
    effect: "creative",  // Use 'creative' effect for unique slide transitions (can be 'slide', 'fade', 'cube', etc.)
    grabCursor: true,  // Enable 'grab' cursor (hand cursor) for better user interaction when dragging the slides

    loopAdditionalSlides: 2,  // Number of additional slides to loop around (to ensure the loop works seamlessly, allowing extra slides)
    loopedSlides: 3,  // Ensure that 3 slides are looped to maintain the effect of the creative transition

    watchSlidesProgress: true,  // Watch the progress of the slides for tracking animations or states (helps when working with advanced effects)

    creativeEffect: {
      limitProgress: 2,  // Limit how far the creative effect can progress in the transition (number of slides affected at once)

      prev: {
        translate: [0, 0, 0],  // No movement for the previous slide (stay in the same position)
        opacity: 0,  // Make the previous slide fully transparent
        scale: 1,  // Keep the previous slide at normal size
        shadow: false,  // No shadow for the previous slide
      },

      next: {
        translate: [60, 0, 0],  // Move the next slide 60 pixels to the right
        opacity: 1,  // Keep the next slide fully visible
        scale: 0.9,  // Scale the next slide down to 90% of its original size
        shadow: true,  // Add a shadow to the next slide for effect
        origin: "center",  // Set the origin for the transformation to the center of the slide
      },

      next2: {
        translate: [100, 0, 0],  // Move the second next slide 100 pixels to the right
        opacity: 1,  // Keep the second next slide fully visible
        scale: 0.8,  // Scale the second next slide down to 80% of its original size
        shadow: true,  // Add a shadow to the second next slide
        origin: "center",  // Set the origin for the transformation to the center of the slide
      },

      current: {
        translate: [0, 0, 0],  // Keep the current slide in its original position (no translation)
        opacity: 1,  // Make the current slide fully visible
        scale: 1,  // Keep the current slide at full size
        shadow: true,  // Add a shadow effect to the current slide
        origin: "center",  // Set the origin for the transformation to the center of the current slide
      },

      slideShadows: false,  // Disable shadows on the slides to make transitions smoother and less visually busy
    },

    // Pagination for bullets (dots at the bottom)
    pagination: {
      el: ".swiper-pagination",  // Element that holds the pagination controls (dots)
      clickable: true,  // Allow users to click on the pagination dots to navigate to the corresponding slide
    },

    // Adjust the looped slides properly after the last slide
    on: {
      beforeInit: function() {
        // Event triggered before initialization of the swiper
        const wrapper = this.el.querySelector('.swiper-wrapper');  // Select the wrapper of the swiper
        const slides = wrapper.querySelectorAll('.swiper-slide');  // Get all slides within the swiper wrapper

        // Proceed only if there are exactly 3 slides
        if (slides.length === 3) {
          // Clone each slide and append the clone to the swiper wrapper
          slides.forEach(slide => {
            const clone = slide.cloneNode(true);  // Clone the slide
            clone.classList.add('swiper-slide-clone');  // Add a class to identify the clone
            wrapper.appendChild(clone);  // Append the cloned slide to the swiper wrapper
          });
        }
      },

      slideChange: function() {
        // Event triggered when the slide changes
        const swiperInstance = this;
        
        // Add a small delay to allow smooth transition (this may help in some cases with creative effects)
        setTimeout(() => {
          swiperInstance.updateSlides();  // Update the swiper slides to ensure the correct order
          swiperInstance.updateProgress();  // Update the progress of the slides for smooth navigation
        }, 0);
      }
    }
  });
}



(function ($) {
  'use strict';
  $(document).ready(function () {
      var $select = $('.wpcf7-select');
      $select.each(function(e){
        var first_option = $(this).find('option').first();
        if(first_option.attr('value') == ''){
          first_option.attr('disabled', true);
        }
    })
 });
})(jQuery)

document.addEventListener('DOMContentLoaded', function () {
  // Target all <select> elements in the Contact Form 7 form
  const selectFields = document.querySelectorAll('.wpcf7-form select');

  // Loop through each select field and add the required attribute
  selectFields.forEach(function (select) {
      select.setAttribute('required', 'required');
  });
});


var swiper = new Swiper(".client_resultSwiper", {
  loop: true,  // Enable looping for continuous sliding
  slidesPerView: 1,  // Show 1 slide at a time (active slide in the center)
  spaceBetween: 0,  // No space between slides
  effect: "creative",  // Use creative effect for animations
  grabCursor: true,  // Enable grab cursor for drag functionality
  loopAdditionalSlides: 2,  // Ensure we have additional slides for loop to show next slides
  creativeEffect: {
    // Limit transformations to only the next 2 slides
    limitProgress: 2,

    // Previous slide transformations (set to no transformation, not visible)
    prev: {
      translate: [0, 0, 0],  // No translation for the previous slides
      opacity: 0,  // Make the previous slide fully transparent
      scale: 1,  // Keep the scale at 100%
      shadow: false,  // No shadow for previous slides
    },

    // Next slide transformations (next one slide after the current)
    next: {
      translate: [250, 0, 0],  // Move the next slide to the right
      opacity: 1,  // Make the next slide fully visible
      scale: 0.9,  // Scale down next slide to 80%
      shadow: false,  // Add shadow effect to next slide
      origin: "center",  // Set the origin for transformations
    },

    // Next2 slide transformations (second next slide after the current)
    next2: {
      translate: [100, 0, 0],  // Move the second next slide further to the right
      opacity: 1,  // Fully visible
      scale: 0.7,  // Further scale down second next slide
      shadow: false,  // Add shadow effect to second next slide
      origin: "top center",  // Set the origin for transformations
    },

    // Current slide transformations (centered)
    current: {
      translate: [0, 0, 0],  // No translation for the current slide
      opacity: 1,  // Full opacity for the current slide
      scale: 1,  // Full scale for the current slide
      shadow: false,  // Add shadow effect to the current slide
      origin: "center",  // Set the origin for the current slide's transformation
    },

    // Disable slide shadows for smoother transitions
    slideShadows: false,
  },

  // Pagination for bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,  // Enable clicking on dots to navigate
  },

  // Adjust the looped slides properly after the last slide
  on: {
    slideChange: function () {
      const swiperInstance = this;  // Use `this` to refer to the swiper instance
      const totalSlides = swiperInstance.slides.length;

      swiperInstance.slides.forEach(function (slide) {
        slide.classList.remove('next-slide', 'next2-slide');
      });

      // Calculate next slide index (wrap around using modulo for looped slides)
      let nextSlideIndex = (swiperInstance.activeIndex + 2) % totalSlides;
      let next2SlideIndex = (swiperInstance.activeIndex + 3) % totalSlides;

      // Add the 'next' and 'next2' classes for the appropriate slides
      let nextSlide = swiperInstance.slides[nextSlideIndex];
      let next2Slide = swiperInstance.slides[next2SlideIndex];

      if (nextSlide) nextSlide.classList.add('next-slide');
      if (next2Slide) next2Slide.classList.add('next2-slide');

      
    }
  }
});
