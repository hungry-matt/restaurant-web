<template>
    <div>
        <!-- <h1>Welcome to home!</h1>
        <h2>{{title}}</h2>
        <input type="text" v-model="input1" />
        <button type="button" @click="getDate">Get</button>
        <button type="button" @click="setDate">Set</button>
        <span>{{input1}}</span>

        <select class="form-control" v-model="number" @change="change">
            <option :key="idx" :value="data.v" v-for="(data, idx) in option">{{data.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="idx" v-for="(data, idx) in option">
                <td>{{data.v}}</td>
                <td>{{data.t}}</td>
            </tr>
        </table> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            title : "test"
            , input1 : "1111"
            , option : [
                {v : "1", t : "one"}
                , {v : "2", t : "two"}
                , {v : "3", t : "three"}
            ]
            , number : "2"
            , tableShow : false
        }
    }
    , watch : {
        input1() {
            console.log(this.input1);
        }
    }
    , methods : {
        getDate() {
            alert(this.input1);
        }
        , setDate() {
            this.input1 = "3333";
        }
        , change() {
            console.log(this.number);

            if (this.number === "3") this.tableShow = true;
            else this.tableShow = false;
        }
    }
    , beforeCreate() {
        //beforeCreate, created 사이클에서 데이터를 먼저 가져와
        //mounted 사이클에서 한번에 출력
        console.log("beforeCreate");
    }
    , created() {
        console.log("created")
    }
    , beforeMount() {
        console.log("beforeMount");
    }
    , mounted() {
        console.log("mounted");
    }
    , beforeUpdate() {
        console.log("beforeUpdate");
    }
    , updated() {
        console.log("updated");
    }
}
</script>