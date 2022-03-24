<template>
	<div>
		<div
			id="title"
			class="sentence--text"
		>KUKU</div>
		<div id="cross">
			<div id="cross-content" />
		</div>
		<div id="equal">
			<div id="equal-content" />
		</div>
		<v-btn
			id="start-btn"
			class="rounded-xl sentence--text"
			color="primary"
			@click="$router.push('./menu')"
		>
			はじめる
		</v-btn>
	</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang='scss' scoped>

body {
	position: relative;
}

#title {
	font-size: 72px;
	position: absolute;
	top: 30%;
	left: 50%;
	z-index: 1;
	transform: translate(-50%);
}

#start-btn {
	font-size: 40px;
	position: absolute;
	left: 50%;
	bottom: 20%;
	transform: translate(-50%);
	height: 100px;
	width: 240px;
}

#cross {
	position: absolute;
	top: 55%;
	left: 45%;
	z-index: 0;
	transform: rotate(-20deg);
}

#cross-content {
	position: absolute;
	background: var(--v-content-base);
	height: 16px;
	width: 170px;
	transform: rotate(45deg);
	&::after {
		background: var(--v-content-base);
		display: block;
		content: "";
		height: 16px;
		width: 170px;
		transform: rotate(-90deg);
	}
}

#equal {
	position: absolute;
	top: 15%;
	left: 10%;
	z-index: 0;
	transform: rotate(-40deg);
}

#equal-content {
	position: absolute;
	background: var(--v-content-base);
	height: 16px;
	width: 150px;
	&::after {
		position: absolute;
		background: var(--v-content-base);
		display: block;
		content: "";
		height: 16px;
		width: 150px;
		top: 70px;
	}
}

</style>
