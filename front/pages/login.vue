<template>
  <v-form style="margin-top: 68px" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <p id="explanation" class="mt-2">
            --- 保護者・教員の方へ ---<br />ログインするとプレイヤーの学習状況を<br />
            記録、管理、閲覧することが<br />出来るようになります。
          </p>
        </v-col>
      </v-row>
      <AuthForm />
      <v-row>
        <v-col class="pt-6">
          <p style="text-align: center; font-size: 18px">または</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="text-align: center" class="py-0">
          <v-btn
            class="rounded-lg pt-1"
            height="72px"
            depressed
            color="cLight"
            @click="googleLogin(), updateGoogle()"
          >
            <GoogleImg id="google-img" />
            <div id="button-text"><span>Google</span>でログイン</div>
          </v-btn>
        </v-col>
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
    updateGoogle() {
      this.$store.dispatch('auth/googleStateChanged')
    },
  },
}
</script>

<style lang="scss" scoped>
#explanation {
  padding: 0 24px;
  text-align: center;
  font-size: 16px;
}

#google-img {
  float: left;
}

#button-text {
  margin-left: 8px;
  font-size: 20px;
  letter-spacing: 0.2em;
  span {
    font-size: 30px;
    text-transform: capitalize;
  }
}
</style>
