<template>
  <v-app>
    <v-main>
      <NavigationBar v-if="$route.path != '/'"/>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'Makinas-sq';
  src: url('./assets/font/Makinas-4-Square.otf') format("opentype");
}
.v-application {
 font-family: 'Makinas-sq';
}
</style>
