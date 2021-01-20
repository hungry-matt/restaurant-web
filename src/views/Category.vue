<template>
  <div>
      <h1>Category</h1>
      <b-card>
        <ul v-if="categories.length">
            <li v-for="(data, idx) in categories" :key="idx">
                <router-link
                    :to="{ 
                        path: '/restaurants'
                        , query: { 
                            region: region
                            , category:  data.id
                            }
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
import { mapState, mapActions } from 'vuex';

export default {
    name: "Category"
    , data() {
        return {
            region: ''
        }
    }
    , computed: {
        ...mapState(['categories'])
    }
    , methods: {
        ...mapActions(['loadCategories'])
    }
    , mounted() {
        const { region } = this.$route.query;
        this.region = region;
        this.loadCategories();
    }
}
</script>

<style>

</style>