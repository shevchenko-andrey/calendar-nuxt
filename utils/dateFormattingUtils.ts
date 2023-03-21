import {
  endOfMonth,
  eachDayOfInterval,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";

import { utcToZonedTime } from "date-fns-tz";
import { DateFormats } from "@/utils/enums/dateFormats";

export const formatToLondonTime = (date: Date) => utcToZonedTime(date, "Europe/London");

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

export const formatMeetDate = (from: Date, to: Date) => {
  const yearOfMeet = format(from, DateFormats.FULL_DATE);

  const rangeOfMeet =
    format(from, DateFormats.HOURS_MINUTES) + "-" + format(to, DateFormats.HOURS_MINUTES);

  return `${yearOfMeet} ${rangeOfMeet}`;
};
