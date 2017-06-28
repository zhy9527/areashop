<template>
    <div class="loading" id="fruitday-loading">
        <div class="loading-content">
            <div class="animation"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loading',
}
</script>

<style lang='scss' scoped>
    @import '../assets/scss/mixin/mixins';

    .loading {
        display: block;
        z-index: 200;
        background: rgba(0, 0, 0, 0.1);
        .loading-content {
            border-radius: 1.00rem;
            @include abscenter(.48rem, .3rem);
            & > div {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }

            .animation:before,.animation:after{
                content: '';
                position: absolute;
                border-radius: 40%;
            }
            .animation:before{
                transform:rotate(-5deg);
                background: #65a032;
                animation: s-before linear .5s infinite alternate;
                -webkit-animation: s-before linear .5s infinite alternate; 
            }
            .animation:after{
                transform:rotate(5deg);
                margin-left: 20px;
                background: #ff8000;
                animation: s-after linear .5s infinite alternate;
                -webkit-animation: s-after linear .5s infinite alternate; 
            }
        }
    }
    @keyframes s-before
    {
        from {width:.04rem;height:.05rem; left: .10rem;top: .12rem; opacity: .3}
        to {width: .17rem;height: .20rem; left:.05rem;top:.06rem; opacity: 1}
    }

    @-webkit-keyframes s-before /* Safari 和 Chrome */
    {
        from {width:.04rem;height:.05rem; left: .10rem;top: .12rem; opacity: .3}
        to {width: .17rem;height: .20rem; left:.05rem;top:.06rem; opacity: 1}
    }

    @keyframes s-after
    {
        from {width: .17rem;height: .20rem; left:.05rem;top:.06rem;opacity: 1}
        to {width:.04rem;height:.05rem; left: .10rem;top:.12rem;opacity: .3}
    }

    @-webkit-keyframes s-after /* Safari 和 Chrome */
    {
        from {width: .17rem;height: .20rem; left:.05rem;top:.06rem;opacity: 1}
        to {width:.04rem;height:.05rem; left: .10rem;top:.12rem;opacity: .3}
    }

</style>