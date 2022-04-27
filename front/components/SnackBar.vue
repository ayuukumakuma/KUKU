<template>
  <v-snackbar
    id="snack-bar"
    v-model="isSnack"
    class="rounded-lg"
    timeout="-1"
    top
    multi-line
  >
    {{ content }}
    <template #action="{ attrs }">
      <v-btn v-bind="attrs" icon @click="changeSnack(false)">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    isSnack() {
      return this.$store.getters['snackBar/getAlert']
    },
    content() {
      return this.$store.getters['snackBar/getContent']
    },
    authState() {
      return this.$store.getters['auth/isLogin']
    },
  },
  watch: {
    authState(val) {
      this.$store.dispatch('snackBar/updateContent', val)
      this.changeSnack(true)
    },
  },
  methods: {
    changeSnack(bool) {
      this.$store.dispatch('snackBar/updateShow', bool)
    },
  },
}
</script>

<style lang="scss" scoped>
#snack-bar {
  position: fixed;
  z-index: 2;
}
</style>
