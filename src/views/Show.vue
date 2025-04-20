<script setup>
import PblList from '@/components/PblList.vue'
import { inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// URLパラメータをpropsとして直接受け取る
defineProps({
  id: String,
})

const axios = inject('axios')

const result = ref([])

const route = useRoute()
const id = route.params.id // ← ここで取得！

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
    <PblList :PblList="result" />
  </div>
</template>
