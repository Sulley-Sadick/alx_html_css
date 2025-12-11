window.addEventListener("DOMContentLoaded", function () {
  // selecting elements
  const menuIcon = this.document.querySelector(".menu");
  const navLinks = this.document.querySelector(".nav--links");
  const closeButton = this.document.querySelector(".close--btn");

  // hide closeButton
  closeButton.classList.add("hidden");

  const showNavLinks = function () {
    // 1) add hidden class on menuIcon
    menuIcon.classList.add("hidden");

    // 2) remove hidden class from navLinks
    navLinks.classList.remove("hidden");

    // 3) remove hidden class from closeButton
    closeButton.classList.remove("hidden");
  };

  const hideNavLinks = function () {
    // 1) add hidden class on menuIcon
    menuIcon.classList.remove("hidden");

    // 2) remove hidden class from navLinks
    if (window.innerWidth <= 480) navLinks.classList.add("hidden");

    // 3) remove hidden class from closeButton
    closeButton.classList.add("hidden");
  };

  // show navLinks
  menuIcon.addEventListener("click", showNavLinks);

  // hide navLinks
  closeButton.addEventListener("click", hideNavLinks);
});
