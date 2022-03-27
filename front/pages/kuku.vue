<template>
  <div>
    <NavigationBar
      page="KUKU"
      back="./menu"
    />
    <QuestionTiles
      multiplicand="4"
    />
    <!-- static内はルートにマッピングされる
    <v-img
      id="question1"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
    />
    <v-img
      id="question2"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
    />
    <v-img
      id="answer"
      src="/test/test.jpg"
      max-height="120px"
      max-width="120px"
    />
    <div id="cross">
			<div id="cross-content" />
		</div>
		<div id="equal">
			<div id="equal-content" />
		</div> -->
    <!-- <v-container
      id="tiles"
    >
      <v-row>
        <v-col
          class="pl-6 pr-3"
        >
          <OptionTiles />
        </v-col>
        <v-col
          class="pl-3 pr-6"
        >
          <OptionTiles />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="pl-6 pr-3"
        >
          <OptionTiles />
        </v-col>
        <v-col
          class="pl-3 pr-6"
        >
          <OptionTiles />
        </v-col>
      </v-row>
    </v-container> -->
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