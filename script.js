function toggleMenu() {
  const leftContent = document.querySelector(".nav_leftcontent");
  const rightContent = document.querySelector(".nav_rightcontent");
  leftContent.classList.toggle("active");
  rightContent.classList.toggle("active");
}
