<template>
    <div>
      <Header></Header>
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap&subset=korean');
/* master.css*/
html{
    font-family: 'Nanum Gothic', sans-serif;
    overflow:hidden;
}
body{
    margin: 0;
    padding: 0;
}
.div_center{
    display:block;
    margin-left:auto;
    margin-right:auto;
}

/* Material Icons _strat*/
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
/* Material Icons _end*/
/* Slidebar style _start*/

::-webkit-scrollbar {
  width:10px;
}
::-webkit-scrollbar-thumb{
  /* 몸통 부분에서 실제 움직이는 부분 */
  border-radius: 5px;
  background :rgba(200,200,200,0.9);
}
/* Slidebar style _end*/
</style>

