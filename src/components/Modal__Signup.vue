<template>
  <div class="modal">
    <section class="modal_wrap">
      <button class="close_modal" @click="closeModal">
        <i class="material-icons">close</i>
      </button>
      <header>
        <img class="modal_logo" src="../assets/logo2.png" />
      </header>
      <!-- Prevent form tag's submit method by "v-on:submit.prevent" -->
      <form
        id="signup_form"
        class="modal__form"
        method="get"
        action="#"
        v-on:submit.prevent="onSubmit"
      >
        <input
          class="modal__input"
          name="user_id"
          tabindex="1"
          type="email"
          placeholder="이메일"
          autofocus
          required
        />
        <input
          class="modal__input"
          name="user_pw"
          tabindex="2"
          type="password"
          placeholder="비밀번호"
          required
        />
        <input class="modal__input" tabindex="3" type="password" placeholder="비밀번호 재입력" required />
        <input type="submit" class="modal__submit" value="회원가입" />
      </form>
    </section>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data: () => ({
    modal_signup: null
  }),
  promp: {
    type: 1
  },
  mounted: function() {
    var modal = document.getElementsByClassName("modal");
    var modal_login = modal[0];
    this.modal_signup = modal[1];
  },
  methods: {
    onSubmit: function() {
      console.log(" Clicked signUp button.............");
      return false;
    },
    closeModal: function() {
      this.modal_signup.classList.toggle("show_modal");
    }
  }
};
</script>
<style>
@import url("../assets/css/modal__signup.css");
</style>
