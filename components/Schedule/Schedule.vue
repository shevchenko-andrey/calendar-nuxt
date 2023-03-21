<template>
  <div class="bg-wite flex flex-col">
    <p v-if="meetingsForSelectedDay.length !== 0" class="bg-blue-400 font-bold text-center">
      Schedule for {{ formattedDate }}
    </p>
    <ScheduleList :meetings="meetingsForSelectedDay" />
  </div>
</template>

<script setup lang="ts">
import { format, isSameDay } from "date-fns";
import { IMeeting } from "@/utils/types/Meeting.interfaces";
import { DateFormats } from "@/utils/enums/dateFormats";

const props = defineProps({
  meetings: { default: [], type: Array as PropType<IMeeting[]> },
  selectedDay: { required: true, type: Date },
});

const meetingsForSelectedDay = computed(() =>
  props.meetings.filter((meet) => isSameDay(meet.from, props.selectedDay))
);

const formattedDate = computed(() => format(props.selectedDay, DateFormats.FULL_DATE));
</script>
