export function Mounted() {
  // fetch topic list
  var techlist__closer = document.querySelector(".techlist>.techlist__closer");

  /** menu open&close button  */
  techlist__closer.addEventListener("click", function (element) {
    var techlist = document.getElementsByClassName("techlist")[0];
    var techlist__innerwrap = document.getElementsByClassName("techlist__innerwrap")[0];
    let techlist__tech = techlist__innerwrap.firstElementChild;

    var control = document.getElementsByClassName("control__wrap")[0];

    /**In callback function ( this. === techlist__closer. )*/
    control.classList.toggle("control__wrap--pushed");
    techlist.classList.toggle("techlist--opened");
    techlist__innerwrap.classList.toggle("techlist__innerwrap--opened");
    techlist__closer.classList.toggle("techlist--removed");
    techlist__tech.classList.toggle("techlist--removed");
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
