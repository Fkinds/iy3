<script setup>
import PblList from '@/components/PblList.vue'
import { inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const axios = inject('axios')

const result = ref([])

const route = useRoute()
const id = route.params.projectId // ← ここで取得！

onMounted(() =>
  axios
    .get('https://localhost:8080/api/pbls/view_backlog_all/${id}')
    .then((res) => {
      result.value = res.data
    })
    .catch((error) => {
      console.log('error', error.status, error.message)
    }),
)
</script>

<template>
  <div>
    {{ result }}
    <h1>ユーザープロフィール</h1>
    <p>ユーザーID: {{ id }}</p>
    <PblList :pblList="result" :projectId="id" />
  </div>
</template>
