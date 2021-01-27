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
    <b-overlay>
      <b-card>
        Score:
        <b-form-rating v-model="review.score"></b-form-rating>
        Review:
        <b-input type="text" v-model="review.description"></b-input>
        <b-button variant="primary" @click="createReview(getRestaurantId)">submit</b-button>
      </b-card>
    </b-overlay>

    <b-card>
      <h1>Reviews</h1>
      <table class="table table-bordered">
        <colgroup>
          <col width="10%">
          <col width="10%">
          <col width="80%">
        </colgroup>
        <thead>
          <th scope="col">평점</th>
          <th scope="col">작성자</th>
          <th scope="col">내용</th>
        </thead>
        <tbody v-if="reviews.length > 0">
          <tr v-for="(data, idx) in reviews" :key="idx">
            <td><b-form-rating v-model="data.score" disabled></b-form-rating></td>
            <td>{{ data.name }}</td>
            <td>{{ data.description }}</td>
          </tr>
        </tbody>
        <tbody v-if="reviews.length === 0">
          <tr>
            <td colspan="3" style="text-align:center">등록된 평점이 없습니다.</td>
          </tr>
        </tbody>
      </table>
    </b-card>
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
            , score: ''
            , description: ''
        }
    }
    , computed: {
        ...mapState(['restaurant', 'review', 'reviews'])
        , getRestaurantId() {
          const { restaurantId } = this.$data;
          return restaurantId;
        }
    }
    , methods: {
        ...mapActions(['loadRestaurant', 'createReview', 'loadReviews'])
        , reservations() {
            this.$router.push({name:"reservations", query:{restaurantId:this.restaurantId}})
        }
    }
    , created() {
        const { restaurantId } = this.$route.query
        this.restaurantId = restaurantId;
        this.loadRestaurant({restaurantId});
        this.loadReviews(restaurantId);
    }
}
</script>

<style>

</style>