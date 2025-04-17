import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

<form onSubmit={handleSubmit} className="transaction-form space-y-4">
  <div className="grid grid-cols-1 gap-4">
    <div className="space-y-2">
      <Label htmlFor="date" className="text-gray-300">Date</Label>
      <Input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="bg-gray-800/80 text-gray-200 border-gray-700"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="type" className="text-gray-300">Type</Label>
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="bg-gray-800/80 text-gray-200 border-gray-700">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          <SelectItem value="EXPENSE" className="text-gray-200">Expense</SelectItem>
          <SelectItem value="INCOME" className="text-gray-200">Income</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="amount" className="text-gray-300">Amount</Label>
      <Input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-gray-800/80 text-gray-200 border-gray-700"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="category" className="text-gray-300">Category</Label>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="bg-gray-800/80 text-gray-200 border-gray-700">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat} className="text-gray-200">
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="note" className="text-gray-300">Note</Label>
      <Input
        id="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="bg-gray-800/80 text-gray-200 border-gray-700"
      />
    </div>
  </div>

  <div className="space-y-2 mt-4">
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
      <div className="space-y-0.5">
        <h4 className="text-sm font-medium text-gray-200">Recurring Transaction</h4>
        <p className="text-sm text-gray-400">
          Set up a recurring schedule for this transaction
        </p>
      </div>
      <Switch />
    </div>
  </div>

  <div className="flex justify-end space-x-4 pt-4">
    <Button
      type="button"
      variant="outline"
      onClick={onClose}
      className="cancel bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Cancel
    </Button>
    <Button
      type="submit"
      className="bg-blue-600 text-white hover:bg-blue-700"
    >
      Add Transaction
    </Button>
  </div>
</form> 