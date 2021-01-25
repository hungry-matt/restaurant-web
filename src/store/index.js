import Vue from "vue";
import Vuex from "vuex";
import { post, loginPost, useAccessToken, get, newAxios } from "./http";

Vue.use(Vuex);

const state = {
    counter: 0
    , accessToken: ''
    , users: []
    , categories: []
    , restaurants: []
    , restaurant: {}
    , regions: []
    , userName: ''
    , review: {}
}

export default new Vuex.Store({
    //컴포넌트 간에 공유할 data 속성
    state
    , getters : {
        getCounter: function(state) {
            return state.counter;
        }
        , getRegions: function(state) {
            return state.regions;
        }
    }
    , mutations: {
        //데이터 인자 명은 payload를 많이 쓴다.
        addCounter: function(state, payload) {
            state.counter += payload.value;
        }
        , subCounter: function(state) {
            return state.counter--;
        }
        , increment: function(state, payload) {
            state.counter = payload;
        }
        , setAccessToken(state, payload) {
            state.accessToken = payload;
        }
        , setRegions(state, payload) {
            state.regions = payload;
        }
        , setCategories(state, payload) {
            state.categories = payload
        }
        , setUserName(state, payload) {
            state.userName = payload;
        }
        , setRestaurants(state, payload) {
            state.restaurants = payload;
        }
        , setRestaurant(state, payload) {
            state.restaurant = payload
        }
        , setReview(state, payload) {
            state.review = payload
        }
        , SUCCESS() {
            
        }
    }
    , actions: {
        //상태가 변화는 걸 추적하기 위해 actions는 mutations의 메서드를 호출(commit) 하는 구조
        addCounter: function(context) {
            //commit의 대상인 addCounter는 mutations의 메서드를 의미
            return context.commit('addCounter');
        }
        , asyncIncrement: function(context, payload) {
            return setTimeout(function() {
                context.commit('increment', payload.by);
            }, payload.duration);
        } 
        , async joinUser({state}, {email, name, password, success}) {
            console.log(state);

            await post('/users', {email, name, password})
            
            success();
        }
        , setAccessToken({ commit }, { accessToken }) {
            commit('setAccessToken', accessToken);

            useAccessToken(accessToken);

            localStorage.setItem('accessToken', accessToken);
        }
        , clearAccessToken({ commit }) {
            commit('setAccessToken', '')
            commit('setUserName', '')

            useAccessToken('')

            localStorage.removeItem('accessToken')

            newAxios();
        }
        , async createSession({ commit }, { email, password, success }) {
            const { accessToken } = await loginPost("/session", {email, password});
            commit('setAccessToken', accessToken);
            
            useAccessToken(accessToken);
            
            localStorage.setItem('accessToken', accessToken);
            
            success();
        }
        , async loadRegions({ commit }) {
            const regions = await get('/regions');
            commit('setRegions', regions);
        }
        , async loadCategories({ commit }) {
            const categories = await get('/categories');
            commit('setCategories', categories);
        }
        , async loadUserName({ commit }) {
            const me = await get('/me')
            commit('setUserName', me);
        }
        , async loadRestaurants({commit}, {region, category}) {
            const restaurants = await get('/restaurants', {region, category})
            commit('setRestaurants', restaurants)
        }
        , async loadRestaurant({commit}, {restaurantId}) {
            const restaurant = await get('/restaurants/' + restaurantId)
            commit('setRestaurant', restaurant);
        }
        , async reservations({commit}, {restaurantId, date, time, partySize, success}) {
            await post('/restaurants/'+ restaurantId +'/reservations', 
                {
                    date,
                    time,
                    partySize
                }
            )
            
            commit('SUCCESS');

            success();
        }
        , resetReview({commit}) {
            commit('setReview', {
                description: '',
                score: ''
            })
        }
        , async createReview({state, dispatch}, restaurantId) {
            const { description, score } = state;
            console.log(description, score);
            await post(`/restaurants/${restaurantId}/reviews`, { description, score});
            dispatch('resetReview');
        }
    }
});