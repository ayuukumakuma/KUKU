<template>
  <div>
    <NavigationBar page="KUKU" back="./menu" />

    <QuestionTiles
      :multiplicand="String(multiplicandNum)"
      :multiplying="String(multiplyingNum)"
      :correct="isCorrect"
      :wrong="isWrong"
      :answer_num="String(multiplicandNum * multiplyingNum)"
    />
    <!-- ここからテスト -->
    <p style="position: absolute; top: 35%">これはテストです。現在setTimeoutを使用し、今後、非同期処理にする予定。
    </p>
    <div id="test">
      <v-btn
        style="font-size: 20px"
        small
        height="40px"
        @click="
          NextQuestion(), reset()
        "
      >
        リセット
      </v-btn>
      <div v-if="isWrong">×</div>
    </div>
    <!-- ここまでテスト -->
    <div id="progress">
      <v-progress-circular
        :value="progressNum * 10"
        size="72"
        rotate="275"
        width="36"
        color="primary"
      ></v-progress-circular>
      {{ correctNum }}
    </div>
    <div id="option-tiles">
      <OptionTiles
        :multiplicand="String(multiplicandNum)"
        :multiplying="String(multiplyingNum)"
        :answer="String(multiplicandNum * multiplyingNum)"
        :style="`order: ${arr[0]}`"
        :disabled="disabled"
        @click="correct"
      />
      <OptionTiles
        :multiplicand="String(dummyMultiplicand1)"
        :multiplying="String(dummyMultiplying1)"
        :answer="String(dummyMultiplicand1 * dummyMultiplying1)"
        :style="`order: ${arr[1]}`"
        :disabled="disabled"
        @click="wrong"
      />
      <OptionTiles
        :multiplicand="String(dummyMultiplicand2)"
        :multiplying="String(dummyMultiplying2)"
        :answer="String(dummyMultiplicand2 * dummyMultiplying2)"
        :style="`order: ${arr[2]}`"
        :disabled="disabled"
        @click="wrong"
      />
      <OptionTiles
        :multiplicand="String(dummyMultiplicand3)"
        :multiplying="String(dummyMultiplying3)"
        :answer="String(dummyMultiplicand3 * dummyMultiplying3)"
        :style="`order: ${arr[3]}`"
        :disabled="disabled"
        @click="wrong"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multiplicandNum: 1,
      multiplyingNum: 1,
      dummyMultiplicand1: 1,
      dummyMultiplying1: 1,
      dummyMultiplicand2: 1,
      dummyMultiplying2: 1,
      dummyMultiplicand3: 1,
      dummyMultiplying3: 1,
      arr: [1, 2, 3, 4],
      isCorrect: false,
      isWrong: false,
      progressNum: 0,
      correctNum: 0,
      disabled: false,
    }
  },
  mounted() {
    this.NextQuestion()
  },
  methods: {
    NextQuestion(){
      this.SettingQuestion()
      this.DummyAnswer()
      this.NonnegativeRandomNumber()
      this.disabled = false
    },
    SettingQuestion() {
      this.multiplicandNum = Math.floor(Math.random() * 9) + 1
      this.multiplyingNum = Math.floor(Math.random() * 9) + 1
    },
    DummyAnswer() {
      do {
        this.dummyMultiplicand1 = Math.floor(Math.random() * 9) + 1
        this.dummyMultiplying1 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicandNum * this.multiplyingNum ===
        this.dummyMultiplicand1 * this.dummyMultiplying1
      )
      do {
        this.dummyMultiplicand2 = Math.floor(Math.random() * 9) + 1
        this.dummyMultiplying2 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicandNum * this.multiplyingNum ===
        this.dummyMultiplicand2 * this.dummyMultiplying2
      )
      do {
        this.dummyMultiplicand3 = Math.floor(Math.random() * 9) + 1
        this.dummyMultiplying3 = Math.floor(Math.random() * 9) + 1
      } while (
        this.multiplicandNum * this.multiplyingNum ===
        this.dummyMultiplicand3 * this.dummyMultiplying3
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
    reset() {
      this.isCorrect = false
      this.isWrong = false
      this.progressNum = 0
      this.correctNum = 0
    },
    correct() {
      if (this.progressNum === 10) {
        this.reset()
      }
      this.isCorrect = true
      this.isWrong = false
      this.progressNum += 1
      this.correctNum += 1
      this.disabled = true
      setTimeout(this.NextQuestion, 2000)
    },
    wrong() {
      this.isCorrect = false
      this.isWrong = true
      this.progressNum += 1
      this.disabled = true
      setTimeout(this.NextQuestion, 2000)
    }
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Graduate';
  src: url('../assets/font/Graduate-Regular.ttf');
}
body {
  position: relative;
}
#test {
  position: absolute;
  left: 8px;
  top: 44%;
}
#progress {
  font-family: 'Graduate';
  font-size: 32px;
  position: absolute;
  top: 40%;
  right: 16px;
  height: 80px;
  width: 80px;
}
#correct-num {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
#progress-bar {
  content: '';
  width: 80px;
  height: 3px;
  background: var(--v-sentence-base);
  font-size: 56px;
  position: absolute;
  left: 35%;
  top: 15%;
  transform: rotate(-45deg) translate(-50%);
}
#question-num {
  position: absolute;
  bottom: -4px;
  right: 0;
  margin: 0;
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
