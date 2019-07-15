<template>
    <div class="modal">
        <!-- <div class="modal-filter"> -->
            <section class="modal_wrap">
                <button class="close_modal"><i class="material-icons">close</i></button>
                <header>
                    <img class="modal_logo" src="../assets/logo2.png">
                </header>
                <form id="login_form">
                    <input class="modal_input" name="user_id"
                            type="text" placeholder="아이디" autofocus>
                    <input class="modal_input" name="user_pw"
                            type="password" placeholder="비밀번호">
                    <button class="login_btn">로그인</button>
                    <a class="forgot"
                        href="#">아이디 및 비밀번호 찾기</a>
                    <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
                </form>
                <div class="social_btn_group">
                    <!-- <button class="github_login">
                        <img class="github_img"  src="../assets/icons/GitHub-Mark-Light-32px.png">
                        <img class="github_logo" src="../assets/icons/GitHub_Logo_White.png">
                    </button>
                    <div style="height:1rem"></div> -->
                    <button class="google_login">
                        <!-- <img class="google_img"  src="../assets/icons/google_Mark64.png"> -->
                        <img class="google_logo"  src="../assets/icons/google_Logo150.png">
                        <!-- <img class="google_img"  src="../assets/icons/google_Logo300.png"> -->
                    </button>
                    <div style="height:1rem"></div>
                    
                    <button class="github_login">
                        <img class="github_img"  src="../assets/icons/GitHub-Mark-Light-32px.png">
                        <!-- <img class="github_img"  src="../assets/icons/GitHub-Mark-Light-120px-plus.png"> -->
                        <img class="github_logo" src="../assets/icons/GitHub_Logo_White.png">
                    </button>
                </div>
            </section>
        <!-- </div> -->
    </div>    
</template>
<script>
export default {
    name : "Modal"
    ,promp:{
        /** 
         *  type 1: Login
         *  type 2: SignUp
         */
        type:1
    }
    ,mounted:function(){
        var close_modal = document.getElementsByClassName("close_modal")[0];
        var modal = document.getElementsByClassName("modal")[0];

        close_modal.addEventListener("click",(evt)=>{
            modal.classList.toggle("show_modal");
        });


        modal.addEventListener("click",function(evt){
            if(evt.target===evt.currentTarget){
                evt.currentTarget.classList.toggle("show_modal");
                console.log("clicked modal................");
                console.log(evt.currentTarget.tagName);
            }

        });
    }
    ,data:function(){
        return{

        }
    }
    ,methods:{
        
    }
}
</script>

<style>
@media (min-width: 0px) and (max-width: 414px){
    .modal>.modal_wrap{
        width:90vw;
        height:90vh;
    }
    .modal_wrap>header{
        margin:5rem auto 2rem auto;
    }
    .modal_wrap>#login_form {
        flex:1;
    }
    header>.modal_logo{
        width:90%;
    }
    .social_btn_group{
        flex:0;
        
    }
}
@media (min-width: 415px){
    .modal>.modal_wrap{
        width:500px;
        height:80vh;
    }
    .modal_wrap>header{
        margin:7rem auto 2rem auto;
    }
    .modal_wrap>#login_form {
        flex:2;
    }
    header>.modal_logo{
        width:50%;
    }
    .social_btn_group{
        flex:1;
        
    }
}
    div.modal{
        display:none;
        position:fixed;
        width:100vw;
        height:100vh;
        /* background:#FBFAF6; */
        background:rgba(4,5,9,0.8);
        z-index: 1;
    }
    div.show_modal{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .modal>.modal_wrap{
        background:#FBFAF6;
        border-radius: 1rem;
        display:flex;
        flex-direction: column;
        position:relative;
        margin:auto;
        /* background:rgba(251,250,246,0.95); */
        padding: 2rem;
    }
    .modal_wrap>.close_modal{
        display:inline-block;
        position: absolute;
        top:0;
        right:0;
        color:rgba(4,5,9,0.8);
        margin:1rem;

    }
    .modal_wrap>header{
        display:flex;
        position:absolute;
        top: 0;
        left:0;
        width: 100%;
        font-size:8vmin;
        font-weight: bold;
        text-align:center;
        background:rgba(4,5,9,0.8);

    }
    header>.modal_logo{
        margin: 0 auto 0 auto;
    }
    .modal_wrap>#login_form{
        border-radius: inherit;
        display:flex;
        flex-direction: column;
        width:100%;
        height: 100%;
        /* padding:3rem 0 0 0; */
        /* background: #bbb; */
        justify-content:flex-end;
        margin:0 0 5rem 0;
    }
    #login_form>.modal_input{
        border-radius: 5rem;
        padding: 0 1rem 0 1rem;
        display:block;
        /* width:90%; */
        height:3rem;
        background:#fff;
        margin: 0 0 1rem 0;
        box-shadow: 0px 1px 1px 0px gray;

    }
    #login_form>.modal_input:hover{
        box-shadow: 0px 2px 2px 1px rgba(4,5,9,0.3);
    }

    #login_form>.login_btn{
        width: 12rem;
        height:3rem;
        margin:2rem auto 0 auto;
        background: rgba(255, 166, 0, 0.7);
        border-radius: 5rem;
        font-weight: bold;
    }
    #login_form>.login_btn:hover{
        background: rgba(255, 166, 0, 0.75);
        box-shadow: 0px 2px 2px 1px rgba(4,5,9,0.3);
    }
    #login_form>.forgot{
        font-size: 0.8rem;
        color:inherit;
        text-decoration: none;
        margin:1rem auto 0 auto;
    }
    #login_form>.forgot:hover{
        text-decoration: underline;
    }
/* 
    <button class="github_login">
        <span class="github_img"><span><span class="github_logo"><span>
    </button> 
*/
    .social_btn_group{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .github_login,
    .google_login{
        /* margin: 1rem 0 1rem 0; */
        border-radius: 5rem;

    }
    .github_login{
        background:#24292e;
        padding:0.5rem;
    }

    .google_login{
        background:white;
        padding:0.5rem;
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    }

    .github_login>.github_img
    ,.github_login>.github_logo
    ,.google_login>.google_img
    ,.google_login>.google_logo{
        height:2rem;
    }
</style>

