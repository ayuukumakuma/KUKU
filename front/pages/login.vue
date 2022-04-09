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
      <v-row class="py-1 mt-10">
        <v-col>
          <v-text-field
            v-model="email"
            class="rounded-lg"
            :rules="[
              emailRules.required,
              emailRules.format,
              emailRules.passwordMatch,
            ]"
            label="メールアドレス"
            hint="メールアドレスを入力してください"
            outlined
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="py-1">
        <v-col>
          <v-text-field
            v-model="password"
            class="rounded-lg"
            :append-icon="!show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[
              passwordRules.required,
              passwordRules.min,
              passwordRules.max,
              passwordRules.emailMatch,
            ]"
            :type="show ? 'text' : 'password'"
            label="パスワード"
            hint="最大16桁"
            counter
            outlined
            @click:append="show = !show"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="text-align: center" class="py-0">
          <v-btn
            class="rounded-lg pt-1"
            height="72px"
            color="primary"
            depressed
          >
            <div id="button-text">新規登録</div>
          </v-btn>
        </v-col>
        <v-col style="text-align: center" class="py-0">
          <v-btn
            class="rounded-lg pt-1"
            height="72px"
            color="secondary"
            depressed
          >
            <div id="button-text">ログイン</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-6">
          <p style="text-align: center; font-size: 18px">または</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="text-align: center" class="py-0">
          <v-btn class="rounded-lg pt-1" height="72px" depressed color="cLight" @click="loginGoogle">
            <GoogleImg id="google-img" />
            <div id="button-text"><span>Google</span>でログイン</div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export default {
  data() {
    return {
      show: false,
      email: '',
      password: '',
      emailRules: {
        required: (v) => !!v || '入力してください',
        format: (v) => /.+@.+/.test(v) || '正しい形式で入力してください',
        passwordMatch: () => `入力したメールアドレスとパスワードが一致しません`,
      },
      passwordRules: {
        required: (v) => !!v || '入力してください',
        min: (v) => v.length >= 8 || '8桁以上にしてください',
        max: (v) => v.length <= 16 || '最大16桁です',
        emailMatch: () => `入力したメールアドレスとパスワードが一致しません`,
      },
    }
  },
  methods: {
    loginGoogle() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider).then(() => {
        this.$router.push({ path: '/' })
      }).catch((error) => {
        console.error(error)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
#explanation {
  padding: 0 24px;
  text-align: center;
  font-size: 24px;
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
