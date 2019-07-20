<template>
  <div class="center__controlwrap">
    <button class="center__control center__control__movetop">
      <i class="material-icons">arrow_upward</i>
    </button>
    <button class="center__control center__control__addproblem">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Control",
  mounted: function() {
    var center = document.getElementsByClassName("center")[0];
    let controlWrap = document.getElementsByClassName("center__controlwrap")[0];
    let moveTop = document.getElementsByClassName(
      "center__control__movetop"
    )[0];
    /** Center 스크롤시 moveTop 버튼 활성화 여부 */
    center.addEventListener("scroll", () => {
      if (
        center.scrollTop != 0 &&
        !moveTop.classList.contains("center__control--hidden")
      ) {
        moveTop.classList.toggle("center__control--hidden");
      } else if (
        center.scrollTop == 0 &&
        moveTop.classList.contains("center__control--hidden")
      ) {
        moveTop.classList.toggle("center__control--hidden");
      }
    });
    /** Center 스크롤시 moveTop 버튼 활성화 여부 */
    /** moveTop 버튼 기능 */
    moveTop.addEventListener("click", () => {
      center.scrollTo(0, 0);
    });
    /** moveTop 버튼 기능 */
  }
};
</script>
<style scoped>
@media (min-width:415px) {
.center__controlwrap--pushed {
  right: 20rem;
}
}
.center__controlwrap {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  transition: right 0.6s ease;
  margin-right: 0.5rem;
}
.center__control {
  box-sizing: content-box;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.6rem;
  font-weight: bold;
  background: #555;
  color: #ddd;
  border-radius: 50%;
}
.center__control__movetop {
  display: none;
}
.center__control--hidden {
  display: unset;
}
</style>

