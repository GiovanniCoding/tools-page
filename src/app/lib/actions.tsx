'use server'

import { DateTime } from "luxon";
import { DateState } from "../types";

 
export async function calculateTimeBetweenDates(prevState: DateState, formData: FormData): Promise<DateState> {
  const startDate = DateTime.fromISO(formData.get('startDate') as string);
  let endDate = DateTime.fromISO(formData.get('endDate') as string);
  const includeEndDate = formData.get('includeEndDate') === 'on';

  endDate = includeEndDate
    ? endDate.plus({days: 1})
    : endDate;

  const differenceDays: number = endDate.diff(startDate, 'days').toObject().days || 0;
  const differenceWeeks: number = endDate.diff(startDate, 'weeks').toObject().weeks || 0;
  const differenceMonths: number = endDate.diff(startDate, 'months').toObject().months || 0;
  const differenceYears: number = endDate.diff(startDate, 'years').toObject().years || 0;

  return {
    ...prevState,
    showResult: true,
    differenceDays,
    differenceWeeks,
    differenceMonths,
    differenceYears,
  }
}