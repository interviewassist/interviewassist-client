export function Mounted() {
  // fetch topic list

  var close_techlist = document.querySelector(".right>.close_techlist");

  /** menu open&close button  */
  close_techlist.addEventListener("click", function (element) {
    var article = document.getElementsByClassName("center");
    var nav = document.querySelector("nav.right");
    var section = document.querySelector("nav.right>section");
    var control = document.getElementsByClassName("center__controlwrap")[0];

    // nav.classList.toggle("right--closed");
    // article.classList.toggle("center--closed");
    /**In callback function ( this. === close_techlist. )*/
    nav.style.width = "0px";
    section.style.width = "0px";
    section.style.transitionDelay = "0s";
    section.style.opacity = "0";

    article[0].style.display = "block";
    nav.isOpened = !nav.isOpened;
    control.classList.toggle("center__controlwrap--pushed");
  });

  /** list item's event  */
  var tech = document.querySelector("ul.tech");

  tech.addEventListener("click", evt => {
    /* evt.currentTarget === tech */
    var clicked = evt.target.tagName;
    if (clicked === "LI") {
      this.$emit("tech-event", evt.target.lastElementChild.value);
    } else if (clicked === "IMG" || clicked === "H3" || clicked === "P") {
      this.$emit(
        "tech-event",
        evt.target.parentElement.lastElementChild.value
      );
    }
  });
}
