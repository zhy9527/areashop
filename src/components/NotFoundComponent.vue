<template>
    <div>
    	<div>丢的不是页面，丢的是人</div>
    	<div @click="back">返回</div>
    </div>

</template>

<script>  
export default {
	name: 'NotFoundComponent',
	methods: {
	    back: function () {
	        this.$router.go(-1);
	    }
	},
	title: () => '404',
}
</script>

<style lang="scss" scoped>
	div{
		text-align: center;
	}
</style>