export function Mounted() {
  // section.card__outerwrap {
  //     column-count: 1;
  //   }
  const cards = document.getElementsByClassName("card__outerwrap")[0];
  const listToggle = document.getElementsByClassName("listToggle")[0];
  const singleButton = document.getElementsByClassName("listToggle__single")[0];
  const doubleButton = document.getElementsByClassName("listToggle__double")[0];
  const nowSelected = document.getElementsByClassName("listToggle__now")[0];

  listToggle.addEventListener("click", moveBackground);

  function moveBackground() {
    nowSelected.classList.toggle("listToggle__now--move");
    singleButton.classList.toggle("listToggle__single--selected");
    doubleButton.classList.toggle("listToggle__double--selected");
    cards.classList.toggle("card__outerwrap--single");
    cards.classList.toggle("card__outerwrap--double");
  }


}
