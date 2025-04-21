<script setup>
import Form from '@/components/form.vue'
import { inject, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// URLパラメータをpropsとして直接受け取る
defineProps({
  id: String,
})

const axios = inject('axios')

const result = ref([])
const name = ref('')
const sp = ref(1)

const route = useRoute()
const backlogId = route.params.pblId // ← ここで取得！

const handleInputName = (event) => {
  name.value = event.target.value
}

const handleSelectSp = (event) => {
  sp.value = Number(event.target.value)
}

const handleSpSubmit = () => {
  try {
    const response = axios.post(`https://localhost:8080/api/pbls/register_offered_sp`, {
      user_name: name.value,
      user_sp: sp.value,
      backlog_id: backlogId,
    })
    console.log('送信成功:', response.data)
    alert('送信に成功しました')
  } catch (error) {
    console.error('送信失敗:', error)
    alert('送信に失敗しました')
  }
}

watch(
  sp,
  () => {
    try {
      const response = axios.get(`https://localhost:8080/api/pbls/view_offered_sp/${backlogId}`)
      result.value = response.data
    } catch (error) {
      console.error('データ取得失敗:', error)
    }
  },
  { immediate: true },
) // immediateオプションを追加

onMounted(() =>
  axios
    .get(`https://localhost:8080/api/pbls/view_offered_sp/${backlogId}`)
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
    <h3>pblDetails</h3>
    <br />
    {{ result }}<br />
    <Form
      :name="name"
      :sp="sp"
      :handleInputName="handleInputName"
      :handleSelectSp="handleSelectSp"
      :handleSpSubmit="handleSpSubmit"
    />
  </div>
</template>
