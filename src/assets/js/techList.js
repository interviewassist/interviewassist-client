export function Mounted() {
  // fetch topic list

  var techlist__closer = document.querySelector(".techlist>.techlist__closer");

  /** menu open&close button  */
  techlist__closer.addEventListener("click", function (element) {
    var article = document.getElementsByClassName("center");
    var nav = document.getElementsByClassName("techlist");
    var techlist__innerwrap = document.getElementsByClassName("techlist__innerwrap");
    var control = document.getElementsByClassName("center__controlwrap")[0];

    // nav.classList.toggle("techlist--closed");
    // article.classList.toggle("center--closed");
    /**In callback function ( this. === techlist__closer. )*/
    nav.style.width = "0px";
    techlist__innerwrap.style.width = "0px";
    techlist__innerwrap.style.transitionDelay = "0s";
    techlist__innerwrap.style.opacity = "0";

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
