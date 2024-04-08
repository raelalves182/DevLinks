function toggleMode(){
  const html = document.documentElement;

  html.classList.toggle("light")
  // pegar a tag img
  const image = document.querySelector(".profile img")

  if(html.classList.contains("light")){
    // Quando for light mode
    image.setAttribute("src", "./assets/my-image.jpg")
  } else {
    // Quando não for light mode
    image.setAttribute("src", "https://github.com/raelalves182.png")
  }
}