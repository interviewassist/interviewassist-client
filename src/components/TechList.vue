<template>
    <nav class="right">
        <ul class="tech">
            <li v-for="img in imgs" >
                <img class="tech_img" :src="require(`@/assets/forList/${img.title}.png`)">
                <h3>{{img.title}}</h3>
                <p>{{img.title}} is ...</p>
            </li>
        </ul>
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
}
</script>
<style>

.right{
    background:inherit;
    overflow:auto;
    width:300px;
    padding-top:10px;
    border-left: 1px solid rgba(200,200,200,0.5);
    box-sizing : border-box;
    height:94vh;
}
.right>ul.tech{
    background:inherit;
    overflow:auto;
    padding:0px 15px 10px 15px;

}
ul.tech>li:hover{
    background:rgba(200,200,200,0.5);
    border-bottom : 1px solid rgba(200,200,200,0.5);
    cursor:pointer;
}
ul.tech>li{
    background:inherit;
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
