<template>
  <div class="flex justify-between p-4">
    <p class="text-2xl">{{ formattedDate }}</p>
    <div class="flex w-16 justify-between bg-blue-500 px-2 py-1 rounded-sm">
      <IconButton class="text-white" icon="chevron-left" @click="decrementMonth" />
      <IconButton class="text-white" icon="chevron-right" @click="incrementMonth" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { add, format, sub } from "date-fns";
import { DateFormats } from "~~/enums/dateFormats";

const props = defineProps({ selectedDay: { required: true, type: Date } });
const emit = defineEmits(["update:selectedDay"]);

const formattedDate = computed(() => format(props.selectedDay, DateFormats.YEAR_MONTH));

const incrementMonth = () => {
  emit("update:selectedDay", add(props.selectedDay, { months: 1 }));
};

const decrementMonth = () => {
  emit("update:selectedDay", sub(props.selectedDay, { months: 1 }));
};
</script>
