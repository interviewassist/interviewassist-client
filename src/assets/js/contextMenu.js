export function Mounted() {
  var context__closer = document.getElementsByClassName("context__closer")[0];

  var article = document.getElementsByClassName("center")[0];
  var context = document.getElementsByClassName("context")[0];
  var context__innerwrap = document.getElementsByClassName("context__innerwrap")[0];

  context__closer.addEventListener("click", function (element) {
    /**In callback function ( this. === context__closer. )*/
    context.classList.toggle("context--opened");
    context__innerwrap.classList.toggle("context__innerwrap--opened");

    article.style.display = "block";
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
