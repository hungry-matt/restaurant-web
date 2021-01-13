<template>
    <div>
        <!-- Template의 표현식은 최대한 간소화 해야 한다. -->
        <!-- Parent counter : {{ $store.state.counter }} <br> -->
        Parent counter : {{ counter }} <br>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <button @click="setTest">test</button>
        <button @click="asyncIncrement({by: 50, duration: 100})">Increment</button>
        <br>
        <button @click="loadUsers">get</button>
        <!-- <child v-bind:num="counter" v-bind:test="test"></child> -->
        <!-- <child v-bind:test="test"></child> -->
    </div>
</template>

<script>
// import Child from "../views/Child";
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    name: "Parent"
    // , components: {
    //     child: Child
    // }
    // , computed: mapGetters({
    //     parentCounter: 'getCounter'
    // })
    , data() {
        return {
            // counter: 0
            test: 10
        }
    }
    , computed : {
        ...mapState(['counter'])
    }
    , methods: {
        ...mapMutations(['subCounter'])
        , ...mapActions(['asyncIncrement', 'loadUsers'])
        , addCounter() {
            this.$store.commit('addCounter', {value: 10});
        }
        , setTest() {
            this.test += this.$store.state.counter;
        }
    }
}
</script>