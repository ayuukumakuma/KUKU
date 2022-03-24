<template>
  <div>
    <NavigationBar
      page="KUKU"
      back="./menu"
    />
    <v-container
      id="tiles"
    >
      <v-row>
        <v-col
          class="pl-6 pr-3"
        >
          <OptionTiles />
        </v-col>
        <v-col
          class="pl-3 pr-6"
        >
          <OptionTiles />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="pl-6 pr-3"
        >
          <OptionTiles />
        </v-col>
        <v-col
          class="pl-3 pr-6"
        >
          <OptionTiles />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  position: relative;
}

#tiles {
  position: absolute;
  bottom: 24px;
}
</style>