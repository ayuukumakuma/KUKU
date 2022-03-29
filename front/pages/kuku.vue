<template>
  <div>
    <NavigationBar
      page="KUKU"
      back="./menu"
    />
    <QuestionTiles
      :multiplicand="String(multiplicand_num)"
      :multiplying="String(multiplying_num)"
    />
    <div id="test">
      テスト
      <v-slider
        v-model="multiplicand_num"
        label="かけられる数"
        max="9"
        min="1"
      />
      <v-slider
        v-model="multiplying_num"
        label="かける数"
        max="9"
        min="1"
      />
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    multiplicand_num: 1,
    multiplying_num: 1,
  }
},
}
</script>

<style lang="scss" scoped>
body {
  position: relative;
}
#test {
  position: absolute;
  bottom: 0;
  width: 100vw;
}
</style>