<template>
  <v-snackbar
    id="snack-bar"
    v-model="isSnack"
    class="rounded-lg"
    color="secondary"
    bottom
    height="2.5rem"
    timeout="-1"
    elevation="0"
    transition="scroll-y-reverse-transition"
  >
    <p>{{ content }}</p>
    <template #action="{ attrs }">
      <v-btn v-bind="attrs" icon @click="changeSnack(false)">
        <v-icon color="sentence"> mdi-close </v-icon>
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
      return this.$store.getters['authSnackBar/getAlert']
    },
    content() {
      return this.$store.getters['authSnackBar/getContent']
    },
    authState() {
      return this.$store.getters['auth/isLogin']
    },
  },
  watch: {
    authState(val) {
      this.$store.dispatch('authSnackBar/updateContent', val)
      this.changeSnack(true)
    },
    isSnack(val) {
      if (val) {
        setTimeout(this.changeSnackFalse, 3000)
      }
    },
  },
  methods: {
    changeSnack(bool) {
      this.$store.dispatch('authSnackBar/updateShow', bool)
    },
    changeSnackFalse() {
      this.changeSnack(false)
    },
  },
}
</script>

<style lang="scss" scoped>
#snack-bar {
  position: fixed;
  z-index: 2;
  p {
    margin: 24px 0;
    color: var(--v-sentence-base);
    font-size: 1rem;
  }
}
</style>
