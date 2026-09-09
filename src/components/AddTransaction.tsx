import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AddTransaction = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Add Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="expense" className="w-100">
            <TabsList>
              <TabsTrigger value="expense">Expense</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="self">Self Transfer</TabsTrigger>
            </TabsList>
            <TabsContent value="expense">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="income">Change your password here.</TabsContent>
            <TabsContent value="self">Change your password here.</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddTransaction
