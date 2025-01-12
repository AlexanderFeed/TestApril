<template>
    <div>
      <h1>Welcome to the Catalog</h1>
      <NuxtLink to="/catalog">Go to Catalog</NuxtLink>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    redirect: '/catalog',
  });
  </script>
  