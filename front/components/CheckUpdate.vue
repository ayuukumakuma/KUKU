<template>
  <div>
    <v-dialog v-model="isUpdate">
      <v-card>
        <v-card-title>
          アップデートがあります<br />
          ボタンを押して更新してください
        </v-card-title>
        <v-card-actions style="display: flex; justify-content: end;">
          <v-btn
            style="font-size: 1.2rem;"
            class="rounded-lg"
            depressed
            color="content"
            large
          >
            更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  computed: {
    isUpdate() {
      return this.$store.getters['checkUpdate/isCheckUpdate']
    }
  }
}
</script>
