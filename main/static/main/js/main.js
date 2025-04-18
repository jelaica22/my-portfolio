document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".myHobbiesSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
// main.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const targetId = link.getAttribute("href").substring(1); // Get the section ID from href
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = "block"; // Show the clicked section
                } else {
                    section.style.display = "none"; // Hide other sections
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('header nav ul').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            sections.forEach(section => section.style.display = "none");
            target.style.display = "block";

            // Smooth scroll to the section
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.clickable-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  images.forEach(image => {
    image.addEventListener('click', function () {
      lightbox.classList.add('active');
      lightboxImage.src = this.src; // Set the clicked image to the lightbox
    });
  });

  // Close the lightbox when clicking outside the image or on the close button
  lightboxClose.addEventListener('click', function () {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggleBtn.innerHTML = navLinks.classList.contains("show") ? "&#10005;" : "&#9776;";
});

document.querySelectorAll('.about-card img').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.querySelector('.lightbox-modal');
    const modalImage = modal.querySelector('img');
    modal.style.display = 'flex';
    modalImage.src = img.src;
  });
});

document.querySelector('.lightbox-modal .close-btn').addEventListener('click', function() {
  document.querySelector('.lightbox-modal').style.display = 'none';
});
