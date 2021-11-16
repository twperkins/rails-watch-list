const changeBanner = () => {
  const mainBanner = document.querySelector(".header");
  const categories = document.querySelectorAll(".category-card")

  categories.forEach((category) => {
    category.addEventListener("mouseover", () => {
      mainBanner.style.backgroundImage = category.style.backgroundImage
    });
  });
  categories.forEach((category) => {
    category.addEventListener("mouseout", () => {
      mainBanner.style = "background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://source.unsplash.com/dTLlhgeEJWg/2560x1600')"
    });
  });
}

export { changeBanner };
