<template>
    <nav style="left:0px">
        <button id="close_context"></button>
        <section>
            <div id="profile_img"></div>
            <a href="#" class="user">로그인</a>
            <a href="#" class="user">회원가입</a>
        </section>
    </nav>    
</template>
<script>
export default {
    name : "ContextMenu"
    ,data: function(){
        return{
            showContextMenu : false
        }
    }
    ,mounted : function(){
        var close_context = document.getElementById("close_context");
        document.querySelector("nav").style.left = "0px";

        close_context.addEventListener("click",function(element){
            var nav = document.querySelector("nav");
            var section = document.querySelector("nav>section");
            var width = nav.offsetWidth;
            if(this.showContextMenu){
                nav.style.width = "40px";
                for(var i=0; i<section.childElementCount ; i++){
                    section.children[i].style.transitionDelay = "0s";
                    section.children[i].style.opacity = "0";
                    console.log(i);
                }
            }else{
                nav.style.width = "10rem";
                for(var i=0; i<section.childElementCount ; i++){
                    section.children[i].style.transitionDelay = "0.1s";
                    section.children[i].style.opacity = "1";
                }
            }
            this.showContextMenu = !this.showContextMenu;

        });
    }
}
</script>
<style>
    section>nav{
        position:relative;
        width: 10rem;
        background: #999;
        transition : all 0.3s ease-in-out;
    }
    nav>#close_context{
        position:absolute;
        top:0;
        right:0;
        margin: 5px 5px 0 0 ;
        width: 30px;
        height: 30px;
        background : #333;
    }
    #open_context{
        position:absolute;
        top:0;
        left:0;
        margin: 5px 0 0 5px ;
        width: 30px;
        height: 30px;
        background : #333;
    }
    #profile_img{
        width:50px;
        height:50px;
        background: #333;
        border-radius: 50%;
        margin : 4rem auto 0.6rem auto;
        margin-left:auto;
        margin-right:auto;

        cursor:pointer;
    }
    nav>section{
        text-align: center;
    }
    nav>section *{
        transition: 0.3s;
    }
    .user{
        color:#333;
        text-decoration: none;
        font-size:0.8rem;
    }
    .user:hover{
        text-decoration: underline;
    }
</style>


