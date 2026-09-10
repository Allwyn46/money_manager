import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "./data-table-features"
import { Badge } from "../ui/badge"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  date: string
  note: string
  amount: number
  category: string
  account: string
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Payment>()

export const columns = columnHelper.columns([
  columnHelper.accessor("date", {
    header: "Date",
  }),
  columnHelper.accessor("note", {
    header: "Note",
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: ({ getValue }) => {
      const status = getValue()

      return <Badge variant="secondary">{status}</Badge>
    },
  }),
  columnHelper.accessor("account", {
    header: "Account",
  }),
])
