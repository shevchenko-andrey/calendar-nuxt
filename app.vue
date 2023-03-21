<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="my-4 lg:max-w-6xl lg:m-auto lg:my-10">
      <Calendar
        :selected-day="selectedDay"
        @update:selected-day="onSelectedDayUpdate"
        :meetings="meetings"
      />

      <Schedule :meetings="meetings" :selected-day="selectedDay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { enGB } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";
import { IMeeting } from "@/utils/types/Meeting.interfaces";

setDefaultOptions({ locale: enGB, weekStartsOn: 1 });

const selectedDay = ref(formatToLondonTime(new Date()));

const meetings = ref<IMeeting[]>([
  {
    id: "test",
    name: "test",
    from: new Date("2023-03-26T14:00:00+02:00"), // 26.03.2023 14:00 (часовий пояс Europe/Kyiv)
    to: new Date("2023-03-26T15:00:00+02:00"), // 26.03.2023 15:00 (часовий пояс Europe/Kyiv)
  },
]);

const onSelectedDayUpdate = (newSelectedDay: Date) => {
  selectedDay.value = newSelectedDay;
};
</script>
