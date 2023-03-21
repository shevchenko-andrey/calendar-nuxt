<template>
  <ul
    class="grid grid-cols-7 p-2 shadow-gray-700 shadow-2xl min-md:border border-slate-300 rounded-md"
  >
    <CalendarHead />
    <CalendarGridItem
      :selected-day="props.selectedDay"
      v-for="day of days"
      :key="formatISO(day)"
      :day="day"
      @update:selected-day="onSelectedDayUpdate"
    />
  </ul>
</template>

<script setup lang="ts">
import { formatISO } from "date-fns";

const props = defineProps({ selectedDay: { required: true, type: Date } });

const emit = defineEmits(["update:selectedDay"]);

const days = computed(() => createDaysOfCalendar(props.selectedDay));

const onSelectedDayUpdate = (newDate: Date) => {
  emit("update:selectedDay", newDate);
};
</script>
