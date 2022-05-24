<template>
  <v-snackbar
    id="snack-bar"
    v-model="isSnack"
    class="rounded-lg"
    color="secondary"
    bottom
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
    isSnack(val) {
      console.log('isSnack: ' + val)
      if (val) {
        setTimeout(this.changeSnackFalse, 3000)
      }
    }
  },
  methods: {
    changeSnack(bool) {
      this.$store.dispatch('snackBar/updateShow', bool)
    },
    changeSnackFalse() {
      this.changeSnack(false)
    }
  },
}
</script>

<style lang="scss" scoped>
#snack-bar {
  position: fixed;
  z-index: 2;
  p {
    margin: 0;
    color: var(--v-sentence-base);
    font-size: 1.2rem;
  }
}
</style>
