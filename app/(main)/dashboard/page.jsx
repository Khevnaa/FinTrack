import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  try {
    console.log("Fetching dashboard data...");
    const [accounts, transactions] = await Promise.all([
      getUserAccounts(),
      getDashboardData(),
    ]);
    console.log("Accounts:", accounts);
    console.log("Transactions:", transactions);

    const defaultAccount = accounts?.find((account) => account.isDefault);
    console.log("Default account:", defaultAccount);

    // Get budget for default account
    let budgetData = null;
    if (defaultAccount) {
      budgetData = await getCurrentBudget(defaultAccount.id);
      console.log("Budget data:", budgetData);
    }

    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Budget Progress */}
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />

        {/* Dashboard Overview */}
        <DashboardOverview
          accounts={accounts}
          transactions={transactions || []}
        />

        {/* Accounts Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CreateAccountDrawer>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                <Plus className="h-10 w-10 mb-2" />
                <p className="text-sm font-medium">Add New Account</p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>
          {accounts?.length > 0 &&
            accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Dashboard Error:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error loading dashboard: {error.message}</p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }
}
