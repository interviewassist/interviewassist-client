export function Mounted() {
  var center = document.getElementsByClassName("center")[0];

  center.addEventListener("click", evt => {
    var clicked = evt.target;
    var list = clicked.classList;

    /** moveTop 버튼 */
    if (list.contains("center__control__movetop")) {
      clicked.parentElement.parentElement.scrollTo(0, 0);
      console.log("Clicked 'moveTop'........................");
    } else if (list.contains("card__toggle")) {
      /** moveTop 버튼 */
      /**카드 열림 버튼*/
      var detail = clicked.nextElementSibling;
      detail.classList.toggle("card__ShowDetail");
      var icon = clicked.firstElementChild;
      icon.classList.toggle("icon__rotate");
      closeGivenAnswer(detail);
    } else if (list.contains("material-icons")) {
      var detail = clicked.parentElement.nextElementSibling;
      detail.classList.toggle("card__ShowDetail");
      clicked.classList.toggle("icon__rotate");
      closeGivenAnswer(detail);
    } else if (list.contains("card__showgivenanswer")) {
      /**카드 열림 버튼*/
      /**모범답안 확인버튼 */
      let isActived = clicked.classList.contains(
        "card__showgivenanswer--active"
      );
      if (isActived) {
        let givenanswer = clicked.nextElementSibling;
        givenanswer.classList.toggle("card__ShowGivenAnswer");
      }
    }

    /**모범답안 확인버튼 */
  });

  /** 사용자 답안 이력시 => 버튼 활성화 */
  center.addEventListener("keyup", evt => {
    if (evt.target.tagName === "TEXTAREA") {
      let showGivenAnswer_btn = evt.target.nextElementSibling;
      let inputValue = evt.target.value;
      let isActived = showGivenAnswer_btn.classList.contains(
        "card__showgivenanswer--active"
      );
      if (isActived && inputValue === "") {
        showGivenAnswer_btn.classList.toggle("card__showgivenanswer--active");
      } else if (!isActived && inputValue != "") {
        showGivenAnswer_btn.classList.toggle("card__showgivenanswer--active");
      }
    }
  });
  /** 사용자 답안 Check => 버튼 활성화 */
  /** Detail 닫을때 열려있는 givenAnswer도 같이 닫아주기*/
  function closeGivenAnswer(detail) {
    let givenanswer = detail.lastElementChild;
    if (givenanswer.classList.contains("card__ShowGivenAnswer")) {
      givenanswer.classList.toggle("card__ShowGivenAnswer");
    }
  }
  /** Detail 닫을때 열려있는 givenAnswer도 같이 닫아주기*/
}
