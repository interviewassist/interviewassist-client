<template>
  <div class="modal">
    <section class="modal_wrap">
      <button class="close_modal">
        <i class="material-icons">close</i>
      </button>
      <header>
        <img class="modal_logo" src="../assets/logo2.png" />
      </header>
      <form id="login_form" method="get" action="#">
        <input class="modal_input" name="user_id" type="email" placeholder="이메일" autofocus required />
        <input class="modal_input" name="user_pw" type="password" placeholder="비밀번호" required />
        <input type="submit" class="login_btn" value="로그인" />
        <a class="forgot" href="#">아이디 및 비밀번호 찾기</a>
      </form>
      <div class="social_btn_group">
        <button class="google_login">
          <img class="google_logo" src="../assets/icons/google_Logo150.png" />
        </button>

        <button class="github_login">
          <img class="github_img" src="../assets/icons/GitHub-Mark-Light-32px.png" />

          <img class="github_logo" src="../assets/icons/GitHub_Logo_White.png" />
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Modal",
  promp: {
    type: 1
  },
  mounted: function() {
    var close_modal = document.getElementsByClassName("close_modal")[0];
    var modal = document.getElementsByClassName("modal");
    var modal_login = modal[0];
    var modal_signup = modal[1];

    close_modal.addEventListener("click", evt => {
      modal_login.classList.toggle("show_modal");
    });

    modal_login.addEventListener("click", function(evt) {
      if (evt.target === evt.currentTarget) {
        evt.currentTarget.classList.toggle("show_modal");
      }
    });
  }
};
</script>
<style>
@import url("../assets/css/modal__login.css");
</style>


