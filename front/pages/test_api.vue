<template>
  <div>
    <v-btn
    id="button"
      class="primary sentence--text"
      @click="getMsg"
    >
      getAPI
    </v-btn>
    <v-btn @click="$router.push('./')">
      TOP
    </v-btn>
    <v-card
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgs: [],
    }
  },
  methods: {
    getMsg() {
      this.$axios.$get('/api/v1/hello').then((res) => this.msgs.push(res))
    },
  },
}
</script>
<style lang="scss" scoped>
#button {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%);
}
</style>
