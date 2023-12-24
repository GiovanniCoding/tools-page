'use client'
 
import { useFormState } from 'react-dom'
import { calculateTimeBetweenDates } from '../lib/actions'

export type State = {
  differenceDays: number,
  differenceWeeks: number,
};
 
const initialState = {
  differenceDays: 0,
  differenceWeeks: 0,
}
 
const CountDaysForm = () => {
  const [state, formAction] = useFormState(calculateTimeBetweenDates, initialState)
 
  return (
    <>
      <form action={formAction}>
        <div>
          <span>Start Date</span>
          <input
            type="date"
            name="startDate"
            id="startDate"
            required
          />
        </div>
        <div>
          <span>End Date</span>
          <input
            type="date"
            name="endDate"
            id="endDate"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <div>
          <span>Number of Days:</span>
          <span>{state.differenceDays}</span>
        </div>
        <div>
          <span>Number of Weeks:</span>
          <span>{state.differenceWeeks.toFixed(2)}</span>
        </div>
      </div>
    </>
  )
}

export default CountDaysForm