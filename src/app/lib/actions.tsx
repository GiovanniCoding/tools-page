'use server'

import { DateTime } from "luxon";
import { AddRemoveDaysState, CountDaysState } from "../types";

 
export async function calculateTimeBetweenDates(prevState: CountDaysState, formData: FormData): Promise<CountDaysState> {
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

export async function addDays(prevState: AddRemoveDaysState, formData: FormData): Promise<AddRemoveDaysState> {
  const daysToAdd = parseInt(formData.get('days') as string) || 0;
  const weeksToAdd = parseInt(formData.get('weeks') as string) || 0;
  const monthsToAdd = parseInt(formData.get('months') as string) || 0;
  const yearsToAdd = parseInt(formData.get('years') as string) || 0;

  const startDate = DateTime.fromISO(formData.get('startDate') as string)
    .plus({
      days: daysToAdd,
      weeks: weeksToAdd,
      months: monthsToAdd,
      years: yearsToAdd
    }).toFormat('DDDD');

  return {
    ...prevState,
    resultDate: startDate,
  }
}

export async function removeDays(prevState: AddRemoveDaysState, formData: FormData): Promise<AddRemoveDaysState> {
  const daysToRemove = parseInt(formData.get('days') as string) || 0;
  const weeksToRemove = parseInt(formData.get('weeks') as string) || 0;
  const monthsToRemove = parseInt(formData.get('months') as string) || 0;
  const yearsToRemove = parseInt(formData.get('years') as string) || 0;

  const startDate = DateTime.fromISO(formData.get('startDate') as string)
    .minus({
      days: daysToRemove,
      weeks: weeksToRemove,
      months: monthsToRemove,
      years: yearsToRemove
    }).toFormat('DDDD');

  return {
    ...prevState,
    resultDate: startDate,
  }
}
