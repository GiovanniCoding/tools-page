import CountDaysForm from "../ui/CountDaysForm";

const DatePage = () => {
  return (
    <div className="m-5 flex-col text-center">
      <h1 className="text-4xl">Date Calculator</h1>
      <CountDaysForm />
    </div>
  );
};

export default DatePage;
