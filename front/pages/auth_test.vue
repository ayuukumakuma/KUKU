<template>
  <div style="margin-top: 80px;">
    <h1>ログイン後に飛ぶ頁</h1>
    <h3>名前：{{ userInfo }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters['auth/userInfo'].displayName
    }
  }
}
</script>

