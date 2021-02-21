const fasWrapper = document.querySelector(".fas_wrapper");
const sideWrapper = document.querySelector(".side_wrapper");
const sideMenu = document.querySelector(".side_menu");

fasWrapper.addEventListener("click", () => {
  console.log("클릭");
  const sideWrapperDisplay = sideWrapper.style.display;
  const sideMenuDisplay = sideMenu.style.display;
  if (sideWrapperDisplay === "" || sideWrapperDisplay === "none") {
    sideWrapper.style.display = "block";
    sideMenu.style.display = "block";
    sideMenu.classList.add("side_animation");
  }
});

sideWrapper.addEventListener("click", () => {
  const sideWrapperDisplay = sideWrapper.style.display;
  const sideMenuDisplay = sideMenu.style.display;
  if (sideWrapperDisplay === "block") {
    sideWrapper.style.display = "none";
    sideMenu.style.display = "none";
  }
});
