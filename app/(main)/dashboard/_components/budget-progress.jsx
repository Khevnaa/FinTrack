// "use client";

// import { useState, useEffect } from "react";
// import { Pencil, Check, X } from "lucide-react";
// import useFetch from "@/hooks/use-fetch";
// import { toast } from "sonner";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { updateBudget } from "@/actions/budget";

// export function BudgetProgress({ initialBudget, currentExpenses }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newBudget, setNewBudget] = useState(
//     initialBudget?.amount?.toString() || ""
//   );

//   const {
//     loading: isLoading,
//     fn: updateBudgetFn,
//     data: updatedBudget,
//     error,
//   } = useFetch(updateBudget);

//   const percentUsed = initialBudget
//     ? (currentExpenses / initialBudget.amount) * 100
//     : 0;

//   const handleUpdateBudget = async () => {
//     const amount = parseFloat(newBudget);

//     if (isNaN(amount) || amount <= 0) {
//       toast.error("Please enter a valid amount");
//       return;
//     }

//     await updateBudgetFn(amount);
//   };

//   const handleCancel = () => {
//     setNewBudget(initialBudget?.amount?.toString() || "");
//     setIsEditing(false);
//   };

//   useEffect(() => {
//     if (updatedBudget?.success) {
//       setIsEditing(false);
//       toast.success("Budget updated successfully");
//     }
//   }, [updatedBudget]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error.message || "Failed to update budget");
//     }
//   }, [error]);

//   return (
//     <Card>
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
   

//         <div className="flex-1">
//           <CardTitle className="text-sm font-medium">
//             Monthly Budget (Default Account)
//           </CardTitle>
//           <div className="flex items-center gap-2 mt-1">
//             {isEditing ? (
//               <div className="flex items-center gap-2">
//                 <Input
//                   type="number"
//                   value={newBudget}
//                   onChange={(e) => setNewBudget(e.target.value)}
//                   className="w-32"
//                   placeholder="Enter amount"
//                   autoFocus
//                   disabled={isLoading}
//                 />
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={handleUpdateBudget}
//                   disabled={isLoading}
//                 >
//                   <Check className="h-4 w-4 text-green-500" />
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={handleCancel}
//                   disabled={isLoading}
//                 >
//                   <X className="h-4 w-4 text-red-500" />
//                 </Button>
//               </div>
//             ) : (
//               <>
//                 <CardDescription>
//                   {initialBudget
//                     ? `$${currentExpenses.toFixed(
//                         2
//                       )} of $${initialBudget.amount.toFixed(2)} spent`
//                     : "No budget set"}
//                 </CardDescription>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setIsEditing(true)}
//                   className="h-6 w-6"
//                 >
//                   <Pencil className="h-3 w-3" />
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         {initialBudget && (
//           <div className="space-y-2">
//             <Progress
//               value={percentUsed}
//               extraStyles={`${
//                 percentUsed >= 90
//                   ? "bg-red-500"
//                   : percentUsed >= 75
//                     ? "bg-yellow-500"
//                     : "bg-green-500"
//               }`}
//             />
//             <p className="text-xs text-muted-foreground text-right">
//               {percentUsed.toFixed(1)}% used
//             </p>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBudget } from "@/actions/budget";

export function BudgetProgress({ initialBudget, currentExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount?.toString() || ""
  );

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const percentUsed = initialBudget
    ? (currentExpenses / initialBudget.amount) * 100
    : 0;

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    await updateBudgetFn(amount);
  };

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Budget updated successfully");
    }
  }, [updatedBudget]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update budget");
    }
  }, [error]);

  // Determine progress bar color based on percentage
  const getProgressBarStyle = () => {
    if (percentUsed >= 90) {
      return "bg-red-500"; // Red for high usage (≥90%)
    } else if (percentUsed >= 80) {
      return "bg-yellow-500"; // Yellow for moderate-high usage (≥80%)
    } else {
      // For percentages below 80%, use a blue-purple gradient
      return "bg-gradient-to-r from-blue-500 to-purple-600";
    }
  };

  return (
    <Card className="bg-gray-800 border border-transparent relative overflow-hidden shadow-lg">
      {/* Gradient border effect */}
      <div className="absolute inset-0 p-[1px]">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-70"></div> */}
      </div>
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <div className="flex-1">
          <CardTitle className="text-sm font-medium text-gray-200">
            Monthly Budget (Default Account)
          </CardTitle>
          <div className="flex items-center gap-2 mt-1">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="w-32 bg-gray-700 border-gray-600 text-gray-200"
                  placeholder="Enter amount"
                  autoFocus
                  disabled={isLoading}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleUpdateBudget}
                  disabled={isLoading}
                  className="hover:bg-gray-700"
                >
                  <Check className="h-4 w-4 text-green-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="hover:bg-gray-700"
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ) : (
              <>
                <CardDescription className="text-gray-300">
                  {initialBudget
                    ? `$${currentExpenses.toFixed(
                        2
                      )} of $${initialBudget.amount.toFixed(2)} spent`
                    : "No budget set"}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="h-6 w-6 hover:bg-gray-700"
                >
                  <Pencil className="h-3 w-3 text-gray-300" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        {initialBudget && (
          <div className="space-y-2">
            <Progress
              value={percentUsed}
              extraStyles={getProgressBarStyle()}
              className="bg-gray-700"
            />
            <p className="text-xs text-gray-400 text-right">
              {percentUsed.toFixed(1)}% used
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}