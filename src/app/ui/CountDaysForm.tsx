"use client";

import { useFormState } from "react-dom";
import { calculateTimeBetweenDates } from "../lib/actions";
import { DateState } from "../types";

const initialState = {
  showResult: false,
  differenceDays: 0,
  differenceWeeks: 0,
  differenceMonths: 0,
  differenceYears: 0,
} as DateState;

const CountDaysForm = () => {
  const [state, formAction] = useFormState(
    calculateTimeBetweenDates,
    initialState
  );

  return (
    <div className="mx-auto max-w-xl">
      <div>
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
              <div className="my-3 py-5 bg-white flex flex-col">
                <span className="text-lg font-thin mb-2">Number of Weeks</span>
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
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h1 className="text-xl">Calculadora de Diferencia de Fechas</h1>
          <p className="text-gray-500">
            Calcula fácilmente la diferencia entre dos fechas con nuestra potente calculadora temporal. Introduce las fechas y descubre instantáneamente la brecha en días, semanas, meses y años. ¡Optimiza tu planificación con esta herramienta esencial para proyectos, eventos y seguimiento temporal.
          </p>
        </div>

        <div>
          <h1 className="text-xl">¿Qué puedo hacer con el contador de días?</h1>
          <p className="text-gray-500">
          Utilizando la calculadora del calendario para contar días entre fechas, puede:

          <ol className="text-start">
            <li>* Calcular el número total de días entre dos fechas.</li>
            <li>* Calcular hace cuántos días que nació o cualquier fecha histórica importante para usted.</li>
            <li>* Calcular el número de semanas, meses o años que hay entre dos fechas.</li>
          </ol>
          </p>
        </div>

        <div>
          <h1 className="text-xl">Contar días entre dos fechas</h1>
          <p className="text-gray-500">
          Utilizar la calculadora de fechas es muy sencillo. Para contar los días entre fechas, simplemente:
          
          <ol className="text-start">
            <li>* Seleccione la Fecha de inicio (día, mes y año).</li>
            <li>* Seleccione la Fecha final (día, mes y año).</li>
            <li>* Haga clic en Calcular duración para encontrar la duración entre dos fechas dadas.</li>
          </ol>

          En el cálculo del número de días, si quiere, puede incluir la fecha final para calcular el número de días entre fechas, lo que significa que se añade un día.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDaysForm;
