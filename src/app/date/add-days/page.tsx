import { AddRemoveDaysForm } from "@/app/ui/DateForms"

const AddDaysPage = () => {
  return (
    <div className="mx-auto max-w-xl">
      <AddRemoveDaysForm
        action="add"
      />
    </div>
  )
}

export default AddDaysPage