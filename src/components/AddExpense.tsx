import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"

const AddExpense = () => {
  return (
    <div className="mt-5">
      <form>
        <div className="flex items-center justify-between gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Date</Label>
            <DatePicker />
          </div>
        </div>
        <div className="grid gap-2 mt-5">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
      </form>

      <div className="mt-5">
        <Button type="submit" className="w-full p-5">
          Save
        </Button>
      </div>
    </div>
  )
}

export default AddExpense
