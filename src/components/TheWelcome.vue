<script setup>
import { inject, onMounted, ref } from 'vue'
import List from './List.vue'

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
  aaa
  <List :List="result" />
  bbb
</template>
