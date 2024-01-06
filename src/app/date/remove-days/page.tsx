import { AddRemoveDaysForm } from "@/app/ui/DateForms"

const RemoveDaysPage = () => {
  return (
    <div className="mx-auto max-w-xl">
      <AddRemoveDaysForm
        action="remove"
      />
    </div>
  )
}

export default RemoveDaysPage