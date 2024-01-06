import { AddRemoveDaysForm } from './ui/DateForms';
export type CountDaysState = {
  showResult: boolean;
  differenceDays: number | null;
  differenceWeeks: number | null;
  differenceMonths: number | null;
  differenceYears: number | null;
};

export type AddRemoveDaysState = {
  resultDate: string | null;
};