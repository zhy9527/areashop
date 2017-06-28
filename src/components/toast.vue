<template>
    <div class="toast" id="fruitday-toast"><span>xxx</span></div>
</template>

<script>
export default {
  name: 'footer',
  data: function() {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
    .toast {
        display: none;
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        bottom: 30%;
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    .toast span {
        display: inline-block;
        padding: 5px 14px;
        color: #fff;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.6);
    }
</style>