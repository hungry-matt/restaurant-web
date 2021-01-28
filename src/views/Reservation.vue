<template>
  <div>
      <b-overlay :show="false" rounded="sm">
      <b-card title="Reservation" :aria-hidden="show ? 'true' : null">
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
        <b-button variant="primary" @click="submit">submit</b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: "Reservation"
    , data() {
        return {
            date: ''
            , time: ''
            , partySize: ''
            , restaurantId: ''
            , show: false
        }
    }
    , methods: {
      ...mapActions(["createReservation"])
      , async submit() {
          const {restaurantId, date, time, partySize} = this.$data;
          this.createReservation({
              restaurantId, 
              date, 
              time, 
              partySize, 
              success : () => {
                  this.$router.push('/list')
              }
          });
      }
    }
    , created() {
        const {restaurantId} = this.$route.query
        this.restaurantId = restaurantId
    }
}
</script>

<style>

</style>