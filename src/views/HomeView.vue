<script setup>
import List from '@/components/List.vue'
import { inject, onMounted, ref } from 'vue'

const axios = inject('axios')

const result = ref([])

onMounted(() =>
  axios
    .get('https://bookers/api/books')
    .then((res) => {
      result.value = res.data
    })
    .catch((error) => {
      console.log('error', error.status, error.message)
    }),
)
</script>

<template>
  <main>
    <List :projectList="result" />
  </main>
</template>
