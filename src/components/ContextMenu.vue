<template>
  <nav class="left">
    <ModalLogin></ModalLogin>
    <ModalSignup></ModalSignup>
    <button class="close_context">
      <i class="material-icons">chevron_left</i>
    </button>
    <section class="context__wrap">
      <div id="profile_img"></div>
      <a href="#" class="context__btn user_login">로그인</a>
      <a href="#" class="context__btn user_signup">회원가입</a>
      <ul class="context__menu">
        <li>
          <a href="myproblems">내가 푼 문제</a>
        </li>
      </ul>
      <footer>
        <a class="link" href="https://github.com/interviewassist" target="blank_">
          <i class="github-icon"></i> github
        </a>
      </footer>
    </section>
  </nav>
</template>
<script>
import ModalLogin from "./Modal";
import ModalSignup from "./Modal__Signup";

import { Mounted } from "../assets/js/contextMenu";
export default {
  name: "ContextMenu",
  data: function() {
    return {
      // showContextMenu : true
      modal_type: ""
    };
  },
  components: {
    ModalLogin,
    ModalSignup
  },
  mounted: Mounted
};
</script>
<style>
@import url("../assets/css/modal.css");
</style>
<style scoped>
@import url("../assets/css/context.css");
.context__menu {
  list-style-type: none;
  margin: 5rem auto 0 auto;
  padding: 0;
}

.context__menu > li > a {
  text-decoration: none;
  color: inherit;
}
.context__menu > li:hover {
  text-decoration: underline;
}
</style>


