import { useEffect, useState } from "react"
import { columns } from "./columns"
import type { Payment } from "./columns"
import { DataTable } from "./data-table"
import { getTransactions } from "@/api/transactions"

async function getData(): Promise<Payment[]> {
  return await getTransactions()
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
