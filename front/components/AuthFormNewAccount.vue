<template>
  <form>
    <v-row>
      <v-col class="px-4 py-6">
        <v-text-field
          v-model="form.userName"
          class="rounded-lg"
          label="ニックネーム"
          outlined
          hide-details
          placeholder="九九 太郎"
          dense
          @focus="isFocusUserName = true"
          @blur="isFocusUserName = false"
          @input="$v.form.userName.$touch()"
        >
        </v-text-field>
        <div v-show="isFocusUserName" id="validate">
          <div id="validate-content">
            <v-icon :color="changeColorUserName" small
              >mdi-check-circle-outline</v-icon
            >
            <span :class="`${changeColorUserName}--text`"
              >1字以上10文字以下</span
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-4 pt-0 pb-6">
        <v-text-field
          v-model="form.email"
          class="rounded-lg"
          type="email"
          label="メールアドレス"
          outlined
          hide-details
          placeholder="kuku.kuku@keisan.com"
          dense
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
          @input="$v.form.email.$touch()"
        >
        </v-text-field>

        <div v-show="isFocusEmail" id="validate">
          <div id="validate-content">
            <v-icon :color="changeColorEmailFormat" small
              >mdi-check-circle-outline</v-icon
            >
            <span :class="`${changeColorEmailFormat}--text`">正しい形式</span>
          </div>
        </div>
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
          dense
          @click:append="isPassword = !isPassword"
          @focus="isFocusPassword = true"
          @blur="isFocusPassword = false"
          @input="$v.form.password.$touch()"
        >
        </v-text-field>
        <div v-show="isFocusPassword" id="validate">
          <div id="validate-content">
            <v-icon :color="changeColorPasswordLength" small
              >mdi-check-circle-outline</v-icon
            >
            <span :class="`${changeColorPasswordLength}--text`"
              >6文字以上72文字以下</span
            >
          </div>
          <div id="validate-content">
            <v-icon :color="changeColorPasswordFormat" small
              >mdi-check-circle-outline</v-icon
            >
            <span :class="`${changeColorPasswordFormat}--text`"
              >半角英数字のみ</span
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center" class="py-0">
        <v-btn
          style="font-size: 20px"
          class="rounded-lg pt-1"
          height="56px"
          color="primary"
          depressed
          :disabled="changeDisable"
          @click="createUser()"
        >
          新規登録
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alphaNum,
  and
} from 'vuelidate/lib/validators'

const emailFormat = (value) => {
  const reg =
    // eslint-disable-next-line no-useless-escape
     /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  return reg.test(value) === true
}

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
      userName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10)
      },
      email: {
        required,
        emailFormat,
      },
      password: {
        required,
        length: and(minLength(6),maxLength(72)),
        minLength: minLength(6),
        maxLength: maxLength(72),
        alphaNum,
      },
    },
  },
  computed: {
    changeColorUserName() {
      return this.$v.form.userName.$invalid ? 'sentence-lighten5' : 'primary'
    },
    changeColorEmailFormat() {
      return this.$v.form.email.$invalid ? 'sentence-lighten5' : 'primary'
    },
    changeColorPasswordLength() {
      return !this.$v.form.password.length || !this.$v.form.password.required ? 'sentence-lighten5' : 'primary'
    },
    changeColorPasswordFormat() {
      return !this.$v.form.password.alphaNum ? 'sentence-lighten5' : 'primary'
    },
    changeDisable() {
      return this.$v.$invalid
    }
  },
  mounted() {
    this.$v.$reset()
  },
  methods: {
    async createUser() {
      await this.$store.dispatch('auth/createUser', {
        email: this.form.email,
        password: this.form.password,
        userName: this.form.userName
      })
    }
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
      font-size: .7rem;
      color: var(--v-sentence-lighten5);
    }
  }
}
</style>
