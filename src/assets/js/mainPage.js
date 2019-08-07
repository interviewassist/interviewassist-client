export function Mounted() {
  /*========================================================

    DOM Elements

    ========================================================*/

  var center = document.getElementsByClassName("center")[0];

  /*========================================================

    Add Event Listners

    ========================================================*/

  center.addEventListener("click", clickMoveTop);
  center.addEventListener("click", clickCardOpen);
  center.addEventListener("click", clickGivenAnswer);

  /** 사용자 답안 이력시 => 버튼 활성화 */
  center.addEventListener("keyup", activeGivenAnswer);

  /*========================================================

    Functions

    ========================================================*/

  function clickMoveTop(event) {
    var clicked = event.target;
    var list = clicked.classList;

    /** moveTop 버튼 */
    if (list.contains("center__control__movetop")) {
      clicked.parentElement.parentElement.scrollTo(0, 0);
    }
  }

  function clickCardOpen(event) {
    var clicked = event.target;
    var list = clicked.classList;

    /**카드 열림 버튼*/
    if (list.contains("card__toggle")) {
      var detail = clicked.nextElementSibling;
      var icon = clicked.firstElementChild;
      icon.classList.toggle("icon__rotate");
    } else if (list.contains("card__opener")) {
      var detail = clicked.parentElement.nextElementSibling;
      clicked.classList.toggle("icon__rotate");
    }
    closeGivenAnswer(detail);
    detail.classList.toggle("card__ShowDetail");

  }


  function clickGivenAnswer(event) {
    var clicked = event.target;
    var list = clicked.classList;

    /**모범답안 확인버튼 */
    if (list.contains("card__showgivenanswer")) {
      let isActived = clicked.classList.contains(
        "card__showgivenanswer--active"
      );
      if (isActived) {
        let givenanswer = clicked.nextElementSibling;
        givenanswer.classList.toggle("card__ShowGivenAnswer");
      }
    }
  }

  /** Detail 닫을때 열려있는 givenAnswer도 같이 닫아주기*/
  function closeGivenAnswer(detail) {
    let givenanswer = detail.lastElementChild;
    if (givenanswer.classList.contains("card__ShowGivenAnswer")) {
      givenanswer.classList.toggle("card__ShowGivenAnswer");
    }
  }

  function activeGivenAnswer(event) {
    {
      if (event.target.tagName === "TEXTAREA") {
        let showGivenAnswer_btn = event.target.nextElementSibling;
        let inputValue = event.target.value;
        let isActived = showGivenAnswer_btn.classList.contains(
          "card__showgivenanswer--active"
        );
        if (isActived && inputValue === "") {
          showGivenAnswer_btn.classList.toggle("card__showgivenanswer--active");
        } else if (!isActived && inputValue != "") {
          showGivenAnswer_btn.classList.toggle("card__showgivenanswer--active");
        }
      }
    }
  }
}
