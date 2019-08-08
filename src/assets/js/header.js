export function Mounted() {
  /*========================================================

    DOM Elements

    ========================================================*/
  const techlist = document.getElementsByClassName("techlist")[0];
  const techlist__innerwrap = document.getElementsByClassName("techlist__innerwrap")[0];
  const techlist__closer = techlist.firstElementChild;
  const techlist__tech = techlist__innerwrap.firstElementChild;

  const context = document.getElementsByClassName("context")[0];
  const context__innerwrap = document.getElementsByClassName("context__innerwrap")[0];

  const center = document.getElementsByClassName("center")[0];
  const control = document.getElementsByClassName("control__wrap")[0];

  const mover_techlist = document.getElementsByClassName("header__movetechlist")[0];
  const mover_context = document.getElementsByClassName("header__movecontext")[0];

  /*========================================================

    Add Event Listners

    ========================================================*/

  mover_techlist.addEventListener("click", moveTechlist);
  mover_context.addEventListener("click", moveContext);

  /*========================================================

    Functions

    ========================================================*/
  function moveTechlist(element) {

    let isOtherOpened = context.classList.contains("context--opened");

    toggleTechlist();

    if (isOtherOpened) {
      toggleContext();
    } else {
      toggleCenter();
    }
  }

  function moveContext(element) {

    let isOtherOpened = techlist.classList.contains("techlist--opened");

    toggleContext();

    if (isOtherOpened) {
      toggleTechlist();
    } else {
      toggleCenter();
    }

  };

  function toggleTechlist() {
    techlist.classList.toggle("techlist--opened");
    techlist__innerwrap.classList.toggle("techlist__innerwrap--opened");
    techlist__closer.classList.toggle("techlist--removed");
    techlist__tech.classList.toggle("techlist--removed");
  }

  function toggleContext() {
    context.classList.toggle("context--opened");
    context__innerwrap.classList.toggle("context__innerwrap--opened");
  }

  function toggleCenter() {
    center.classList.toggle("center--closed");
    control.classList.toggle("control__wrap--pushed");
  }
}
