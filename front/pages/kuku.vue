<template>
  <div>
    <NavigationBar
      page="KUKU"
      back="./menu"
    />
    <!-- static内はルートにマッピングされる -->
    <v-img
      id="question1"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
      class="mt-4"
    />
    <v-img
      id="question2"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
      class="mt-4"
    />
    <v-img
      id="answer"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
      class="mb-4"
    />
    <div id="cross">
			<div id="cross-content" />
		</div>
		<div id="equal">
			<div id="equal-content" />
		</div>
    <div
      id="tiles"
      class="mx-6"
    >
      <OptionTiles />
      <OptionTiles />
      <OptionTiles />
      <OptionTiles />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body {
  position: relative;
}

#tiles {
  position: absolute;
  bottom: 8px;
  height: 45vh;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
}

#question1 {
  position: absolute;
  top: 80px;
  left: 8%;
}

#question2 {
  position: absolute;
  top: 80px;
  right: 8%;
}

#answer {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 290px;
}

#cross {
	position: absolute;
	left: 50%;
	z-index: 0;
  margin-top: 150px;
}

#equal {
  position: absolute;
  left: 50%;
  z-index: 0;
  transform: rotate(90deg);
  margin-top: 220px;
}

#cross-content {
	position: absolute;
	background: var(--v-sentence-base);
	height: 8px;
	width: 56px;
  left: -28px;
	transform: rotate(-45deg);
	&::before {
		background: var(--v-sentence-base);
		display: block;
		content: "";
		height: 8px;
		width: 56px;
		transform: rotate(90deg);
	}
}


#equal-content {
	position: absolute;
	background: var(--v-sentence-base);
	height: 8px;
	width: 56px;
  top: -19px;
	&::before {
		position: absolute;
		background: var(--v-sentence-base);
		display: block;
		content: "";
		height: 8px;
		width: 56px;
		top: 30px;
	}
}
</style>