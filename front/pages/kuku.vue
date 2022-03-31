<template>
  <div>
    <NavigationBar page="KUKU" back="./menu" />

    <QuestionTiles
      :multiplicand="String(multiplicand_num)"
      :multiplying="String(multiplying_num)"
      :correct="isCorrect"
      :answer_num="String(multiplicand_num * multiplying_num)"
    />
    <!-- ここからテスト -->
    <p style="position: absolute; top: 35%;">これはテストです</p>
    <div id="test">
      <v-btn
        style="font-size: 32px"
        @click="SettingQuestion(), DummyAnswer(), NonnegativeRandomNumber(), isCorrect = false"
      >
        ○
      </v-btn>
    </div>
    <!-- ここまでテスト -->
    <div id="option-tiles">
      <OptionTiles
        :multiplicand="String(multiplicand_num)"
        :multiplying="String(multiplying_num)"
        :answer="String(multiplicand_num * multiplying_num)"
        :style="`order: ${arr[0]}`"
        @click.native="isCorrect = true"
      />
      <OptionTiles
        :multiplicand="String(dummy_multiplicand_1)"
        :multiplying="String(dummy_multiplying_1)"
        :answer="String(dummy_multiplicand_1 * dummy_multiplying_1)"
        :style="`order: ${arr[1]}`"
      />
      <OptionTiles
        :multiplicand="String(dummy_multiplicand_2)"
        :multiplying="String(dummy_multiplying_2)"
        :answer="String(dummy_multiplicand_2 * dummy_multiplying_2)"
        :style="`order: ${arr[2]}`"
      />
      <OptionTiles
        :multiplicand="String(dummy_multiplicand_3)"
        :multiplying="String(dummy_multiplying_3)"
        :answer="String(dummy_multiplicand_3 * dummy_multiplying_3)"
        :style="`order: ${arr[3]}`"
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
      dummy_multiplicand_1: 1,
      dummy_multiplying_1: 1,
      dummy_multiplicand_2: 1,
      dummy_multiplying_2: 1,
      dummy_multiplicand_3: 1,
      dummy_multiplying_3: 1,
      arr: [1, 2, 3, 4],
      isCorrect: false,
    }
  },
  mounted() {
    this.SettingQuestion()
    this.DummyAnswer()
    this.NonnegativeRandomNumber()
  },
  methods: {
    SettingQuestion() {
      this.multiplicand_num = Math.floor(Math.random() * 9) + 1
      this.multiplying_num = Math.floor(Math.random() * 9) + 1
    },
    DummyAnswer() {
      do {
        this.dummy_multiplicand_1 = Math.floor(Math.random() * 9) + 1
        this.dummy_multiplying_1 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicand_num * this.multiplying_num ===
        this.dummy_multiplicand_1 * this.dummy_multiplying_1
      )
      do {
        this.dummy_multiplicand_2 = Math.floor(Math.random() * 9) + 1
        this.dummy_multiplying_2 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicand_num * this.multiplying_num ===
        this.dummy_multiplicand_2 * this.dummy_multiplying_2
      )
      do {
        this.dummy_multiplicand_3 = Math.floor(Math.random() * 9) + 1
        this.dummy_multiplying_3 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicand_num * this.multiplying_num ===
        this.dummy_multiplicand_3 * this.dummy_multiplying_3
      )
    },
    NonnegativeRandomNumber() {
      let n = this.arr.length
      let temp, i
      while (n) {
        i = Math.floor(Math.random() * n--)
        temp = this.arr[n]
        this.arr[n] = this.arr[i]
        this.arr[i] = temp
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
  left: 8px;
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
