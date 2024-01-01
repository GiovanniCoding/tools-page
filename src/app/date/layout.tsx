const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-5 flex-col text-center">
      <h1 className="text-4xl">Date Calculator</h1>
      {children}
    </div>
  )
}

export default layout