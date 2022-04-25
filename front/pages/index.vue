<template>
	<div id="index">
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
			class="rounded-lg sentence--text"
			color="primary"
			depressed
			@click="$router.push('./menu')"
		>
			はじめる
		</v-btn>
		<v-btn
			id="login-btn"
			class="rounded-lg"
			color="content"
			height="48px"
			depressed
			@click="$router.push('./login')"
		>
			保護者・教員の方へ
		</v-btn>
	</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang='scss' scoped>
#index {
	padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
#title {
	font-size: 72px;
	position: fixed;
	top: 30%;
	left: 50%;
	transform: translate(-50%);
}

#start-btn {
	font-size: 40px;
	position: fixed;
	left: 50%;
	bottom: 20%;
	transform: translate(-50%);
	height: 100px;
	width: 240px;
}

#cross {
	position: fixed;
	top: 55%;
	right: 45%;
	z-index: 0;
	transform: rotate(-20deg);
}

#cross-content {
	position: fixed;
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
	position: fixed;
	top: 15%;
	left: 10%;
	z-index: 0;
	transform: rotate(-40deg);
}

#equal-content {
	position: fixed;
	background: var(--v-content-base);
	height: 16px;
	width: 150px;
	&::after {
		position: fixed;
		background: var(--v-content-base);
		display: block;
		content: "";
		height: 16px;
		width: 150px;
		top: 70px;
	}
}

#login-btn {
	position: fixed;
	bottom: 16px;
	left: 16px;
	font-size: 20px;
}
</style>
