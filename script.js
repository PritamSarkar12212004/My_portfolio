const ham = document.querySelector(".ham");
const mobileNav = document.querySelector(".mobileNav");
const blurEle=document.querySelector(".blurEle");

flag = true;
ham.addEventListener("click", () => {
  if (flag == true) {
    mobileNav.style.display = "flex";
    ham.classList.remove("ri-menu-3-fill");
    ham.classList.add("ri-close-line");
    blurEle.classList.add("blur-sm")
    flag = false;
  } else {
    mobileNav.style.display = "none";
    ham.classList.add("ri-menu-3-fill");
    ham.classList.remove("ri-close-line");
    blurEle.classList.remove("blur-sm")
    flag = true;
  }
});
