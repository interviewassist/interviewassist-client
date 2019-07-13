<template>
    <nav class="left">
        <button id="move_context"><i class="material-icons">keyboard_arrow_left</i></button>
        <section>
            <div id="profile_img"></div>
            <a href="#" class="user">로그인</a>
            <a href="#" class="user">회원가입</a>
            <footer>
                <a class="link" href="https://github.com/interviewassist" target="blank_">
                    <i class="github-icon"></i>github
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
        var move_context = document.getElementById("move_context");
        
        move_context.addEventListener("click",function(element){
            var nav = document.querySelector("nav");
            var section = document.querySelector("nav>section");
            var width = section.offsetWidth;
            /**In callback function ( this. === move_context. )*/
            if(this.showContextMenu===undefined){
                this.showContextMenu = true;
            }
            if(this.showContextMenu){
                nav.style.width = "30px";
                section.style.width = "30px";
                section.style.transitionDelay = "0s";
                section.style.opacity = "0";
            }else{
                nav.style.width = "10rem";
                section.style.width = "10rem";
                section.style.transitionDelay = "0.4s";
                section.style.opacity = "1";
            }

            this.firstElementChild.classList.toggle("move_context-active");
            this.showContextMenu = !this.showContextMenu;
        });
    }
}
</script>
<style>
    section>nav.left{
        position:relative;
        width: 10rem;
        height:inherit;
        transition : all 0.4s ease-out;
        border-right: 1px solid rgba(200,200,200,0.5);
    }
    nav.left>#move_context{  
        background : transparent;
        height: 30px;
        position:absolute;
        right:0;
        top:0;
        width: 30px;

        /* Remove after click effects */
        border:0;
        outline:0;
    }
    #move_context>i{
        transition: all 0.4s ease;
    }
    #move_context>i:hover{
        font-weight: bold;
    }
   .move_context-active{
        transform: rotate(180deg);
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


