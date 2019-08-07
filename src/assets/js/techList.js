export function Mounted() {
  /*========================================================

    DOM Elements

    ========================================================*/
  const techlist = document.getElementsByClassName("techlist")[0];
  const techlist__innerwrap = document.getElementsByClassName("techlist__innerwrap")[0];
  const techlist__closer = document.getElementsByClassName("techlist__closer")[0];
  const tech = document.getElementsByClassName("tech")[0];

  const center = document.getElementsByClassName("center")[0];
  const control = document.getElementsByClassName("control__wrap")[0];

  /*========================================================

    Add Event Listners

    ========================================================*/

  techlist__closer.addEventListener("click", closeTechlist);
  tech.addEventListener("click", clickTechItem);

  /*========================================================

    Functions

    ========================================================*/
  function closeTechlist(element) {

    techlist.classList.toggle("techlist--opened");
    techlist__innerwrap.classList.toggle("techlist__innerwrap--opened");
    techlist__closer.classList.toggle("techlist--removed");
    tech.classList.toggle("techlist--removed");

    center.classList.toggle("center--closed");
    control.classList.toggle("control__wrap--pushed");
  }

  function clickTechItem() {
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
  }
}
