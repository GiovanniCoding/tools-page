"use client";

import { useFormState } from "react-dom";
import { calculateTimeBetweenDates } from "../lib/actions";
import { CountDaysState } from "../types";

const initialState = {
  showResult: false,
  differenceDays: 0,
  differenceWeeks: 0,
  differenceMonths: 0,
  differenceYears: 0,
} as CountDaysState;

export const CountDaysForm = () => {
  const [state, formAction] = useFormState(
    calculateTimeBetweenDates,
    initialState
  );

  return (
    <>
      <form action={formAction}>
        <div className="py-5">
          <div>Start Date</div>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded hover:cursor-text"
            type="date"
            name="startDate"
            id="startDate"
            required
          />
        </div>
        <div className="py-5">
          <div>End Date</div>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded hover:cursor-text"
            type="date"
            name="endDate"
            id="endDate"
            required
          />
        </div>
        <div className="flex justify-between">
          <span>Incluir día final en el cálculo (+1 día)</span>
          <input
            type="checkbox"
            name="includeEndDate"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 mt-4 text-white rounded bg-[#a06cd5] hover:bg-[#9163cb]"
        >
          Calculate
        </button>
      </form>
      {
        state.showResult && (
          <div>
            <div className="my-3 py-5 bg-white flex flex-col">
              <span className="text-lg font-thin mb-2">Number of Days</span>
              <span>{state.differenceDays}</span>
            </div>
            <div className="my-3 py-5 bg-white flex flex-col gap-2">
              <span className="text-lg font-thin">Number of Weeks</span>
              <span>{state.differenceWeeks?.toFixed(2)}</span>
            </div>
            <div className="my-3 py-5 bg-white flex flex-col">
              <span className="text-lg font-thin mb-2">Number of Months</span>
              <span>{state.differenceMonths?.toFixed(2)}</span>
            </div>
            <div className="my-3 py-5 bg-white flex flex-col">
              <span className="text-lg font-thin mb-2">Number of Years</span>
              <span>{state.differenceYears?.toFixed(2)}</span>
            </div>
          </div>
        )
      }
    </>
  );
};
