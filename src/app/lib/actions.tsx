'use server'
 
export async function calculateTimeBetweenDates(prevState: any, formData: FormData) {

  const startDate = new Date(formData.get('startDate') as string);
  const endDate = new Date(formData.get('endDate') as string);

  const milisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const milisecondsPerDay = 24 * 60 * 60 * 1000;

  const differenceMilliseconds = endDate.getTime() - startDate.getTime();
  const differenceDays = differenceMilliseconds / milisecondsPerDay;
  const differenceWeeks = differenceMilliseconds / milisecondsPerWeek;

  return {
    ...prevState,
    differenceDays,
    differenceWeeks,
  }
}