<template>
  <div>
    <div
      id="nav-bar"
      class="primary mr-4"
    >
      <v-icon
        id="back-icon"
        size="56px"
        color="sentence"
        @click="$route.name === 'menu' || $route.name === 'login' ? $router.push('/') : $router.push('menu')"
      >
        mdi-arrow-left
      </v-icon>
      <div
        id="nav-bar-text"
      >
        {{ pageName }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  computed: {
    pageName() {
      const route = this.$route.name
      let res = ''
      if (route === 'menu') {
        res = 'メニュー'
      }
      else if (route === 'data') {
        res = 'きろく'
      }
      else if (route === 'kuku') {
        res = 'KUKU'
      }
      else if (route === 'result') {
        res = 'けっか'
      }
      else if (route === 'login') {
        res = 'ログイン'
      }
      else if (route === 'new-account') {
        res = '新規登録'
      }
      return res
    }
  }
}
</script>
<style lang="scss" scoped>
#nav-bar {
  position: fixed;
  height: 64px;
  width: calc(100vw - 16px);
  display: flex;
  top: 16px;
  border-radius: 0 32px 32px 0;
  z-index: 1;
}

#back-icon {
  margin: 0 0 0 8px;
}

#nav-bar-text {
  font-size: 32px;
  padding-top: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
