<template>
  <div style="margin-top: 80px;">
    <h1>ログイン後に飛ぶ頁</h1>
    <h3>名前：{{ userInfo }}</h3>
    <v-btn x-large absolute style=" margin-top: 24px; left: 50%; transform: translate(-50%)" @click="logout(), $router.push('./menu')">
      ログアウト
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters['auth/userInfo'].displayName
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  },
}
</script>

