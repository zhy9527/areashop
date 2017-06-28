<template>
  <div class="hello">
    <v-header :store="$store.state.home"></v-header>
    <swiper :store="$store.state.home"></swiper>
    <h1>{{ $store.state.isFruitdayAppBrowser }}</h1>
    <h2>计数器 {{ $store.state.home.count }}</h2>
    
    Clicked: {{ $store.state.home.count }} times, count is <span>{{ evenOrOdd }}</span>.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>{{$store.getters.connectId}}</div>
    <v-footer></v-footer>
    <loading v-if='$store.state.home.isLoading'></loading>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import footer from '../../../components/footer.vue'
import loading from '../../../components/loading.vue'
import swiper from '../../../components/swiper.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'home',
    mounted: function () {
        // console.log(Config)
        // this.$store.dispatch('getAmwayList');
    },
    computed: mapGetters([
        'evenOrOdd',
        'connectId'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ]),
    components: {
        'v-header': header,
        'v-footer': footer,
        loading,
        swiper
    }

}
</script>

<style scoped>
    span{
        background: #aaa
    }
</style>
