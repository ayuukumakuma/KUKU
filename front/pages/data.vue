<template>
  <v-container id="data" class="px-6">
    <v-row>
      <v-col>
        <v-card id="today-accuracy" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 今日の正解率 </v-card-title>
          <p>{{ isNaN(todayAccuracyAvg) ? 0 : todayAccuracyAvg }}%</p>
        </v-card>
      </v-col>
      <v-col>
        <v-card id="today-play" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 今日のプレイ </v-card-title>
          <p>{{ todayPlay }}回</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card id="today-score" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 今日のスコア </v-card-title>
          <div v-if="isTodayPlay" class="pa-3">
            <v-sparkline
              :value="todayScores"
              auto-draw
              smooth
              color="secondary"
            />
          </div>
          <p v-else id="no-play">
            今日はまだプレイしていません！<br />KUKUをプレイしましょう！
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="divider" />
    <v-row>
      <v-col class="pt-0">
        <v-card id="today-accuracy" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 通算正解率 </v-card-title>
          <p>{{ isNaN(accuracyAvg) ? 0 : accuracyAvg }}%</p>
        </v-card>
      </v-col>
      <v-col class="pt-0">
        <v-card id="today-play" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 通算プレイ </v-card-title>
          <p>{{ sumPlay }}回</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pb-6">
        <v-card id="today-score" class="rounded-lg content" elevation="0">
          <v-card-title class="px-2"> 通算スコア </v-card-title>
          <div v-if="isTodayPlay" class="pa-3">
            <v-sparkline
              :value="sumScores"
              auto-draw
              smooth
              color="secondary"
            />
          </div>
          <p v-else id="no-play">
            まだプレイしていません！<br />KUKUをプレイしましょう！
          </p>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div>
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
    </div> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todayScores: [1,4,6,2,8,7,4],
      sumScores: [8,1,4,7,9,4,2],
      isTodayPlay: false,
    }
  },
  computed: {
    getToday() {
      const dt = new Date()
      const YYYY = dt.getFullYear()
      const MM = ('0' + (dt.getMonth() + 1)).slice(-2)
      const DD = ('0' + dt.getDate()).slice(-2)
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
    },
  },

  mounted() {
    this.getRecord()
    this.todayScore()
    this.sumScore()
    this.checkTodayPlay()
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
    },
    checkTodayPlay() {
      if (this.todayPlay !== 0) {
        this.isTodayPlay = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#data {
  margin-top: 88px;
}
#today-accuracy {
  text-align: center;
  p {
    font-size: 3rem;
    margin: 0;
  }
}
#today-play {
  text-align: center;
  p {
    font-size: 3rem;
    margin: 0;
  }
}
#today-score {
  text-align: center;
  p {
    font-size: 3rem;
    margin: 0;
  }
  #no-play {
    font-size: 1.1rem;
    padding: 0 8px 16px 8px;
  }
}
#divider {
  border: 0.5px var(--v-cLight-darken2) solid;
  margin: 16px 0;
}
</style>
