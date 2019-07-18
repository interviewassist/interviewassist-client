export function Mounted() {
  var close_context = document.querySelector("nav>.close_context");

  var article = document.getElementsByClassName("center")[0];
  var nav = document.querySelector("nav");
  var section = document.querySelector("nav>section");

  close_context.addEventListener("click", function (element) {
    /**In callback function ( this. === close_context. )*/
    nav.style.width = "0px";
    section.style.width = "0px";
    section.style.transitionDelay = "0s";
    section.style.opacity = "0";

    article.style.display = "block";
    nav.isOpened = !nav.isOpened;
  });

  var user_login = document.getElementsByClassName("user_login")[0];
  var user_signup = document.getElementsByClassName("user_signup")[0];

  var modal = document.getElementsByClassName("modal");
  var modal_login = modal[0];
  var modal_signup = modal[1];

  user_login.addEventListener("click", () => {
    modal_login.classList.toggle("show_modal");
    if (modal_signup.classList[1] === "show_modal") {
      modal_signup.classList.toggle("show_modal");
    }
  });

  user_signup.addEventListener("click", () => {
    modal_signup.classList.toggle("show_modal");
    if (modal_login.classList[1] === "show_modal") {
      modal_login.classList.toggle("show_modal");
    }
  });
}
