<template>
  <div>
    {{ todayScore }}
  </div>
</template>

<script>
export default {
  computed: {
    getToday() {
      const dt = new Date()
      const YYYY = dt.getFullYear()
      const MM = ('0' + (dt.getMonth() + 1)).slice(-2)
      const DD = ('0' + (dt.getDate())).slice(-2)
      return YYYY + '-' + MM + '-' + DD
    },
    todayScore() {
      return this.$store.getters['todayScore/getScore']
    }
  },

  mounted() {
    this.getRecord()
  },

  methods: {
    getRecord() {
      this.$store.dispatch('todayScore/getScoreFromApi', { today: this.getToday })
    },

  }
}
</script>
