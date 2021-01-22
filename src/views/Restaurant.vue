<template>
  <div>
    <b-overlay :show="false" rounded="sm">
        <b-card title="Test" :aria-hidden="show ? 'true' : null">
        <b-card-text>Restaurant: {{restaurant.name}}</b-card-text>
        <b-card-text>Address: {{restaurant.address}}</b-card-text>
        <b-card-text>Information: {{restaurant.information}}</b-card-text>
        <!-- <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button> -->
        <b-button variant="primary" @click="reservations">Reservations</b-button>
        </b-card>
    </b-overlay>

    <!-- <b-overlay :show="false" rounded="sm">
      <b-card title="Reservations" :aria-hidden="show ? 'true' : null">
        Date :
        <b-input type="date" v-model="date"></b-input>
        Time :
        <b-input type="time" v-model="time"></b-input>
        Party size :
        <b-input type="text" v-model="partySize"></b-input>
        <b-button variant="primary" @click="submit">submit</b-button>
      </b-card>
    </b-overlay> -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "Restaurant"
    , data() {
        return {
            restaurantId: ''
            , show: false
        }
    }
    , computed: {
        ...mapState(['restaurant'])
    }
    , methods: {
        ...mapActions(['loadRestaurant'])
        , reservations() {
            this.$router.push({name:"reservations", query:{restaurantId:this.restaurantId}})
        }
    }
    , created() {
        const { restaurantId } = this.$route.query
        this.restaurantId = restaurantId;
        this.loadRestaurant({restaurantId});
    }
}
</script>

<style>

</style>