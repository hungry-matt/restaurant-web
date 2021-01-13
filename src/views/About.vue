<template>
    <div>
        <h1>About page</h1>
        <h1>accessToken : {{ accessToken }}</h1>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex';
import {mapState} from 'vuex';

export default {
    computed: {
        // ...mapGetters({})
        ...mapState(['accessToken', 'counter'])
        // , token() {
        //     const { accessToken } = this.$route.params;
        //     return accessToken
        // }
    }
}
</script>