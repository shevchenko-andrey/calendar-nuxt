<template>
  <li
    class="text-center max-md:py-6 md:py-10 rounded-md cursor-pointer"
    @click="onSelectedDayUpdate"
  >
    <span
      class="p-2 rounded-full"
      :class="{
        'bg-blue-300': isMatchesDay,
        'border border-blue-500': isToday && !isSelectedDayToday,
        'bg-blue-500 text-white': isSelectedDayToday,
        'text-slate-400': !isCurrentMonth,
      }"
      >{{ formattedDate }}
    </span>
  </li>
</template>

<script setup lang="ts">
import { format, isSameDay, isSameMonth } from "date-fns";
import { DateFormats } from "@/utils/enums/dateFormats";

const props = defineProps({
  day: { required: true, type: Date },
  selectedDay: { required: true, type: Date },
});

const emit = defineEmits(["update:selectedDay"]);

const isMatchesDay = computed(() => isSameDay(props.day, props.selectedDay));

const isCurrentMonth = computed(() => isSameMonth(props.day, props.selectedDay));

const isToday = computed(() => isSameDay(props.day, formatToLondonTime(new Date())));

const isSelectedDayToday = isToday && isMatchesDay;

const formattedDate = format(props.day, DateFormats.DAY);

const onSelectedDayUpdate = () => {
  emit("update:selectedDay", props.day);
};
</script>
