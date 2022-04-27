<template>
  <div>
    <div id="title" class="sentence--text">KUKU</div>
    <!-- <div id="cross">
			<div id="cross-content" />
		</div>
		<div id="equal">
			<div id="equal-content" />
		</div> -->
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
      depressed
      @click="$router.push('./login')"
    >
      保護者・教員の方へ
    </v-btn>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
#title {
  font-size: 5.5rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
}

#start-btn {
  font-size: 2.5rem;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%);
  height: 100px;
  width: 240px;
}

#login-btn {
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 1.2rem;
  height: 2.5rem;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}

// #cross {
// 	position: fixed;
// 	top: 55%;
// 	right: 45%;
// 	z-index: 0;
// 	transform: rotate(-20deg);
// }

// #cross-content {
// 	position: fixed;
// 	background: var(--v-content-base);
// 	height: 16px;
// 	width: 170px;
// 	transform: rotate(45deg);
// 	&::after {
// 		background: var(--v-content-base);
// 		display: block;
// 		content: "";
// 		height: 16px;
// 		width: 170px;
// 		transform: rotate(-90deg);
// 	}
// }

// #equal {
// 	position: fixed;
// 	top: 15%;
// 	left: 10%;
// 	z-index: 0;
// 	transform: rotate(-40deg);
// }

// #equal-content {
// 	position: fixed;
// 	background: var(--v-content-base);
// 	height: 16px;
// 	width: 150px;
// 	&::after {
// 		position: fixed;
// 		background: var(--v-content-base);
// 		display: block;
// 		content: "";
// 		height: 16px;
// 		width: 150px;
// 		top: 70px;
// 	}
// }
</style>
