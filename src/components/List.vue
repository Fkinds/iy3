<script setup>
defineProps({
  List: Object,
})
</script>

<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in List"
      :key="index"
      :title="item.title"
      :to="`/${item.id}`"
      class="ellipsis-text"
    />
  </v-list>
</template>

<style scoped>
.ellipsis-text {
  max-width: calc(1em * 11); /* 11文字相当の幅 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: monospace; /* 等幅にして1em ≒ 1文字に */
}
</style>
