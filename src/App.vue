<template>
  <div>
    <Header></Header>
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import IndexPage from './views/IndexPage'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
    IndexPage
  },
  data () {
    return {
      //
    }
  }
}
</script>
