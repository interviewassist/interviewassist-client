<template>
    <nav class="left">
        <ModalLogin></ModalLogin>
        <ModalSignup></ModalSignup>
        <button class="close_context"><i class="material-icons">chevron_left</i></button>
        <section>
            <div id="profile_img"></div>
            <a href="#" class="context__btn user_login">로그인</a>
            <a href="#" class="context__btn user_signup">회원가입</a>
            <footer>
                <a class="link" href="https://github.com/interviewassist" target="blank_">
                    <i class="github-icon"></i> github
                </a>
            </footer>
        </section>
    </nav>    
</template>
<script>
import ModalLogin from "./Modal"
import ModalSignup from "./Modal__Signup"
export default {
    name : "ContextMenu"
    ,data: function(){
        return{
            // showContextMenu : true
            modal_type:''
        }
    }
    ,components:{
        ModalLogin
        ,ModalSignup
    }
    ,mounted : function(){
        var close_context = document.querySelector("nav>.close_context");
        
        var article = document.getElementsByClassName("center")[0];
        var nav = document.querySelector("nav");
        var section = document.querySelector("nav>section");

        close_context.addEventListener("click",function(element){
            /**In callback function ( this. === close_context. )*/
            nav.style.width = "0px";
            section.style.width = "0px";
            section.style.transitionDelay = "0s";
            section.style.opacity = "0";

            article.style.display = "block";
            nav.isOpened = !nav.isOpened;
        });

        var user_login = document.getElementsByClassName("user_login")[0];
        var user_signup = document.getElementsByClassName("user_signup")[0];
        
        var modal = document.getElementsByClassName("modal");
        var modal_login = modal[0];
        var modal_signup = modal[1];

        user_login.addEventListener("click",()=>{
            modal_login.classList.toggle("show_modal");
            if(modal_signup.classList[1]==="show_modal"){
                modal_signup.classList.toggle("show_modal");
            }
        });

        user_signup.addEventListener("click",()=>{
            modal_signup.classList.toggle("show_modal");
            if(modal_login.classList[1]==="show_modal"){
                modal_login.classList.toggle("show_modal");
            }
        });
    }
}
</script>
<style>
    @import url('../assets/css/modal.css');
</style>
<style scoped>
    @import url('../assets/css/context.css');
</style>


