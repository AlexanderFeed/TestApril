<template>
    <div class="search-bar">
      <input v-model="localQuery" @input="onSearch" placeholder="Search..." />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineEmits } from 'vue';
  
  const props = defineProps<{ query: string }>();
  const emits = defineEmits(['search']);
  
  const localQuery = ref(props.query);
  
  const onSearch = () => {
    emits('search', localQuery.value);
  };
  </script>
  
  <style scoped lang="scss">
  .search-bar input {
    width: 100%;
    padding: 0.5rem;
  }
  </style>
  