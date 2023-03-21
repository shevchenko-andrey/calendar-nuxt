<template>
  <li v-for="day of daysOfWeek" class="text-center max-md:py-6 md:py-10 rounded-md">
    {{ day }}
  </li>
</template>

<script setup lang="ts">
const daysOfWeek = createDaysOfWeek(new Date());
</script>
