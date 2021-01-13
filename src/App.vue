<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
  // , computed: {
  //   ...mapState(['accessToken'])
  // }
  // , watch: {
  //   accessToken() {
  //     this.$router.go('/');
  //   }
  // }
}
</script>

<style>
#app {
  padding-bottom: 40px;
}
</style>
