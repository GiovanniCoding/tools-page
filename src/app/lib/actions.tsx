'use server'

import { DateState } from "../types";

 
export async function calculateTimeBetweenDates(prevState: DateState, formData: FormData): Promise<DateState> {

  const startDate = new Date(formData.get('startDate') as string);
  const endDate = new Date(formData.get('endDate') as string);

  const milisecondsPerDay = 24 * 60 * 60 * 1000;
  const milisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const milisecondsPerMonth = 30 * 24 * 60 * 60 * 1000;
  const milisecondsPerYear = 365 * 24 * 60 * 60 * 1000;

  const differenceMilliseconds = endDate.getTime() - startDate.getTime();
  const differenceDays = differenceMilliseconds / milisecondsPerDay;
  const differenceWeeks = differenceMilliseconds / milisecondsPerWeek;
  const differenceMonths = differenceMilliseconds / milisecondsPerMonth;
  const differenceYears = differenceMilliseconds / milisecondsPerYear;

  return {
    ...prevState,
    showResult: true,
    differenceDays,
    differenceWeeks,
    differenceMonths,
    differenceYears,
  }
}