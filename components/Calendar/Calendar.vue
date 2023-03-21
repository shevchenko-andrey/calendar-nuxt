<template>
  <CalendarNavigator :selectedDay="props.selectedDay" @update:selectedDay="onSelectedDayUpdate" />
  <CalendarGrid
    :selectedDay="props.selectedDay"
    @update:selectedDay="onSelectedDayUpdate"
  ></CalendarGrid>
</template>

<script setup lang="ts">
const props = defineProps({ selectedDay: { required: true, type: Date } });
const emit = defineEmits(["update:selectedDay"]);

const onSelectedDayUpdate = (newSelectedDay: Date) => {
  emit("update:selectedDay", newSelectedDay);
};
</script>
