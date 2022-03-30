<template>
  <div>
    <NavigationBar page="KUKU" back="./menu" />

    <QuestionTiles
      :multiplicand="String(multiplicand_num)"
      :multiplying="String(multiplying_num)"
    />
    <div id="test">
      <v-btn x-large style="font-size: 32px" @click="SettingQuestion">
        乱数
      </v-btn>
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
  methods: {
    SettingQuestion() {
      this.multiplicand_num = Math.floor(Math.random() * 9) + 1
      this.multiplying_num = Math.floor(Math.random() * 9) + 1
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  position: relative;
}
#test {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 20%;
}
</style>
