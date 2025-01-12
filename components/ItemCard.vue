<template>
    <div :class="['item-card', { 'item-card--grid': viewMode === 'grid', 'item-card--list': viewMode === 'list' }]" @click="$emit('click')">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <span>${{ item.price }}</span>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{ item: { title: string; description: string; price: number }; viewMode: string }>();
  </script>
  
  <style scoped lang="scss">
  .item-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  
    &--grid {
      width: 200px; // Размеры для grid
    }
  
    &--list {
      width: 100%; // Размеры для list
      margin-bottom: 1rem;
    }
  
    h3 {
      margin: 0;
      font-size: 1.25rem;
    }
  
    span {
      color: green;
    }
  }
  </style>
  