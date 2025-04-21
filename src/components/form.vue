<script setup>
defineProps({
  name: String,
  sp: Number,
  handleInputName: Function,
  handleSelectSp: Function,
  handleSpSubmit: Function,
})
</script>

<template>
  <input :value="name" @input="handleInputName" placeholder="名前を入力" />

  <select :value="sp" @change="handleSelectSp">
    <option v-for="option in [1, 2, 3, 5, 8, 13]" :key="option" :value="option">
      {{ option }}
    </option>
  </select>

  <button @click="handleSpSubmit">送信</button>
</template>
