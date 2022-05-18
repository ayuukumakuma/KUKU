<template>
  <v-app id="default">
    <v-main>
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
