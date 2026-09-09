import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import { ComboBoxx } from "./ComboBoxx"
import { useState } from "react"

const categories = ["Allowance", "Salary", "Petty Cash", "Other"]

const Accounts = ["Cash", "Card"]

const AddIncome = () => {
  const [amount, setAmount] = useState(0)
  const [note, setNote] = useState("")

  return (
    <div className="mt-5">
      <form>
        <div className="flex items-center justify-between gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Date</Label>
            <DatePicker widthInput="w-48"/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Category</Label>
            <ComboBoxx items={categories} placholdertext="Choose Category" />
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="amount">Amount</Label>
          </div>
          <Input
            id="amount"
            placeholder="Enter Amount"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            className="py-4"
            value={amount}
            onChange={(e) => {
              const value = Number(e.target.value.replace(/[^0-9]/g, ""))
              setAmount(value)
            }}
          />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="account">Account</Label>
          </div>
          <ComboBoxx items={Accounts} placholdertext="Choose Account" />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="note">Note</Label>
          </div>
          <Input
            id="amount"
            placeholder="Note"
            type="text"
            required
            className="py-4"
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
            }}
          />
        </div>

        <div className="mt-5">
          <Button type="submit" className="w-full p-5">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddIncome
