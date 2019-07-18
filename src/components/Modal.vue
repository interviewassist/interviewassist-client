<template>
  <div class="modal">
    <section class="modal_wrap">
      <button class="close_modal">
        <i class="material-icons">close</i>
      </button>
      <header>
        <img class="modal_logo" src="../assets/logo2.png" />
      </header>
      <form id="login_form">
        <input class="modal_input" name="user_id" type="text" placeholder="아이디" autofocus />
        <input class="modal_input" name="user_pw" type="password" placeholder="비밀번호" />
        <button class="login_btn">로그인</button>
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
import { injectGoogleLogin } from "../services/SocialLoginService";

export default {
  name: "Modal",
  promp: {
    type: 1
  },
  mounted: function() {
    var close_modal = document.getElementsByClassName("close_modal")[0];
    var modal = document.getElementsByClassName("modal")[0];

    close_modal.addEventListener("click", evt => {
      modal.classList.toggle("show_modal");
    });

    modal.addEventListener("click", function(evt) {
      if (evt.target === evt.currentTarget) {
        evt.currentTarget.classList.toggle("show_modal");
        console.log("clicked modal................");
        console.log(evt.currentTarget.tagName);
      }
    });
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
@media (min-width: 0px) and (max-width: 414px) {
  .modal > .modal_wrap {
    width: 90vw;
    height: 90vh;
  }
  .modal_wrap > header {
    margin: 10vh auto 0 auto;
  }
  .modal_wrap > #login_form {
    flex: 1;
    margin-bottom: 20vh;
  }
  header > .modal_logo {
    width: 90%;
  }
  .social_btn_group {
    flex: 0;
  }
}
@media (min-width: 415px) {
  .modal > .modal_wrap {
    width: 50vh;
    height: 80vh;
  }
  .modal_wrap > header {
    margin: 9vh auto 0 auto;
  }
  .modal_wrap > #login_form {
    flex: 2;
    margin-bottom: 4vh;
  }
  header > .modal_logo {
    width: 50%;
  }
  .social_btn_group {
    flex: 1;
  }
}
div.modal {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(4, 5, 9, 0.8);
  z-index: 1;
}
div.show_modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal > .modal_wrap {
  background: #fbfaf6;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 0 2vh;
}
.modal_wrap > .close_modal {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(4, 5, 9, 0.8);
  margin: 2vh;
}
.close_modal > .material-icons {
  font-size: 4vh;
}
.modal_wrap > header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 8vmin;
  font-weight: bold;
  text-align: center;
  background: rgba(4, 5, 9, 0.8);
}
header > .modal_logo {
  margin: 0 auto 0 auto;
}
.modal_wrap > #login_form {
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}
#login_form > .modal_input {
  border-radius: 5rem;
  padding: 0 1rem 0 1rem;
  display: block;
  height: 5vh;
  background: #fff;
  margin: 0 0 1vh 0;
  box-shadow: 0px 1px 1px 0px gray;
}
#login_form > .modal_input:hover {
  box-shadow: 0px 2px 2px 1px rgba(4, 5, 9, 0.3);
}

#login_form > .login_btn {
  width: 20vh;
  height: 4vh;
  margin: 4vh auto 0 auto;
  background: rgba(255, 166, 0, 0.7);
  border-radius: 5rem;
  font-weight: bold;
}
#login_form > .login_btn:hover {
  background: rgba(255, 166, 0, 0.75);
  box-shadow: 0px 2px 2px 1px rgba(4, 5, 9, 0.3);
}
#login_form > .forgot {
  font-size: 1.1vh;
  color: inherit;
  text-decoration: none;
  margin: 1rem auto 0 auto;
}
#login_form > .forgot:hover {
  text-decoration: underline;
}
/* Social Login Buttons*/
.social_btn_group {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.social_btn_group > * {
  border-radius: 5rem;
  padding: 1vh 0 1vh 0;
  margin-bottom: 2vh;
}
.github_login {
  background: #24292e;
}

.google_login {
  background: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.google_login {
  background: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.github_login > *,
.google_login > * {
  height: 3vh;
}
</style>

