<template>
  <div>
      <h1>Regions</h1>
      <b-card>
        <ul v-if="regions.length">
            <li v-for="(data, idx) in regions" :key="idx">
                <router-link
                    :to="{
                        path: '/category'
                        , query: { region: data.name }
                        }"
                >
                {{ data.name }}
                </router-link>
            </li>
        </ul>
      </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

export default {
    name: "List"
    , data() {
        return {
            
        }
    }
    , computed: {
        ...mapState(['regions'])
    }
    , methods: {
        ...mapActions(['loadRegions'])
        
    }
    , mounted() {
        this.loadRegions();
    }
}
</script>

<style>

</style>