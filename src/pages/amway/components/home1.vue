<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h2>计数器 {{ $store.state.home.count }}</h2>
    
    Clicked: {{ $store.state.home.count }} times, count is <span>{{ evenOrOdd }}</span>.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <v-footer></v-footer>
    <loading v-if='$store.state.home.isLoading'></loading>
  </div>
</template>

<script>
import footer from '../../../components/footer.vue'
import loading from '../../../components/loading.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'home',
    created: function () {
        this.$store.dispatch('getList')
    },
    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ]),
    components: {
        'v-footer': footer,
        loading
    }

}
</script>

<style scoped>
    span{
        background: #aaa
    }
</style>
