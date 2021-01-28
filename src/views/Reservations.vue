<template>
  <div>
      <b-card>
          <h1>Reservations</h1>
          <table class="table table-bordered table-striped">
              <thead>
                  <th>매장명</th>
                  <th>예약일</th>
                  <th>예약시간</th>
                  <th>인원</th>
                  <th></th>
              </thead>
              <tbody>
                  <tr v-for="(data, idx) in reservations" :key="idx">
                      <td>{{data.name}}</td>
                      <td>{{data.date}}</td>
                      <td>{{data.time}}</td>
                      <td>{{data.partySize}}</td>
                      <td><b-button variant="primary">Write a Review</b-button></td>
                  </tr>
              </tbody>
          </table>
      </b-card>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: "Reservations"
    , computed: {
        ...mapState(["reservations"])
    }
    , methods: {
        ...mapActions(["loadReservations"])
    }
    , created() {
        this.loadReservations();
    }
}
</script>

<style>

</style>