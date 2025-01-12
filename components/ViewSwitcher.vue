<template>
    <div class="view-switcher">
      <button @click="$emit('changeView', 'grid')">Grid</button>
      <button @click="$emit('changeView', 'list')">List</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{ viewMode: string }>();
  const emits = defineEmits(['changeView']);
  </script>
  
  <style scoped lang="scss">
  .view-switcher button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .view-switcher button:hover {
    background-color: #ddd;
  }
  </style>
  