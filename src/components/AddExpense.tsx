import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import { ComboBoxx } from "./ComboBoxx"
import { useState } from "react"
import { useCategories } from "@/hooks/useCategories"
import { useAccounts } from "@/hooks/useAccounts"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { toast } from "./ui/toast"
import type { expenseFormFields } from "@/lib/types"

const AddExpense = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<expenseFormFields>({
    defaultValues: {
      date: "",
      category: "",
      account: "",
      note: "",
    },
  })

  const { onChange: rhfOnChange, ...amountField } = register("amount", {
    valueAsNumber: true,
    required: "Amount is required",
  })

  const { categories } = useCategories()
  const { accounts } = useAccounts()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // TEMP: remove once confirmed
  console.log("form values:", watch())

  const formSubmit: SubmitHandler<expenseFormFields> = async (data) => {
    console.log(data)
    // try {
    //   setIsSubmitting(true)
    //   toast.add({ title: "Expense Added" })
    // } catch (error) {
    //   console.error(error)
    //   toast.add({ title: "Failed to add Expense", description: "Please try again." })
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(formSubmit, (errs) =>
          console.log("validation errors:", errs)
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DatePicker
                  widthInput="w-48"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <ComboBoxx
                  items={categories.map((c) => c.category_name)}
                  placholdertext="Choose Category"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            placeholder="Enter Amount"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="py-4"
            {...amountField}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "")
              rhfOnChange(e)
            }}
          />
          {errors.amount && (
            <p className="text-sm text-red-500">{errors.amount.message}</p>
          )}
        </div>

        <div className="mt-5 grid gap-2">
          <Label htmlFor="account">Account</Label>
          <Controller
            name="account"
            control={control}
            rules={{ required: "Account is required" }}
            render={({ field }) => (
              <ComboBoxx
                items={accounts.map((a) => a.account_name)}
                placholdertext="Choose Account"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.account && (
            <p className="text-sm text-red-500">{errors.account.message}</p>
          )}
        </div>

        <div className="mt-5 grid gap-2">
          <Label htmlFor="note">Note</Label>
          <Input
            id="note"
            placeholder="Note"
            type="text"
            className="py-4"
            {...register("note")}
          />
        </div>

        <div className="mt-5">
          <Button type="submit" className="w-full p-5" disabled={isSubmitting}>
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
