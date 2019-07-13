<template>
    <nav class="right">
        <button id="move_techlist"><i class="material-icons">keyboard_arrow_right</i></button>
        <section>
            <ul class="tech">
                <li v-for="img in imgs" >
                    <img class="tech_img" :src="require(`@/assets/forList/${img.title}.png`)">
                    <h3>{{img.title}}</h3>
                    <p>{{img.title}} is ...</p>
                </li>
            </ul>
        </section>
    </nav>
</template>
<script>
export default {
    name : "TechList"
    ,data: function(){
      return{
        imgs:[{title:"android"},{title:"angular"},{title:"aws"},{title:"c"},{title:"cpp"},
                {title:"csharp"},{title:"css"},{title:"django"},{title:"docker"},{title:"flask"},
                {title:"git"},{title:"html"},{title:"ios"},{title:"java"},{title:"javascript"},
                {title:"mongodb"},{title:"mysql"},{title:"nodejs"},{title:"php"},{title:"python"},
                {title:"react"},{title:"spring-boot"},{title:"vue"}]
      }  
    }
    ,mounted : function(){
        var move_techlist = document.getElementById("move_techlist");
        
        move_techlist.addEventListener("click",function(element){
            var nav = document.querySelector("nav.right");
            var section = document.querySelector("nav.right>section");
            var width = section.offsetWidth;
            /**In callback function ( this. === move_techlist. )*/
            if(this.showtechlistMenu===undefined){
                this.showtechlistMenu = true;
            }
            if(this.showtechlistMenu){
                nav.style.width = "30px";
                section.style.width = "30px";
                section.style.transitionDelay = "0s";
                section.style.opacity = "0";
            }else{
                nav.style.width = "20rem";
                section.style.width = "20rem";
                section.style.transitionDelay = "0.23s";
                section.style.opacity = "1";
            }
            this.firstElementChild.classList.toggle("move_techlist-active");
            this.showtechlistMenu = !this.showtechlistMenu;
        });
    }
}
</script>
<style>

nav.right{
    position:relative;
    height:inherit;
    width:20rem;
    padding-top: 4vh;
    border-left: 1px solid rgba(200,200,200,0.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    transition: all 0.6s ease;
}
nav.right>button#move_techlist{
    background : transparent;
    height: 30px;
    position:absolute;
    left:0;
    top:0;
    width: 30px;

    /* Remove after click effects */
    border:0;
    outline:0;
}
#move_techlist>i{
    transition: all 0.6s ease;
}
#move_techlist>i:hover{
    font-weight: bold;
}
.move_techlist-active{
    transform: rotate(180deg);
}
nav.right>section{
    height:100%;
    width:inherit;
}
nav.right>section *{
    opacity :inherit;
}
section>ul.tech{
    overflow: auto;
    padding: 0px 15px 0 15px;
    height: inherit;
}
ul.tech>li:hover{
    background:rgba(200,200,200,0.5);
    border-bottom : 1px solid rgba(200,200,200,0.5);
    cursor:pointer;
}
ul.tech>li{
    list-style: none;
    padding : 12px 0 12px 0;
    margin : 0 0 9px 0;
    border-bottom : 1px solid #eee;
    border-radius : 5px;
}
ul.tech>li:last-child{
    border-bottom : none;
}
li>.tech_img{
    float:left;
    width:50px;
    height:50px;
    margin: 0 10px 0 10px;
}

</style>
