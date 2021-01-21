<template>
  <div>
    <h1>Restaurants</h1>
    <table class="table table-bordered">    
        <th>이름</th>
        <th>주소</th>

        <tr v-for="(data, idx) in restaurants" :key="idx">
            <td>
                <router-link
                    :to="{
                        name: 'restaurant'
                        , params: {
                            restaurantId: data.id
                        }
                     }"
                >
                {{data.name}}
                </router-link>
            </td>
            <td>{{data.address}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name : "Restaurants"
    , computed: {
        ...mapState(['restaurants'])
    }
    , methods: {
        ...mapActions(['loadRestaurants'])
    }
    , created() {
        const { region, category } = this.$route.params
        this.loadRestaurants({region, category})
    }
}
</script>

<style>

</style>