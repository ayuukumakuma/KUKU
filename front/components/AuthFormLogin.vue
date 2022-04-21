<template>
  <form>
    <v-row>
      <v-col class="px-4 py-6">
        <v-text-field
          v-model="form.email"
          class="rounded-lg"
          type="email"
          label="メールアドレス"
          outlined
          hide-details
          placeholder="kuku.kuku@kuku.com"
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
          @input="$v.form.email.$touch()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-4 pt-0 pb-6">
        <v-text-field
          v-model="form.password"
          class="rounded-lg"
          :append-icon="!isPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="isPassword ? 'text' : 'password'"
          label="パスワード"
          outlined
          hide-details
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
          style="font-size: 20px"
          class="rounded-lg pt-1"
          height="56px"
          color="secondary"
          depressed
          :disabled="changeDisable"
          @click="loginUser(), update()"
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
    update() {
      this.$store.dispatch('auth/stateChanged', { userName: this.form.userName })
    },
    createUser() {
      this.$store.dispatch('auth/createUser', {
        email: this.form.email,
        password: this.form.password,
      })
      console.log(this.form.email, this.form.password)
    },
    loginUser() {
      this.$store.dispatch('auth/loginUser', {
        email: this.form.email,
        password: this.form.password,
      })
      console.log(this.form.email, this.form.password)
    },
  }
}
</script>

<style lang="scss" scoped>
#validate {
  margin: 8px 0 16px 0;
  #validate-content {
    display: flex;
    margin: 6px 0 6px 0;
    span {
      font-size: 14px;
      color: var(--v-sentence-lighten5);
    }
  }
}
</style>
