import { Forms } from "./Forms";
import { TaskListDOM } from "./TasksList";

const NavBar = (function () {
  const navToggler = document.getElementById("nav-toggle");
  const navTogglerLabel = document.getElementById("nav-toggle-label");
  const navBar = document.getElementById("side-nav-bar");
  const helpBtn = document.getElementById("help");

  let prevWidth = window.innerWidth;

  navToggler.addEventListener("change", changeNavVisibility);

  helpBtn.addEventListener("click", function () {
    Forms.displayForm("help-screen");
  });

  window.addEventListener("resize", changeNavOnResize);

  function changeNavVisibility() {
    navToggler.checked
      ? (navTogglerLabel.innerHTML = '<i class="fas fa-times icon"></i>')
      : (navTogglerLabel.innerHTML = '<i class="fas fa-bars icon"></i>');

    navBar.classList.toggle("active");
  }

  function changeNavOnResize() {
    TaskListDOM.taskListHeight();
    if (window.innerWidth > 725 && window.innerWidth < 775) {
      if (
        (window.innerWidth <= 750 && prevWidth > window.innerWidth && navToggler.checked) ||
        (window.innerWidth >= 750 && prevWidth < window.innerWidth && !navToggler.checked)
      ) {
        navToggler.checked = !navToggler.checked;
        changeNavVisibility();
      }
    }
    prevWidth = window.innerWidth;
  }

  function closeNavOnMobile() {
    if (window.innerWidth <= 750) {
      navToggler.checked = !navToggler.checked;
      changeNavVisibility();
    }
  }
  return { closeNavOnMobile };
})();

export { NavBar };
