<template>
    <div class="cart">
        <swiper :options="swiperOption">
            <swiper-slide>
                1
            </swiper-slide>
            <swiper-slide class="menu swiper-slide-next">
                1
            </swiper-slide>
        </swiper>    
        <v-footer></v-footer>
    </div>
</template>

<!-- <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(-320px, 0px, 0px); transition-duration: 0ms;">
            <div class="swiper-slide menu swiper-slide-prev">Menu slide</div>
            <div class="swiper-slide content swiper-slide-active">
                
                Content slide
            </div>
        </div>
    </div> -->
<!-- 
        var toggleMenu = function(){
            if (swiper.previousIndex == 0)
                swiper.slidePrev()
        }
        , menuButton = document.getElementsByClassName('menu-button')[0]
        , swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto'
            , initialSlide: 1
            , resistanceRatio: .00000000000001
            , onSlideChangeStart: function(slider) {
                if (slider.activeIndex == 0) {
                    menuButton.classList.add('cross')
                    menuButton.removeEventListener('click', toggleMenu, false)
                } else
                    menuButton.classList.remove('cross')
            }
            , onSlideChangeEnd: function(slider) {
                if (slider.activeIndex == 0)
                    menuButton.removeEventListener('click', toggleMenu, false)
                else
                    menuButton.addEventListener('click', toggleMenu, false)
            }
            , slideToClickedSlide: true
        }) -->
    


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import footer from '../../components/footer.vue'

export default {
    name: 'class',
    data() {
        return {
            // toggleMenu: function(){
            //     if (swiper.previousIndex == 0)
            //         swiper.slidePrev()
            // },
            swiperOption: {
                slidesPerView: 'auto',
                initialSlide: 0,
                resistanceRatio: .91,
                slideToClickedSlide: true,
                onSlideChangeStart: function(slider) {
                    // if (slider.activeIndex == 0) {
                    //     // menuButton.classList.add('cross')
                    //     // menuButton.removeEventListener('click', toggleMenu, false)
                    // } else
                    //     // menuButton.classList.remove('cross')
                },
                onSlideChangeEnd: function(slider) {
                    // if (slider.activeIndex == 0)
                    //     // menuButton.removeEventListener('click', toggleMenu, false)
                    // else
                        // menuButton.addEventListener('click', toggleMenu, false)
                }
            }
        }
    },
    beforeCreate: function () {
        // console.log(Config)
        // this.$store.dispatch('getHomeAds');
    },
    computed: {
        ...mapState({
            home: state => state.home,
        })
    },
    methods: {
        tab: function(index){
            console.log(this.$store.state)
            this.$store.commit('CURRENT_CLASS_TAB', index)
        }
    },
    components: {
        'v-footer': footer,
        swiper,
        swiperSlide
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .class{}
    .swiper-slide{
        height: 60px;
        background: #f00;
    }
    .menu {
        width: 100px;
        background-color: #2C8DFB;
        color: #fff;
    }
</style>
