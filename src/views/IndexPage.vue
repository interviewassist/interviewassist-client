<template lang="html">
    <div id="main_wrap">
        <h1 style="text-align: center">개발자로서 직장을 찾고 계신가요?<br><br>면접에서 당신이 알아야할 것들이 있습니다</h1>
        <button id="main_btn" class="div_center">회원가입</button>
        <div style="width:100%;display:flex;justify-content:center;">
            <a id="forceEnter" class="div_center" href="menu.html">가입없이 둘러보기</a>
        </div>
    </div>
</template>

<script>
export default {
    name : "IndexPage"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap&subset=korean');

html{
    background: url("https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    color:#eee;
}
#main_wrap{
    margin: 7rem auto 0 auto ;
    height : 20rem;
    width: 100%;
    background: rgba(0,0,0,0.3);
}
#main_wrap>h1{
    margin: 0 auto 0 auto ;
    padding: 3rem 0 0 0;
}
#main_btn{
    border : none;
    border-radius: 10rem;
    height: 3rem;
    width: 9rem;

    font-size: 1.2rem;
    font-weight: bold;
    background : rgba(250,130,11,0.3);
    color: #222;
    color: rgba(255,255,255,0.8);
    margin: 4rem auto 0 auto;

    cursor:pointer;
    transition: all 0.3s;
}
#main_btn:hover{
    background : rgba(255, 128, 0, 0.6);
    color: rgba(255,255,255,1);
}
#forceEnter{
    text-align: center;
    display: inline-block;
    text-decoration: none;
    color:rgba(255,255,255,0.5);
    margin: 1rem auto 0 auto;
    font-size: 0.7rem;
}
/* Header.css*/
header{
    background:#111;
}
header>#logo{
    width:18rem;
}
/* Header.css*/
/* master.css*/

html{
    font-family: 'Nanum Gothic', sans-serif;
}
body{
    margin: 0 0 0 0 ;
    padding: 0 0 0 0;
}
.div_center{
    display:block;
    margin-left:auto;
    margin-right:auto;
}
/* master.css*/
header{
    background:transparent;
}
</style>