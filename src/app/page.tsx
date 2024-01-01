import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl">Home Page</h1>
      <Link
        href={'date'}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <p className="hidden md:block">Dates Tools</p>
      </Link>
    </main>
  )
}
