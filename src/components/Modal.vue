<template>
  <div class="modal">
    <section class="modal_wrap">
      <button class="close_modal" @click="closeModal">
        <i class="material-icons">close</i>
      </button>
      <header>
        <img class="modal_logo" src="../assets/logo2.png" />
      </header>
      <form id="login_form" class="modal__form" method="get" action="#">
        <input
          class="modal__input"
          name="user_id"
          type="email"
          placeholder="이메일"
          autofocus
          required
        />
        <input class="modal__input" name="user_pw" type="password" placeholder="비밀번호" required />
        <input type="submit" class="modal__submit" value="로그인" />
        <a class="forgot" href="#">아이디 및 비밀번호 찾기</a>
      </form>
      <div class="social_btn_group">
        <button class="google_login" @click="loginWithSocialService('Google')">
          <img class="google_logo" src="../assets/icons/google_Logo150.png" />
        </button>

        <button class="github_login" @click="loginWithSocialService('Github')">
          <img class="github_img" src="../assets/icons/GitHub-Mark-Light-32px.png" />

          <img class="github_logo" src="../assets/icons/GitHub_Logo_White.png" />
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import FirebaseService from "../services/FirebaseService";
import firebase from "firebase/app";

export default {
  name: "Modal",
  data: () => ({
    modal_login: null
  }),
  promp: {
    type: 1
  },
  mounted: function() {
    var modal = document.getElementsByClassName("modal");
    this.modal_login = modal[0];
  },
  methods: {
    async loginWithSocialService(service) {
      await FirebaseService.socialLoginWith(service); // sign in with social service
      const id_token = await firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true);
      this.$http.post(`api/auth`, { id_token }).then(response => {
        const { email, name, loginToken } = response.data;
        this.$store.state.user = email;
        console.log(this.$store.state.user);

        localStorage.setItem("token", loginToken); // set token to be used in Authorization header
      });
    },
    closeModal: function() {
      this.modal_login.classList.toggle("show_modal");
    }
  }
};
</script>
<style>
@import url("../assets/css/modal__login.css");
</style>
