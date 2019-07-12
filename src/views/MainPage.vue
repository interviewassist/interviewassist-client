<template lang="html">
    <section>
        <article class="left"></article>
        <article class="right">
            <ul class="tech">
                <li v-for="img in imgs" >
                    <img class="tech_img" :src="require(`@/assets/forList/${img.title}.png`)">
                    <h3>{{img.title}}</h3>
                    <p>{{img.title}} is ...</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
    name : "MainPage"
    ,data: function(){
      return{
        imgs:[{title:"android"},{title:"angular"},{title:"aws"},{title:"c"},{title:"cpp"},
                {title:"csharp"},{title:"css"},{title:"django"},{title:"docker"},{title:"flask"},
                {title:"git"},{title:"html"},{title:"ios"},{title:"java"},{title:"javascript"},
                {title:"mongodb"},{title:"mysql"},{title:"nodejs"},{title:"php"},{title:"python"},
                {title:"react"},{title:"spring-boot"},{title:"vue"}]
      }  
    }
    ,mounted:function(){
        // var imgs = document.getElementsByClassName("tech_img");

        // for(var i=0; i<imgs.length;i++){
        //     imgs[i].setAttribute("src","../assets/forList/" + this.imgs[i].title+ ".png");
        // }
    }
    ,methods:{

    }
}
</script>

<style>
/* html,body,body>div{
    height:100%;
} */
body>div{
    display: flex;
    flex-direction: column;
}
body>div>section{
    display:flex;
    flex:1;
}
.left,.right{
    height:inherit;
}
section>.left{
    background: #555;
    flex:60;
}
section>.right{
    overflow:auto;
    flex:40;
}
.right>ul.tech{
    padding-top:10px;
    background:#111;
}
ul.tech>li{
    list-style: none;
    height:70px;
    padding-top:10px;
    margin-bottom:10px;
    background:rgba(250,130,9,0.5);
}
li>.tech_img{
    float:left;
    width:50px;
    height:50px;
    margin-left:10px;
    margin-right:10px;
}
</style>