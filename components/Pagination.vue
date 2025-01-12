<template>
    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('changePage', page)"
      >
        {{ page }}
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{ currentPage: number; totalItems: number; itemsPerPage: number }>();
  
  const emits = defineEmits(['changePage']);
  const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
  </script>
  
  <style scoped lang="scss">
  .pagination button {
    margin: 0 0.25rem;
    padding: 0.5rem 1rem;
  }
  </style>
  