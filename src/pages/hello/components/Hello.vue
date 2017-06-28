<template>
  <div class="hello">
    <h1>{{ $store.state.hello.count }}</h1>
    <h2>Essential Links</h2>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from '../../../components/footer.vue'
export default {
    name: 'hello',
    created: function () {
        // console.log(Config)
        // this.$store.dispatch('getGoodsList');
    },
    components: {
        'v-footer': footer,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
