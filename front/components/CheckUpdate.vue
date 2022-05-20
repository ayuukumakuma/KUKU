<template>
  <div>
    <v-dialog v-model="isUpdate">

    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  // props: {
  //   isUpdate: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  computed: {
    isUpdate() {
      return this.$store.getters['checkUpdate/CheckUpdate']
    }
  }
}
</script>
