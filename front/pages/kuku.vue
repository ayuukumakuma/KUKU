<template>
  <div id="kuku">
      <QuestionTiles
      :multiplicand="String(multiplicandNum)"
      :multiplying="String(multiplyingNum)"
      :correct="isCorrect"
      :answer_num="String(multiplicandNum * multiplyingNum)"
    />
    <div id="progress">
      <v-progress-circular
        :value="progressNum * 10"
        size="70"
        rotate="270"
        width="35"
        color="secondary"
      ></v-progress-circular>
    </div>
    <div v-show="isCorrect" id="answer">
      <v-img src="/svg/correct.svg" />
    </div>
    <div v-show="isWrong" id="answer">
      <v-img src="/svg/wrong.svg" />
    </div>
    <div id="option-tiles">
      <OptionTiles
        id="tiles"
        :multiplicand="String(multiplicandNum)"
        :multiplying="String(multiplyingNum)"
        :answer="String(multiplicandNum * multiplyingNum)"
        :style="`order: ${arr[0]}`"
        :disabled="disabled"
        @click="correct"
      />
      <OptionTiles
        id="tiles"
        :multiplicand="String(dummyMultiplicand1)"
        :multiplying="String(dummyMultiplying1)"
        :answer="String(dummyMultiplicand1 * dummyMultiplying1)"
        :style="`order: ${arr[1]}`"
        :disabled="disabled"
        @click="wrong"
      />
      <OptionTiles
        id="tiles"
        :multiplicand="String(dummyMultiplicand2)"
        :multiplying="String(dummyMultiplying2)"
        :answer="String(dummyMultiplicand2 * dummyMultiplying2)"
        :style="`order: ${arr[2]}`"
        :disabled="disabled"
        @click="wrong"
      />
      <OptionTiles
        id="tiles"
        :multiplicand="String(dummyMultiplicand3)"
        :multiplying="String(dummyMultiplying3)"
        :answer="String(dummyMultiplicand3 * dummyMultiplying3)"
        :style="`order: ${arr[3]}`"
        :disabled="disabled"
        @click="wrong"
      />
    </div>
    <div v-if="showPopup" id="bg-cover"></div>
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
      progressNum: 1,
      disabled: false,
      showPopup: false,
    }
  },
  mounted() {
    this.FirstQuestion()
    this.reset()
  },
  methods: {
    FirstQuestion(){
      this.SettingQuestion()
      this.DummyAnswer()
      this.NonnegativeRandomNumber()
      this.disabled = false
      this.isCorrect = false
      this.isWrong = false
    },
    NextQuestion(){
      this.FirstQuestion()
      this.showPopup = false
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
      this.progressNum = 1
    },
    correct() {
      if (this.progressNum === 10) {
        setTimeout(this.toResult, 1000)
      }
      else {
        this.progressNum += 1
      }
      this.$store.dispatch('score/updateScore')
      this.isCorrect = true
      this.disabled = true
      this.showPopup = true
      setTimeout(this.NextQuestion, 1000)
    },
    wrong() {
      if (this.progressNum === 10) {
        setTimeout(this.toResult, 1000)
      }
      else this.progressNum += 1
      this.isWrong = true
      this.disabled = true
      this.showPopup = true
      setTimeout(this.NextQuestion, 1000)
    },
    toResult() {
      this.$router.push('/result')
      this.reset()
    }
  },
}
</script>

<style lang="scss" scoped>
#kuku {
  overflow: hidden;
}
#answer {
  position: fixed;
  width: 240px;
  height: 240px;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
}

#progress {
  position: fixed;
  top: 37%;
  right: 16px;
}

#option-tiles {
  bottom: 16px;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  // margin-bottom: constant(safe-area-inset-bottom);
  // margin-bottom: env(safe-area-inset-bottom);
  #tiles {
    margin: 8px auto;
  }
}

#bg-cover {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}
</style>
