import {
  endOfMonth,
  eachDayOfInterval,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";
import { DateFormats } from "~~/enums/dateFormats";

export const createDaysOfCalendar = (selectedDay: Date) => {
  const daysOfCalendar = eachDayOfInterval({
    start: startOfWeek(startOfMonth(selectedDay)),
    end: endOfWeek(endOfMonth(selectedDay)),
  });
  return daysOfCalendar;
};

export const createDaysOfWeek = (selectedDay: Date) => {
  return eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  }).map((day) => format(day, DateFormats.DAY_OF_WEEK));
};
