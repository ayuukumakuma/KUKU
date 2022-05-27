<template>
  <div id="await-auth">
    <div id="text">
      届いたメールに<br />添付されているリンクに<br />アクセスしてください。
    </div>
    <v-progress-circular
      id="progress"
      size="200"
      width="12"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div id="progress-text">
      認証待ち
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
    <div v-if="isError">エラーです</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
      reload: null,
    }
  },

  computed: {
    emailVerified() {
      return this.$store.getters['auth/userInfo'].emailVerified
    },
  },

  mounted() {
    this.checkVerified()
  },

  destroyed() {
    clearInterval(this.reload)
  },

  methods: {
    async checkVerified() {
      this.reload = await setInterval(() => {
        this.check()
      }, 5000)
    },

    async check() {
      await this.$store.dispatch('auth/watchUserVerified')
      if (this.emailVerified) {
        this.$router.push('/menu')
        await this.$store.dispatch('auth/changeIsLogin', true)
        await this.$store.dispatch('auth/addUserInfoToApi')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#await-auth {
  // overflow: hidden;
}
#text {
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  margin: 20% auto auto auto;
}

#progress {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#progress-text {
  font-size: 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  span {
    color: var(--v-base-sentence);
    animation: anim 2s infinite alternate-reverse;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.25s;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
    }
  }
  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
