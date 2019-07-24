<template>
  <div class="modal">
    <section class="modal_wrap modal__add">
      <button class="close_modal" @click="closeModal">
        <i class="material-icons">close</i>
      </button>
      <header>
        <img class="modal_logo" src="../assets/logo2.png" />
      </header>
      <form id="add_form" class="modal__form" method="get" action="#">
        <input class="modal__input" name="user_id" type="text" placeholder="면접질문" required />
        <textarea
          class="modal__input modal__text"
          name="given_answer"
          placeholder="모범답안"
          style="height:25vh"
          required
        ></textarea>
        <div class="modal__input">
          <select class="modal__tech" name="tech">
            <option value disabled selected>관련기술</option>
            <template v-for="tech in techList">
              <option :value="tech.name">{{tech.name}}</option>
            </template>
          </select>
          <i class="modal__tech__icon material-icons">keyboard_arrow_down</i>
        </div>
        <input class="modal__submit" type="submit" value="새질문 만들기" />
      </form>
    </section>
  </div>
</template>
<script>
import FirebaseService from "../services/FirebaseService";
import firebase from "firebase/app";

export default {
  name: "Modal__AddProblem",
  promp: {
    type: 1
  },
  data: () => ({
    modal_addproblem: null,
    techList: []
  }),
  beforeCreate: function() {
    this.$http
      .get("/api/topics")
      .then(response => {
        this.techList = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted: function() {
    var modal = document.getElementsByClassName("modal");
    this.modal_addproblem = modal[2];
  },
  methods: {
    closeModal: function(event) {
      this.modal_addproblem.classList.toggle("show_modal");
    }
  }
};
</script>
<style scoped>
@import url("../assets/css/modal__addproblem.css");
</style>
