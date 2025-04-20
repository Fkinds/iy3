<script setup>
defineProps({
  projectList: Object,
})
</script>

<template>
  <v-list>
    <v-list-item
      v-for="(project, index) in projectList"
      :key="index"
      :title="project.title"
      :to="`/projects/${project.id}`"
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
