<template>
  <v-app>
    <v-main>
      <NavigationBar v-if="$route.path !== '/' && $route.path !== '/await-auth'" />
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
<style lang="scss" scoped>
@font-face {
  font-family: 'Makinas-sq';
  src: url('./assets/font/Makinas-4-Square.otf') format('opentype');
}
@font-face {
  font-family: 'Graduate';
  src: url('../assets/font/Graduate-Regular.ttf');
}
body {
  height: 100vh;
  height: 100dvh;
}
.v-application {
  font-family: 'Makinas-sq';
}
</style>
