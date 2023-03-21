<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="my-4 lg:max-w-6xl lg:m-auto lg:my-10">
      <Calendar :selected-day="selectedDay" @update:selected-day="onSelectedDayUpdate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { enGB } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";

setDefaultOptions({ locale: enGB, weekStartsOn: 1 });

const selectedDay = ref(new Date());
const onSelectedDayUpdate = (newSelectedDay: Date) => {
  selectedDay.value = newSelectedDay;
};
</script>
