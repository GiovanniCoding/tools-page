import Link from "next/link";

const DatePage = () => {
  return (
    <>
      <Link
        href={'date/count-days'}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <p className="hidden md:block">Difference Between Days</p>
      </Link>
      <Link
        href={'date/add-days'}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <p className="hidden md:block">Add Days to a Date</p>
      </Link>
    </>
  );
};

export default DatePage;
