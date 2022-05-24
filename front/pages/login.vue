<template>
  <v-form id="login" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <p id="explanation" class="pt-3 mb-0">
            ログインするとプレイヤーの学習状況を<br />
            記録、管理、閲覧することが<br />出来るようになります。
          </p>
        </v-col>
      </v-row>
      <v-row id="divider" />
      <v-row>
        <v-col style="text-align: center" class="pt-0">
          <v-btn
            id="google-btn"
            class="rounded-lg"
            depressed
            color="cLight"
            @click="googleLogin()"
          >
            <GoogleImg id="google-img" />
            <div id="button-text"><span>Google</span>でログイン</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="or-text"> または </v-col>
      </v-row>
      <AuthFormLogin />
      <v-row id="divider" />
      <v-row style="display: flex; justify-content: center">
        <v-btn
          id="create-user"
          class="rounded-lg"
          depressed
          height="48px"
          @click="$router.push('./new-account')"
        >
          新規登録はこちらから
        </v-btn>
      </v-row>
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
    googleLogin() {
      this.$store.dispatch('auth/googleAuthLogin')
    },
  },
}
</script>

<style lang="scss" scoped>
#login {
  margin-top: 68px;
  overflow: hidden;
}
#explanation {
  padding: 0 24px;
  text-align: center;
}

#divider {
  border: 0.5px var(--v-cLight-darken2) solid;
  margin: 16px;
}

#or-text {
  padding: 8px;
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
    font-size: 1.2rem;
    text-transform: capitalize;
  }
}

#create-user {
  font-size: 1em;
  height: 2.5rem;
  padding: 24px;
}
</style>
