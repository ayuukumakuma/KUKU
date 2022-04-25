<template>
  <v-app id="default">
    <v-main>
      <NavigationBar
        v-if="$route.path !== '/' && $route.path !== '/await-auth'"
      />
      <Nuxt />
      <SnackBar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
body {
  height: 100vh;
  height: 100dvh;
}
#default {
  font-family: 'SmartFontUI';
}
</style>
