<template>
  <button type="button">
    <nuxt-icon :name="props.icon" :filled="props.filled"></nuxt-icon>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: { required: true, type: String },
  filled: { default: false, type: Boolean },
});
</script>
