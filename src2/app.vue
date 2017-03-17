<template>
	<router-view></router-view>
</template>
<script>
	export default {

	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		height: 100%;
	}
	
	body {
		background: #282828 no-repeat;
		background-size: cover;
		font-size: 14px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-overflow-scrolling: touch;
		-webkit-tap-highlight-color: transparent;
		color: #FFF;
		box-sizing: border-box;
		overflow: auto;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {}
	
	a {
		text-decoration: none;
	}
	
	.undis {
		display: none;
	}
</style>