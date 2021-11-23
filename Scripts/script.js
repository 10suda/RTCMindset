const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const mobileDropItem = document.querySelectorAll(".mobile-nav li");
const learnMoreButton = document.querySelectorAll(".learn-more");
const bioPara = document.querySelectorAll(".person-bio");
const targetElement = [0, 0, 0, 0, 0];
const mainElement = [0, 0, 0, 0, 0];
const navColorList = ["#2850FF", "#FF9600", "#E60A8C", "#2850FF", "#FF9600"];
for (let i = 0; i != mobileDropItem.length; i++) {
  targetElement[i] = mobileDropItem[i].querySelector(".mobile-nav-hide");
  mainElement[i] = mobileDropItem[i].querySelector("div.menuItem");
  if (targetElement[i] != null) {
    if (targetElement[i] != "none") {
      targetElement[i].style.display = "none";
    }
  }
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    for (let i = 0; i != targetElement.length; i++) {
      if (targetElement[i] != null) {
        targetElement[i].style.display = "none";
        mainElement[i].style.color = `${navColorList[i]}`;
      }
    }
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

function toggleMobileDropDown() {
  if (targetElement[this.dataset.indexNumber].style.display == "none") {
    targetElement[this.dataset.indexNumber].style.display = "flex";
    mainElement[this.dataset.indexNumber].style.color = "black";
  } else {
    targetElement[this.dataset.indexNumber].style.display = "none";
    mainElement[this.dataset.indexNumber].style.color = `${
      navColorList[this.dataset.indexNumber]
    }`;
  }
}
mobileDropItem.forEach((item) => {
  item.addEventListener("click", toggleMobileDropDown);
});

function toggleLearnMore() {
  if (
    bioPara[this.dataset.indexNumber].style.display == "" ||
    bioPara[this.dataset.indexNumber].style.display == "none"
  ) {
    bioPara[this.dataset.indexNumber].style.display = "block";
    learnMoreButton[this.dataset.indexNumber].innerHTML = "- Collapse";
  } else {
    bioPara[this.dataset.indexNumber].style.display = "none";
    learnMoreButton[this.dataset.indexNumber].innerHTML = "+ Learn More";
  }
}

learnMoreButton.forEach((item) => {
  item.addEventListener("click", toggleLearnMore);
});
