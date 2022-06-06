<template>
  <v-form id="new-account" lazy-validation>
    <v-container>
      <v-row>
        <v-col style="text-align: center" class="pt-8">
          <v-btn
            id="google-btn"
            class="rounded-lg"
            height="48px"
            depressed
            color="cLight"
            @click="googleLogin()"
          >
            <GoogleImg id="google-img" />
            <div id="button-text"><span>Google</span>で新規登録</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="or-text"> または </v-col>
      </v-row>
      <AuthFormNewAccount />
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('auth/userInfoInit')
  },
  methods: {
    async googleLogin() {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('auth/googleAuthLogin')
      this.$nuxt.$loading.finish()
    },
  },
}
</script>

<style lang="scss" scoped>
#new-account {
  margin-top: 68px;
}
#or-text {
  font-size: 16px;
  text-align: center;
}

#google-btn {
  font-size: 1rem;
  height: 2.5rem;
  padding: 24px;
}

#google-img {
  float: left;
}

#button-text {
  margin-left: 8px;
  letter-spacing: 0.1em;
  span {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
}

</style>
