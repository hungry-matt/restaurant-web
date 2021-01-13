<template>
  <div>
      <b-card>
        <ul v-if="list.length">
            <li v-for="(data, idx) in list" :key="idx">
                <router-link
                    :to="{path: '/login', params: {id: data.id}}"
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

export default {
    name: "List"
    , data() {
        return {
            list: [
                
            ]
        }
    }
    , methods: {
        ...mapActions(['getRegions'])
    }
    , mounted() {
        this.getRegions();
    }
}
</script>

<style>

</style>