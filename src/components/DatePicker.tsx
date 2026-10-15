import * as React from "react"
import { format, parseISO } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type datePickerParams = {
  widthInput: string
  value: string // e.g. "2026-10-15"
  onChange: (value: string) => void
}

export function DatePicker({ widthInput, value, onChange }: datePickerParams) {
  const [open, setOpen] = React.useState(false)

  // Form value is a "yyyy-MM-dd" string; the Calendar needs a Date
  const date = value ? parseISO(value) : undefined

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant={"outline"}
            data-empty={!date}
            className={`${widthInput} justify-between py-4 text-left font-normal data-[empty=true]:text-muted-foreground`}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <ChevronDownIcon data-icon="inline-end" />
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            onChange(d ? format(d, "yyyy-MM-dd") : "")
            setOpen(false)
          }}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  )
}
