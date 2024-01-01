import CountDaysForm from "@/app/ui/CountDaysForm";

const CountDaysPage = () => {
  return (
    <div className="mx-auto max-w-xl">
      <CountDaysForm />
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

          </p>
          <ol className="text-start">
            <li>* Calcular el número total de días entre dos fechas.</li>
            <li>* Calcular hace cuántos días que nació o cualquier fecha histórica importante para usted.</li>
            <li>* Calcular el número de semanas, meses o años que hay entre dos fechas.</li>
          </ol>
        </div>

        <div>
          <h1 className="text-xl">Contar días entre dos fechas</h1>
          <p className="text-gray-500">
          Utilizar la calculadora de fechas es muy sencillo. Para contar los días entre fechas, simplemente:
          </p>

          <ol className="text-start">
            <li>* Seleccione la Fecha de inicio (día, mes y año).</li>
            <li>* Seleccione la Fecha final (día, mes y año).</li>
            <li>* Haga clic en Calcular duración para encontrar la duración entre dos fechas dadas.</li>
          </ol>

          <p className="text-gray-500">
          En el cálculo del número de días, si quiere, puede incluir la fecha final para calcular el número de días entre fechas, lo que significa que se añade un día.
          </p>
        </div>
      </div>
    </div>
  )
};

export default CountDaysPage;
