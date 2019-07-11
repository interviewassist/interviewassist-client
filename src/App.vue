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
</style>

