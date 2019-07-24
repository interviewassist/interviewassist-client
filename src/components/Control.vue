<template>
  <div class="control__wrap">
    <button class="control control__movetop" @click="scrollToTop">
      <i class="material-icons">arrow_upward</i>
    </button>
    <button class="control control__addproblem" @click="add">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Control",
  data: () => ({
    center: null,
    controlWrap: null,
    moveTop: null
  }),
  mounted: function() {
    this.center = document.getElementsByClassName("center")[0];
    this.controlWrap = document.getElementsByClassName("control__wrap")[0];
    this.moveTop = document.getElementsByClassName("control__movetop")[0];

    /** Center 스크롤시 moveTop 버튼 활성화 여부 */
    this.center.addEventListener("scroll", () => {
      if (
        this.center.scrollTop != 0 &&
        !this.moveTop.classList.contains("control--hidden")
      ) {
        this.moveTop.classList.toggle("control--hidden");
      } else if (
        this.center.scrollTop == 0 &&
        this.moveTop.classList.contains("control--hidden")
      ) {
        this.moveTop.classList.toggle("control--hidden");
      }
    });
    /** Center 스크롤시 moveTop 버튼 활성화 여부 */
    /** moveTop 버튼 기능 */
    this.moveTop.addEventListener("click", () => {
      this.center.scrollTo(0, 0);
    });
    /** moveTop 버튼 기능 */
  },
  methods: {
    add: function() {
      let modal = document.getElementsByClassName("modal");
      let modal_login = modal[0];
      let modal_signup = modal[1];
      let modal_addproblem = modal[2];

      modal_addproblem.classList.toggle("show_modal");
      console.log(modal);
    },
    scrollToTop: function() {
      this.center.scrollTo(0, 0);
    }
  }
};
</script>
<style scoped>
@media (min-width: 415px) {
  div.control__wrap--pushed {
    right: 20rem;
  }
}
.control__wrap {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  transition: right 0.6s ease;
  margin-right: 0.5rem;
}
.control {
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
.control__movetop {
  display: none;
}
.control--hidden {
  display: unset;
}
</style>

