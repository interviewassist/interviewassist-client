<template>
    <nav class="right">
        <button class="close_techlist"><i class="material-icons">chevron_right</i></button>
        <section>
            <ul class="tech">
                <li v-for="img in imgs" >
                    <img class="tech_img tech_event" :src="require(`@/assets/forList/${img.title}.png`)">
                    <h3 class="tech_event">{{img.title}}</h3>
                    <p>{{img.title}} is ...</p>
                    <input :id="img.title" type="hidden" :value="img.title">
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
        var close_techlist = document.querySelector(".right>.close_techlist");
        
        /** menu open&close button  */
        close_techlist.addEventListener("click",function(element){
            var article = document.getElementsByClassName("center");
            var nav = document.querySelector("nav.right");
            var section = document.querySelector("nav.right>section");

            /**In callback function ( this. === close_techlist. )*/
            nav.style.width = "0px";
            section.style.width = "0px";
            section.style.transitionDelay = "0s";
            section.style.opacity = "0";

            article[0].style.display = "block";
            nav.isOpened = !nav.isOpened;
        });

        /** list item's event  */
        var tech = document.querySelector("ul.tech");

        tech.addEventListener("click",(evt) =>{
            /* evt.currentTarget === tech */
            var clicked = evt.target.tagName;
            if(clicked==="LI"){
                this.$emit('tech-event',evt.target.lastElementChild.value);
            }
            else if(clicked==="IMG"||clicked==="H3"||clicked==="P"){
                this.$emit('tech-event',evt.target.parentElement.lastElementChild.value);
            }
        })
    }
}
</script>
<style>

nav.right{
    position:relative;
    height:inherit;
    width:0;
    padding-top: 4vh;
    border-left: 1px solid rgba(200,200,200,0.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    transition: all 0.6s ease;
}
nav.right>button.close_techlist{
    background : transparent;
    height: 30px;
    position:absolute;
    left:0;
    top:0;
    width: 30px;

}
.close_techlist>i{
    font-size:24px;
    transition: all 0.6s ease;
}
.close_techlist>i:hover{
    font-weight: bold;
}
nav.right>section{
    height:100%;
    width:inherit;
    opacity: inherit;
}
nav.right>section *{
    opacity :inherit;
}
section>ul.tech{
    overflow: auto;
    padding: 10px 15px 0 15px;
    height: inherit;
}
ul.tech>li:hover{
    /* background:rgba(200,200,200,0.5); */
    /* border-bottom : 1px solid rgba(200,200,200,0.5); */
    cursor:pointer;
    box-shadow: 0 1px 4px 4px rgba(200,200,200,0.5);
    /* none : 그림자 효과를 없앱니다.
x-position : 가로 위치입니다. 양수면 오른쪽에, 음수면 왼쪽에 그림자가 만들어집니다. (필수)
y-position : 세로 위치입니다. 양수면 아래쪽에, 음수면 위쪽에 그림자가 만들어집니다. (필수)
blur : 그림자를 흐릿하게 만듭니다. 값이 클 수록 더욱 흐려집니다.
spread : 양수면 그림자를 확장하고, 음수면 축소합니다.
color : 그림자 색을 정합니다.
inset : 그림자를 요소의 안쪽에 만듭니다.
initial : 기본값으로 설정합니다.
inherit : 부모 요소의 속성값을 상속받습니다. */
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
