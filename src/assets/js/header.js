export function Mounted() {

  var center = document.getElementsByClassName("center")[0];

  var techlist = document.getElementsByClassName("techlist")[0];
  var techlist__innerwrap = document.getElementsByClassName("techlist__innerwrap")[0];
  let techlist__closer =  techlist.firstElementChild;
  let techlist__tech = techlist__innerwrap.firstElementChild;

  var control = document.getElementsByClassName("center__controlwrap")[0];


  var move_techlist = document.getElementsByClassName("header__movetechlist")[0];
  /** menu open&close button  */
  move_techlist.addEventListener("click", function (element) {
    /**In callback function ( this. === move_techlist. )*/

    let isTechlistOpened = techlist.classList.contains("techlist--opened");
    let isOtherOpened = center.classList.contains("center--closed");
    if (isTechlistOpened) {
      if(isOtherOpened){
        center.classList.toggle("center--closed");
      }
    } else {
      if (isOtherOpened) {
        if (window.outerWidth <= 414) {
          context.classList.toggle("context--opened");
          context__innerwrap.classList.toggle("context__innerwrap--opened");
        }
      }else{
        center.classList.toggle("center--closed");
      }
    }
    control.classList.toggle("center__controlwrap--pushed");
    techlist.classList.toggle("techlist--opened");
    techlist__innerwrap.classList.toggle("techlist__innerwrap--opened");
    techlist__closer.classList.toggle("techlist--removed");
    techlist__tech.classList.toggle("techlist--removed");
  });

  var move_context = document.getElementsByClassName("header__movecontext")[0];
  var context = document.getElementsByClassName("context")[0];
  var context__innerwrap = document.getElementsByClassName("context__innerwrap")[0];

  move_context.addEventListener("click", function (element) {
    /**In callback function ( this. === move_context. )*/

    let isContextOpened = context.classList.contains("context--opened");
    let isOtherOpened = center.classList.contains("center--closed");

    if (isContextOpened) {
      if(isOtherOpened){
        center.classList.toggle("center--closed");
      }
    } else {
      if (isOtherOpened) {
        if (window.outerWidth <= 414) {
          techlist.classList.toggle("techlist--opened");
          techlist__innerwrap.classList.toggle("techlist__innerwrap--opened");
          techlist__closer.classList.toggle("techlist--removed");
          techlist__tech.classList.toggle("techlist--removed");
          control.classList.toggle("center__controlwrap--pushed");
        }
      } else {
          center.classList.toggle("center--closed");
      }
    }

    context.classList.toggle("context--opened");
    context__innerwrap.classList.toggle("context__innerwrap--opened");
  });
}
