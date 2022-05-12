<template>
  <div style="margin-top: 88px">
    通算正解率
    {{ accuracyAvg }}%
    <br />
    通算プレイ回数
    {{ sumPlay }}回
    <br />
    通算スコア
    {{ sumScores }}
    <br />
    今日の正解率
    {{ todayAccuracyAvg }}%
    <br />
    今日のスコア
    {{ todayScores }}
    <br />
    今日のプレイ回数
    {{ todayPlay }}回
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayScores: [],
      sumScores: [],
    }
  },
  computed: {
    getToday() {
      const dt = new Date()
      const YYYY = dt.getFullYear()
      const MM = ('0' + (dt.getMonth() + 1)).slice(-2)
      const DD = ('0' + (dt.getDate())).slice(-2)
      return YYYY + '-' + MM + '-' + DD
    },
    getScore() {
      return this.$store.getters['showScore/getScore']
    },
    accuracyAvg() {
      const array = this.$store.getters['showScore/getScore']
      let sumAccuracy = 0
      for (let i = 0; i < array.length; i++) {
        sumAccuracy += array[i].accuracy * 100
      }
      return Math.trunc(sumAccuracy / array.length)
    },
    sumPlay() {
      const array = this.$store.getters['showScore/getScore']
      return array.length
    },
    todayPlay() {
      return this.todayScores.length
    },
    todayAccuracyAvg() {
      const array = this.$store.getters['showScore/getScore']
      let todayAccuracy = 0
      let todayLength = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i].created_at.substr(0, 10) === this.getToday) {
          todayLength += 1
          todayAccuracy += array[i].accuracy * 100
        }
      }
      return Math.trunc(todayAccuracy / todayLength)
    }
  },

  mounted() {
    this.getRecord()
    this.todayScore()
    this.sumScore()
  },

  methods: {
    getRecord() {
      this.$store.dispatch('showScore/getScoreFromApi')
    },
    todayScore() {
      const array = this.$store.getters['showScore/getScore']
      for (let i = 0; i < array.length; i++) {
        if (array[i].created_at.substr(0, 10) === this.getToday) {
          this.todayScores.push(array[i].number_of_correct_answer)
        }
      }
    },
    sumScore() {
      const array = this.$store.getters['showScore/getScore']
      for (let i = 0; i < array.length; i++) {
        this.sumScores.push(array[i].number_of_correct_answer)
      }

    }

  }
}
</script>
