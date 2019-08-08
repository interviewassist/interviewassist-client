export function Mounted() {
  /*========================================================

    DOM Elements

    ========================================================*/

  const context__closer = document.getElementsByClassName("context__closer")[0];
  const context = document.getElementsByClassName("context")[0];
  const context__innerwrap = document.getElementsByClassName("context__innerwrap")[0];

  const center = document.getElementsByClassName("center")[0];
  const control = document.getElementsByClassName("control__wrap")[0];

  const user_login = document.getElementsByClassName("user_login")[0];
  const user_signup = document.getElementsByClassName("user_signup")[0];

  const modal = document.getElementsByClassName("modal");
  const modal_login = modal[0];
  const modal_signup = modal[1];

  /*========================================================

    Add Event Listners

    ========================================================*/

  context__closer.addEventListener("click", clickCloser);
  user_login.addEventListener("click", clickLogin);
  user_signup.addEventListener("click", clickSignup);

  /*========================================================

    Functions

    ========================================================*/

  function clickCloser(element) {
    context.classList.toggle("context--opened");
    context__innerwrap.classList.toggle("context__innerwrap--opened");

    center.classList.toggle("center--closed");
    control.classList.toggle("control__wrap--pushed");
  }

  function clickLogin() {
    modal_login.classList.toggle("show_modal");
    if (modal_signup.classList[1] === "show_modal") {
      modal_signup.classList.toggle("show_modal");
    }
  }

  function clickSignup() {
    modal_signup.classList.toggle("show_modal");
    if (modal_login.classList[1] === "show_modal") {
      modal_login.classList.toggle("show_modal");
    }
  }
}
