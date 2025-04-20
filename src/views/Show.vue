<script setup>
// URLパラメータをpropsとして直接受け取る
defineProps({
  id: String,
})
</script>

<template>
  <div>
    <h1>ユーザープロフィール</h1>
    <p>ユーザーID: {{ id }}</p>
  </div>
</template>
