const qS = (query) => document.querySelector(query);
const qSA = (query) => document.querySelectorAll(query);

// displaying and hiding menu and overlay elements
const openMenu = qS("#open-menu");
const closeMenu = qS("#close-menu");
const menu = qS("#nav-list");
const gradientOverlay = qS("#gradient-overlay");
const fullOverlay = qS("#full-overlay");

openMenu.addEventListener("click", () => {
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  menu.style.display = "block";
  gradientOverlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  menu.style.display = "none";
  gradientOverlay.style.display = "none";
});

// displaying and hiding the Modal
const backProject = qS("#back-project");
const closeModal = qS("#close-modal");
const modal = qS("#modal-section");
const main = qS("main");

backProject.addEventListener("click", () => {
  modal.style.display = "block";
  main.style.display = "none";
  fullOverlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  main.style.display = "block";
  fullOverlay.style.display = "none";
});

// Working on pledge selection
const pledges = Array.from(qSA("#modal-section .pledge"));
const pledgeDetails = Array.from(qSA(".pledge-input-details"));
const rewardButton = Array.from(qSA(".reward-button"));

function indicateSelection(index) {
  pledges.forEach(el => {
    el.style.border = "0.3px solid hsl(0, 0%, 48%)";
  });
  pledgeDetails.forEach(el => {
    el.style.display = "none";
  });
  pledges[index].style.border = "2px solid hsl(176, 50%, 47%)";
  pledgeDetails[index].style.display = "block";
}
for (let i = 0; i < 3; i++) {
  pledges[i].addEventListener("click", () => indicateSelection(i));
}

for (let i = 0; i < 2; i++) {
  rewardButton[i].addEventListener("click", () => {
    modal.style.display = "block";
    indicateSelection(i + 1);
  });
}

// displaying and hiding confirmation box
const submitButton = Array.from(qSA(".submit-button"));
const confirmationBox = qS("#confirmation-box");
const gotItButton = qS("#got-it-button")


submitButton.forEach(el => {
  el.addEventListener("click", () => {
    confirmationBox.style.display = "block";
    main.style.display = "none";
    modal.style.display = "none";
    fullOverlay.style.display = "block";
  });
});


gotItButton.addEventListener("click", () => {
    confirmationBox.style.display = "none";
    main.style.display = "block";
    fullOverlay.style.display = "none";
});
