<template>
  <div>
    <b-overlay :show="false" rounded="sm">
      <b-card title="Test" :aria-hidden="show ? 'true' : null">
        <b-card-text>Restaurant: {{restaurant.name}}</b-card-text>
        <b-card-text>Address: {{restaurant.address}}</b-card-text>
        <b-card-text>Infomation: {{restaurant.information}}</b-card-text>
        <!-- <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button> -->
      </b-card>
    </b-overlay>
    <b-overlay :show="false" rounded="sm">
      <b-card title="Reservations" :aria-hidden="show ? 'true' : null">
        Date :
        <!-- <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker> -->
        <b-input type="date" v-model="date"></b-input>
        Time :
        <!-- <b-col md="auto">
          <b-form-timepicker v-model="time" locale="en"></b-form-timepicker>
        </b-col> -->
        <b-input type="time" v-model="time"></b-input>
        Party size :
        <b-input type="text" v-model="partySize"></b-input>
        <!-- <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button> -->
        <b-button variant="primary" @click="reservations">submit</b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "Restaurant"
    , data() {
        return {
            date: ''
            , time: ''
            , partySize: ''
        }
    }
    , computed: {
        ...mapState(['restaurant'])
    }
    , methods: {
        ...mapActions(['loadRestaurant', 'reservations'])
    }
    , created() {
        const { restaurantId } = this.$route.query
        this.loadRestaurant({restaurantId});
    }
}
</script>

<style>

</style>