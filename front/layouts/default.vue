<template>
  <v-app id="default">
    <v-main>
      <Loading :is-show="isShow" />
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
import Loading from '~/components/Loading.vue'
export default {
  components: { CheckUpdate, Loading },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    path() {
      return this.$route.path
    }
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
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 700)
    })
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
