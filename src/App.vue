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
  }
  , watch: {
    accessToken() {
      this.$router.push('/')
    }
  }
  , async mounted() {
    const userName = userName;

    if (!userName) {
      this.loadUserName();
    }
  }
}
</script>

<style>
#app {
  padding-bottom: 40px;
}
</style>
