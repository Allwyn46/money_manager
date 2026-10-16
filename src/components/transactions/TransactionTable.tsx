import { useEffect, useState } from "react"
import { columns } from "./columns"
import type { Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "2026-09-01",
      note: "Grocery shopping",
      amount: 100,
      category: "Food",
      account: "Checking",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      date: "2026-09-03",
      note: "Electricity bill",
      amount: 125,
      category: "Utilities",
      account: "Savings",
      status: "success",
      email: "example@gmail.com",
    }
  ]
}

export default function TransactionTable() {
  const [data, setData] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    getData().then((result) => {
      if (isMounted) {
        setData(result)
        setLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
