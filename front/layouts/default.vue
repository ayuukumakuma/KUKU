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
    data() {
        return {};
    },
    methods: {
        checkUpdate() {
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                    .register("/serviceworker.js")
                    .then((registration) => {
                    // 登録成功
                    registration.onupdatefound = function () {
                        console.log("アップデートがあります！");
                        registration.update();
                    };
                })
                    .catch((err) => {
                    console.error(err);
                });
            }
        },
    },
    components: { CheckUpdate }
}
</script>
<style lang="scss">
html::-webkit-scrollbar {
  display: none;
}
html {
  overscroll-behavior-y: none;
}
#default {
  font-family: 'SmartFontUI';
  height: 100vh;
  height: 100dvh;
  box-sizing: border-box;
  // overflow: hidden;
}
</style>
