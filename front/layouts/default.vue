<template>
  <v-app id="default">
    <v-main>
      <CheckUpdate />
      <SnackBar />
      <NavigationBar
        v-if="$route.path !== '/' && $route.path !== '/await-auth'"
      />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import CheckUpdate from '~/components/CheckUpdate.vue'
export default {
  components: { CheckUpdate },
  created() {
    this.checkUpdate()
  },
  methods: {
    async checkUpdate() {
      const workbox = await window.$workbox
      if (workbox) {
        workbox.addEventListener('installed', (event) => {
          if (event.isUpdate) {
            console.warn('最新版があります。')
            this.$store.dispatch('checkUpdate/change', true)
          }
        })
      }
    },
    noScroll() {
      window.addEventListener('touchmove', (event) => {
        event.preventDefault()
      },
      {
        passive: false
      })
    },
  },
}
</script>
<style lang="scss">
// html::-webkit-scrollbar {
//   display: none;
// }
// html {
//   height: 100vh;
//   height: 100dvh;
//   overscroll-behavior-y: none;
//   scrollbar-width: none;
// }
// html,
// body {
//   overflow: hidden;
// }
#default {
  font-family: 'SmartFontUI';
  height: 100vh;
  height: 100dvh;
}
</style>
