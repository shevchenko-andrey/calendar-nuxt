<template>
  <li class="p-4 border border-b-slate-500">
    <p class="flex items-center">
      <span class="block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>

      <span>Event: {{ props.name }}</span>
    </p>

    <p>{{ formattedMeetDate }}</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  from: { required: true, type: Date },
  to: { required: true, type: Date },
  name: { required: true, type: String },
});

const formattedMeetDate = computed(() => formatMeetDate(props.from, props.to));
</script>
