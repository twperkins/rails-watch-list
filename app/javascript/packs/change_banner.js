const changeBanner = () => {
  const mainBanner = document.querySelector(".header");
  const categories = document.querySelectorAll(".category-card")
  const photos = {}

  categories.forEach((category) => {
    photos[category.querySelector("a").innerText] = `https://source.unsplash.com/1600x900/?${category.querySelector("a").innerText}`
  })

  console.log(photos)

  categories.forEach((category) => {
    category.addEventListener("mouseover", () => {
      console.log(photos[category.querySelector("a").innerText])
      mainBanner.style = `background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("${photos[category.querySelector("a").innerText]}")`
    });
  });
  categories.forEach((category) => {
    category.addEventListener("mouseout", () => {
      mainBanner.style = "background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://source.unsplash.com/dTLlhgeEJWg/2560x1600')"
    });
  });
}

export { changeBanner };
