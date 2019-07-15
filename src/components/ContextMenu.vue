<template>
    <nav class="left">
        <button class="close_context"><i class="material-icons">chevron_left</i></button>
        <section>
            <div id="profile_img"></div>
            <a href="#" class="user_login">로그인</a>
            <a href="#" class="user_signup">회원가입</a>
            <footer>
                <a class="link" href="https://github.com/interviewassist" target="blank_">
                    <i class="github-icon"></i> github
                </a>
            </footer>
        </section>
        
    </nav>    
</template>
<script>
export default {
    name : "ContextMenu"
    ,data: function(){
        return{
            // showContextMenu : true
        }
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

        user_login.addEventListener("click",()=>{
            var modal = document.getElementsByClassName("modal")[0];

            modal.classList.toggle("show_modal");
        });
    }
}
</script>
<style>
    section>nav.left{
        position:relative;
        width: 0;
        height:inherit;
        transition : all 0.4s ease-out;
        border-right: 1px solid rgba(200,200,200,0.5);
    }
    nav.left>.close_context{  
        background : transparent;
        height: 30px;
        position:absolute;
        right:0;
        top:0;
        width: 30px;

    }
    .close_context>i{
        font-size:24px;
        transition: all 0.4s ease;
    }
    .close_context>i:hover{
        font-weight: bold;
    }
    #profile_img{
        width:50px;
        height:50px;
        background: #333;
        border-radius: 50%;
        margin : 0 auto 0.6rem auto;
        margin-left:auto;
        margin-right:auto;

        cursor:pointer;
    }
    nav.left>section{
        margin: 4rem 0 0 0;
        text-align: center;
        height:inherit;
        width:inherit;
        opacity: 0;
    }
    nav>section *{
        opacity: inherit;
        transition: all 0.3s;
    }
    .user{
        color: rgba(4,5,9,0.8);
        text-decoration: none;
        font-size:0.8rem;
    }
    .user:hover{
        text-decoration: underline;
    }

    
    section>footer{
        position:absolute;
        width:inherit;
        bottom:0;
        margin : 0 auto 1rem auto;
    }
    .link{
        text-decoration: none;
        color:rgba(4,5,9,0.8);
    }
    .link:hover{
        text-decoration: underline;

    }
    .github-icon{
        display:inline-block;
        background-image : url("../assets/icons/github-square-brands.svg");
        background-repeat: no-repeat;
        height:16px;
        width:16px;
        position:relative;
        bottom:-4px;
    }
</style>


