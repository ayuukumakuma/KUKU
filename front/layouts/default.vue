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
export default {
  data() {
    return {}
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
  watch: {
    path(val) {
      if (val === '/data') {
        document.documentElement.style.overflow = 'scroll'
        document.body.style.overflow = 'scroll'
      }
      else {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      }
    }
  },
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
  },
}
</script>
<style lang="scss">
body::-webkit-scrollbar {
  display: none;
}
html,
body {
  overflow: hidden;
}
#default {
  font-family: 'SmartFontUI';
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
</style>
