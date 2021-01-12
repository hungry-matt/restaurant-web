<template>
    <div>
        <hr>
        Child counter : {{ getCounter }} <br>
        <button>+</button>
        <button>-</button>

        <br>

        <span>{{ test }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // props: ["num", "test"]
    props: ["test"]
    , computed: {
        ...mapGetters(['getCounter'])
    }
}
</script>