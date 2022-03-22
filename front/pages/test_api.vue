<template>
  <div>
    <NavigationBar
      page="APIテスト"
      back="./manu"
     />
    <button type="button" name="button" @click="getMsg">getAPI</button>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
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
