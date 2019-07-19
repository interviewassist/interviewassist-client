export function Mounted() {

  var article = document.getElementsByClassName("center")[0];

  var techlist = document.getElementsByClassName("right")[0];
  var tech_section = document.querySelector("nav.right>section");

  var control = document.getElementsByClassName("center__controlwrap")[0];


  var move_techlist = document.getElementsByClassName("header__movetechlist")[0];
  /** menu open&close button  */
  move_techlist.addEventListener("click", function (element) {
    // article.classList.toggle("center--closed");
    // techlist.classList.toggle("right--closed");
    let closing_btn = techlist.firstElementChild;
    let ul = tech_section.firstElementChild;
    /**In callback function ( this. === move_techlist. )*/
    if (techlist.isOpened === undefined) {
      context.isOpened = false;
    }
    if (techlist.isOpened) {
      techlist.style.width = "0px";
      tech_section.style.width = "0px";
      tech_section.style.transitionDelay = "0s";
      tech_section.style.opacity = "0";
      article.style.display = "block";

      closing_btn.style.display = "none";
      ul.style.display = "none";
      control.classList.toggle("center__controlwrap--pushed");
    } else {
      if (window.outerWidth <= 414) {
        if (article.style.display === "none") {
          context.style.width = "0px";
          context__wrap.style.width = "0px";
          context__wrap.style.transitionDelay = "0s";
          context__wrap.style.opacity = "0";
          context.isOpened = !context.isOpened;
        } else {
          article.style.display = "none";
        }
        techlist.style.width = "100vw";
        tech_section.style.width = "100vw";
      } else {
        techlist.style.width = "20rem";
        tech_section.style.width = "20rem";
      }
      tech_section.style.transitionDelay = "0.23s";
      tech_section.style.opacity = "1";

      closing_btn.style.display = "unset";
      ul.style.display = "unset";
      control.classList.toggle("center__controlwrap--pushed");
    }
    techlist.isOpened = !techlist.isOpened;
  });

  var move_context = document.getElementsByClassName("header__movecontext")[0];
  var context = document.getElementsByClassName("left")[0];
  var context__wrap = document.getElementsByClassName("context__wrap")[0];

  move_context.addEventListener("click", function (element) {
    /**In callback function ( this. === move_context. )*/
    if (context.isOpened === undefined) {
      context.isOpened = false;
    }
    if (context.isOpened) {
      context__wrap.style.transitionDelay = "0s";
      article.style.display = "block";
    } else {
      if (window.outerWidth <= 414) {
        if (article.style.display === "none") {
          techlist.style.width = "0px";
          tech_section.style.width = "0px";
          tech_section.style.transitionDelay = "0s";
          tech_section.style.opacity = "0";
          techlist.isOpened = !techlist.isOpened;
        } else {
          article.style.display = "none";
        }
      } else {}
      context__wrap.style.transitionDelay = "0.4s";
    }

    context.classList.toggle("left--opened");
    context__wrap.classList.toggle("context__wrap--opened");
    context.isOpened = !context.isOpened;
  });
}
