<template>
    <div class="modal">
        <section class="modal_wrap">
            <button class="close_modal"><i class="material-icons">close</i></button>
            <header>
                <img class="modal_logo" src="../assets/logo2.png">
            </header>
            <!-- Prevent form tag's submit method by "v-on:submit.prevent" -->
            <form id="signup_form" method="get" action="#" v-on:submit.prevent="onSubmit">
                <input class="modal_input" name="user_id" tabindex="1"
                        type="email" placeholder="이메일" autofocus required>
                <input class="modal_input" name="user_pw" tabindex="2"
                        type="password" placeholder="비밀번호" required>
                <input class="modal_input"                tabindex="3"
                        type="password" placeholder="비밀번호 재입력" required>
                <input type="submit" class="signup_btn" value="회원가입">
            </form>
        </section>
    </div>    
</template>
<script>
export default {
    name : "Modal"
    ,promp:{
        type:1
    }
    ,mounted:function(){
        var close_modal = document.getElementsByClassName("close_modal")[1];

        var modal = document.getElementsByClassName("modal");
        var modal_signup = modal[0];
        var modal_signup = modal[1];

        close_modal.addEventListener("click",(evt)=>{
            modal_signup.classList.toggle("show_modal");
        });


        modal_signup.addEventListener("click",function(evt){
            if(evt.target===evt.currentTarget){
                evt.currentTarget.classList.toggle("show_modal");
            }

        });
    }
    ,data:function(){
        return{

        }
    }
    ,methods:{
        onSubmit: function(){
            console.log(" Clicked signUp button.............");
            return false;
        }
    }
}
</script>
<style>
@import url('../assets/css/modal__signup.css');
</style>
