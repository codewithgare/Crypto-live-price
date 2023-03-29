const navButtons = document.querySelectorAll("nav ul li a");

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    navButtons.forEach((button) => {
      button.classList.remove("active");
      navButton.classList.add("active");
      if (screenWidth >= 920) {
        navList.style.display = "flex";
      }
    });
  });
});

const menuBtn = document.getElementById("menu_btn");
const navList = document.getElementById("nav_list");
const closeMenu = document.getElementById("close_btn");
const screenWidth = screen.width;

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  navList.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menuBtn.style.display = "block";
  navList.style.display = "none";
});
