<template>
  <div>
    <v-row>
      <v-col class="px-4">
        <v-text-field
          v-model="userName"
          class="rounded-lg"
          label="ニックネーム"
          hint="ニックネームを入力してください"
          outlined
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-4">
        <v-text-field
          v-model="email"
          class="rounded-lg"
          label="メールアドレス"
          hint="メールアドレスを入力してください"
          outlined
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-4">
        <v-text-field
          v-model="password"
          class="rounded-lg"
          :append-icon="!show ? 'mdi-eye' : 'mdi-eye-off'"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      email: '',
      password: '',
      userName: '',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
