import Vue from "vue";
import Vuex from "vuex";
import { post, loginPost, useAccessToken, get } from "./http";

Vue.use(Vuex);

const state = {
    counter: 0
    , accessToken: ''
    , users: []
    , categories: []
    , regios: []
}

export default new Vuex.Store({
    //컴포넌트 간에 공유할 data 속성
    state
    , getters : {
        getCounter: function(state) {
            return state.counter;
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
        , async createSession({ commit }, { email, password, success }) {
            const { accessToken } = await loginPost("/session", {email, password});
            commit('setAccessToken', accessToken);
            
            useAccessToken(accessToken);
            
            localStorage.setItem('accessToken', accessToken);

            success();
        }
        // , async getCategories({ commit }, { region, category}) {
        //     await get('/categories', {}
        //     commit('setCategories', )
        // }
        , async getRegions({ commit }) {
            const { regions } = get('/regions');

            commit('setRegions', regions);
        }
    }
});