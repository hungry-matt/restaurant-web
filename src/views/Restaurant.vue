<template>
  <div>
    <b-overlay :show="false" rounded="sm">
        <b-card title="Test" :aria-hidden="show ? 'true' : null">
        <b-card-text>Restaurant: {{restaurant.name}}</b-card-text>
        <b-card-text>Address: {{restaurant.address}}</b-card-text>
        <!-- <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button> -->
        <b-button variant="primary" @click="reservation">Reservation</b-button>
        </b-card>
    </b-overlay>

    <b-card>
      <h1>Menu</h1>
        <table class="table table-bordered table-striped">
          <colgroup>
            <col width="80%">
            <col width="20%">
          </colgroup>
          <thead>
            <th scope="col">메뉴명</th>
            <th scope="col">가격</th>
          </thead>
          <tbody v-if="menuItems.length > 0">
            <tr v-for="(data, idx) in menuItems" :key="idx">
              <td>{{ data.name }}</td>
              <td>{{ data.id }}</td>
            </tr>
          </tbody>
          <tbody v-if="menuItems.length === 0">
            <tr>
              <td colspan="2"  style="text-align:center">등록된 메뉴가 없습니다.</td>
            </tr>
          </tbody>
        </table>
    </b-card>

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
        <h1>Review</h1>
        Score:
        <b-form-rating v-model="review.score"></b-form-rating>
        Review:
        <b-input type="text" v-model="review.description"></b-input>
        <b-button variant="primary" @click="createReview(getRestaurantId)">submit</b-button>
      </b-card>
    </b-overlay>

    <b-card>
      <h1>Reviews</h1>
      <table class="table table-bordered table-striped">
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
        ...mapState(['restaurant', 'review', 'reviews', 'menuItems'])
        , getRestaurantId() {
          const { restaurantId } = this.$data;
          return restaurantId;
        }
    }
    , methods: {
        ...mapActions(['loadRestaurant', 'createReview'])
        , reservation() {
            this.$router.push({name:"reservation", query:{restaurantId:this.restaurantId}})
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