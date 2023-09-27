const share = document.querySelector(".container__share__active");
const buttom = document.querySelector(".container__share--icon");

buttom.addEventListener("click", () => {
  if (share.classList.contains("active")) {
    share.setAttribute("style", "display: flex");
    share.classList.remove("active");
  } else {
    share.classList.add("active");
    share.setAttribute("style", "display: none");
  }
});
