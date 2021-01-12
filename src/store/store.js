import Vue from "vue";
import Vuex from "vuex";
import { get } from "./http";

Vue.use(Vuex);

export const store = new Vuex.Store({
    //컴포넌트 간에 공유할 data 속성
    state: {
        counter: 0
        , users: []
    }
    , getters: {
        getCounter: function(state) {
            return state.counter;
        }
        , getUsers: function(state) {
            return state.users;
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
        , setUsers(state, payload) {
            state.users = payload;
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
        , async loadUsers({ commit }) {
            const users = await get("/users");
            commit('setUsers', users);
        }
    }
});