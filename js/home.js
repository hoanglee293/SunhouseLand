// scroll header
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("scroll-header");
var fixed = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// slide
// document.addEventListener("DOMContentLoaded", function () {
//   new Splide("#banner__slide", {
//     type: "loop",
//     autoplay: true,
//     perPage: 1,
//     arrows: false,
//     pagination: false,
//   }).mount();
//   new Splide("#banner2", {
//     type: "loop",
//     perPage: 3,
//     breakpoints: {
//       mobileFirst: true,
//       980: {
//         perPage: 2,
//       },
//       mobileTwo: true,
//       500: {
//         perPage: 1,
//       },
//     },
//     gap: "45px",
//     arrows: false,
//     pagination: false,
//   }).mount();
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var secondarySlider = new Splide(".secton1__small", {
//     height: 100,
//     gap: 15,
//     rewind: true,
//     perPage: 4,
//     breakpoints: {
//       745: {
//         mobileFirst: true,
//         perPage: 3,
//       },
//       mobileTwo: true,
//       440: {
//         perPage: 2,
//       },
//     },
//     pagination: false,
//     cover: true,
//     isNavigation: true,
//     focus: "center",
//   }).mount();

//   var primarySlider = new Splide(".secton1__big", {
//     type: "loop",
//     heightRatio: 0.5,
//     rewind: true,
//     cover: true,
//     pagination: false,
//   });
//   primarySlider.sync(secondarySlider).mount();

//   new Splide(".detail__slider", {
//     type: "loop",
//     perPage: 3,
//     breakpoints: {
//       mobileFirst: true,
//       980: {
//         perPage: 2,
//       },
//       mobileTwo: true,
//       770: {
//         perPage: 1,
//       },
//     },
//     gap: "45px",
//     arrows: false,
//     pagination: false,
//   }).mount();
// });

// toggle header__search
function headerSearch() {
  var x = document.getElementById("form-box");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function searchMobile() {
  var x = document.getElementById("form-mobile");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

//   tabmenu banner
function tabMenu(evt, nameList) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(nameList).style.display = "flex";
  evt.currentTarget.className += " active";
}

// toggle menu-nav
var coll = document.getElementsByClassName("nav-click");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// menu-mobile

function openNav() {
  document.getElementById("menu-mobile").style.width = "300px";
  document.getElementById("overlay").style.display = "block";
}
function closeNav() {
  document.getElementById("menu-mobile").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

//owl carousel

$("#banner2").owlCarousel({
  loop: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
