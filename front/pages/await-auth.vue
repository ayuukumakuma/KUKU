<template>
  <div>
    <h4 style="margin-top: 100px">
      届いたメールに添付されているリンクにアクセスして認証を完了してください。
    </h4>
    <v-btn
      x-large
      style="
        font-size: 1.5em;
        margin: 24px auto;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      "
      @click="checkVerified()"
      >認証完了</v-btn
    >
    <div v-if="isError">エラーです</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
    }
  },
  methods: {
    async checkVerified() {
      await this.$store.dispatch('auth/updateVerified')
      await location.reload()
      setTimeout(() => {
        this.check()
      }, 3000);
      console.log(this.$store.getters['auth/userInfo'].emailVerified)
    },
    check() {
      if (this.$store.getters['auth/userInfo'].emailVerified) {
        this.$router.push('menu')
      }
      else {
        this.isError = true
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
