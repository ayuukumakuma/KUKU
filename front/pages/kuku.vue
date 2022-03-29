<template>
  <div>
    <NavigationBar
      page="KUKU"
      back="./menu"
    />
    <QuestionTiles
      multiplicand="6"
      multiplying="9"
    />
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
  bottom: 24px;
}

#question1 {
  position: absolute;
  top: 22%;
  left: 32px;
  transform: translateY(-50%);
}

#question2 {
  position: absolute;
  top: 22%;
  right: 32px;
  transform: translateY(-50%);
}

#answer {
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%);
}

#cross {
	position: absolute;
	top: 22%;
	left: 50%;
	z-index: 0;
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

#equal {
	position: absolute;
	top: 30%;
	left: 50%;
	z-index: 0;
  transform: rotate(90deg);
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