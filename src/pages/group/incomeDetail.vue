<template>
    <section class="amway-income-detail">
        <v-header :store="{ title:'收益明细'}"></v-header>
        <ul class="tab">
            <li class="active">可提取</li>
            <li class="isLogin">待结算</li>
            <li class="isLogin">已提取</li>
        </ul>
        <div class="tab-content">
            <div class="content active" id="income-detail"></div>
        </div>
    </section>
</template>

<script>
import header from '../../components/header.vue'
import { mapState } from 'vuex'
export default {
    name: 'incomeDetail',
    computed: {
        ...mapState({
            amway: state => state.amway,
        })
        
    },
    components: {
        'v-header': header
    }
}
</script>
