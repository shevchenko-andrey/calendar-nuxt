<template>
  <ul>
    <ScheduleItem v-for="meet of meetings" :from="meet.from" :to="meet.to" :name="meet.name" />
  </ul>
</template>

<script setup lang="ts">
import { IMeeting } from "@/utils/types/Meeting.interfaces";

const props = defineProps({
  meetings: { required: true, type: Array as PropType<IMeeting[]> },
});
</script>
