<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
  , computed: {
    ...mapState(['userName', 'accessToken'])
  }
  , methods: {
    ...mapActions(['loadUserName'])
    , getName() {
       const token = this.accessToken;

      if (token !== "") {
        this.loadUserName();
      }
    }
  }
  , watch: {
    accessToken() {
      this.getName()
      // this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  padding-bottom: 40px;
}
</style>
