<template>
  <div>
      <h1>Category</h1>
      <b-card>
        <ul v-if="categories.length">
            <li v-for="(data, idx) in categories" :key="idx">
                <router-link
                    :to="{ 
                        path: '/list'
                        , query: { 
                            regionId: regionId
                            , categoryId:  data.id
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
            regionId: ''
        }
    }
    , computed: {
        ...mapState(['categories'])
    }
    , methods: {
        ...mapActions(['loadCategories'])
    }
    , mounted() {
        const { regionId } = this.$route.query;
        this.regionId = regionId;
        this.loadCategories();
    }
}
</script>

<style>

</style>