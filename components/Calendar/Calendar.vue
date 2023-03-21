<template>
  <CalendarNavigator :selectedDay="props.selectedDay" @update:selectedDay="onSelectedDayUpdate" />
  <CalendarGrid
    :selectedDay="props.selectedDay"
    @update:selectedDay="onSelectedDayUpdate"
  ></CalendarGrid>
</template>

<script setup lang="ts">
import { IMeeting } from "@/utils/types/Meeting.interfaces";

const props = defineProps({
  selectedDay: { required: true, type: Date },
  meetings: { default: Array as PropType<IMeeting[]> },
});
const emit = defineEmits(["update:selectedDay"]);

const onSelectedDayUpdate = (newSelectedDay: Date) => {
  emit("update:selectedDay", newSelectedDay);
};
</script>
