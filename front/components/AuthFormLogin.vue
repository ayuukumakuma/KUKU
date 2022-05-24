<template>
  <form>
    <v-row style="max-width: 960px; margin: 0 auto;">
      <v-col class="px-4 py-4">
        <v-text-field
          v-model="form.email"
          class="rounded-lg"
          type="email"
          label="メールアドレス"
          outlined
          hide-details
          placeholder="kuku.kuku@kuku.com"
          height="48px"
          dense
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
          @input="$v.form.email.$touch()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row style="max-width: 960px; margin: 0 auto;">
      <v-col class="px-4 pt-0 pb-4">
        <v-text-field
          v-model="form.password"
          class="rounded-lg"
          :append-icon="!isPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="isPassword ? 'text' : 'password'"
          label="パスワード"
          outlined
          hide-details
          height="48px"
          dense
          @click:append="isPassword = !isPassword"
          @focus="isFocusPassword = true"
          @blur="isFocusPassword = false"
          @input="$v.form.password.$touch()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center" class="pt-0 pb-3">
        <v-btn
          style="font-size: 1rem; padding: 24px;"
          class="rounded-lg"
          height="2.5rem"
          color="secondary"
          depressed
          :disabled="changeDisable"
          @click="loginUser()"
        >
          ログイン
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import {
  required
} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      isPassword: false,
      isFocusUserName: false,
      isFocusEmail: false,
      isFocusPassword: false,
      form: {
        userName: '',
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    changeDisable() {
      return this.$v.$invalid
    }
  },
  mounted() {
    this.$v.$reset()
  },
  methods: {
    loginUser() {
      this.$store.dispatch('auth/loginUser', {
        email: this.form.email,
        password: this.form.password,
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#form {
  display: flex;
  justify-content: center;
}
</style>
