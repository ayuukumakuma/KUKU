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
    <div id="option-tiles">
      <OptionTiles
        :multiplicand="String(multiplicand_num)"
        :multiplying="String(multiplying_num)"
        :answer="String(multiplicand_num * multiplying_num)"
      />
      <OptionTiles
        :multiplicand="String(multiplicand_num)"
        :multiplying="String(multiplying_num)"
      />
      <OptionTiles
        :multiplicand="String(multiplicand_num)"
        :multiplying="String(multiplying_num)"
      />
      <OptionTiles
        :multiplicand="String(multiplicand_num)"
        :multiplying="String(multiplying_num)"
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
  mounted() {
    this.SettingQuestion()
  },
  methods: {
    SettingQuestion() {
      this.multiplicand_num = Math.floor(Math.random() * 9) + 1
      this.multiplying_num = Math.floor(Math.random() * 9) + 1
    },
    NonnegativeRandomNumber() {
      const n = 10
      let arr = Array.from(
        new Set(
          Array(n)
            .fill()
            .map((x) => ~~(Math.random() * 10))
        )
      )
      const m = n - arr.length
      if (m !== 0) {
        for (let m; arr.length < n; ) {
          arr = Array.from(
            new Set([
              ...arr,
              ...Array(m)
                .fill()
                .map((x) => ~~Math.random() * 10),
            ])
          )
        }
      }
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
  left: 10%;
  top: 40%;
}
#option-tiles {
  bottom: 16px;
  height: 45%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
</style>
