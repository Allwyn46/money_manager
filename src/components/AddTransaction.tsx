import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddExpense from "./AddExpense"
import AddIncome from "./AddIncome"
import AddSelfTransfer from "./AddSelfTransfer"

const AddTransaction = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-3">Add Transaction</CardTitle>
        </CardHeader>
        <CardContent className="">
          <Tabs defaultValue="expense">
            <TabsList>
              <TabsTrigger value="expense">Expense</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="self">Self Transfer</TabsTrigger>
            </TabsList>
            <TabsContent value="expense">
              <AddExpense />
            </TabsContent>
            <TabsContent value="income">
              <AddIncome />
            </TabsContent>
            <TabsContent value="self">
              <AddSelfTransfer />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddTransaction
