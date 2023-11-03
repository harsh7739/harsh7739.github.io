$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".nav-link").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".nav-link i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full-Stack-Web-Developer", "Dreamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["MERN-Stack-Devloper", "Dreamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// document.getElementById("resume-link-1 ").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default behavior of the link (navigating to the PDF)

//   // Open the PDF in a new tab
//   window.open("/images/Rishi_Ranjan_resume.pdf", "_blank");

//   // Trigger the download
//   var a = document.createElement("a");
//   a.href = "/images/Rishi_Ranjan_resume.pdf";
//   a.download = "resume.pdf";
//   a.style.display = "none";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });

// document.getElementById("resume-link-2").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default behavior of the link (navigating to the PDF)
//   // Open the PDF in a new tab
//   window.open("/images/Rishi_Ranjan_resume.pdf", "_blank");

//   // Trigger the download
//   var a = document.createElement("a");
//   a.href = "/images/Rishi_Ranjan_resume.pdf";
//   a.download = "resume.pdf";
//   a.style.display = "none";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });



// function openResumeInNewTab(section) {
//   var resumeLink = document.getElementById("resume-link-" + section);
//   if (resumeLink) {
//       window.open(resumeLink.href, "_blank");
//   }
// }

// // Add click event listeners to the buttons
// document.getElementById("resume-button-1").addEventListener("click", function () {
//   openResumeInNewTab(1);
// });


function resume() {
  window.open("/images/Rishi_Ranjan_resume.pdf", "_blank");
}
// function resume1() {
//   window.open("/images/Rishi_Ranjan_resume.pdf", "_blank");
// }

