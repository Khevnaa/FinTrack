// "use client";

// import { ArrowUpRight, ArrowDownRight } from "lucide-react";
// import { Switch } from "@/components/ui/switch";
// import { useEffect } from "react";
// import useFetch from "@/hooks/use-fetch";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { updateDefaultAccount } from "@/actions/account";
// import { toast } from "sonner";

// export function AccountCard({ account }) {
//   const { name, type, balance, id, isDefault } = account;

//   const {
//     loading: updateDefaultLoading,
//     fn: updateDefaultFn,
//     data: updatedAccount,
//     error,
//   } = useFetch(updateDefaultAccount);

//   const handleDefaultChange = async (event) => {
//     event.preventDefault();

//     if (isDefault) {
//       toast.warning("You need atleast 1 default account");
//       return;
//     }

//     await updateDefaultFn(id);
//   };

//   useEffect(() => {
//     if (updatedAccount?.success) {
//       toast.success("Default account updated successfully");
//     }
//   }, [updatedAccount]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error.message || "Failed to update default account");
//     }
//   }, [error]);

//   return (
  //   <Card className="bg-gray-800 border border-transparent relative overflow-hidden rounded-lg shadow-lg">
  //   {/* Gradient border effect */}
  //   <div className="absolute inset-0 rounded-lg p-[1px]">
  //     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500  opacity-30"></div>
  //   </div>
  //   <div className="relative z-10">
  //     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
  //       <CardTitle className="text-sm font-medium text-gray-200">
  //         {name}
  //       </CardTitle>
  //       <Switch
  //         checked={isDefault}
  //         onClick={handleDefaultChange}
  //         disabled={updateDefaultLoading}
  //       />
  //     </CardHeader>
  //     <CardContent>
  //       <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">
  //         ${parseFloat(balance).toFixed(2)}
  //       </div>
  //       <p className="text-xs text-gray-300 mt-1">
  //         {type.charAt(0) + type.slice(1).toLowerCase()} Account
  //       </p>
  //     </CardContent>
  //     <CardFooter className="flex justify-between text-sm text-gray-300">
  //       <div className="flex items-center hover:text-green-400 transition-colors cursor-pointer">
  //         <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
  //         Income
  //       </div>
  //       <div className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
  //         <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
  //         Expense
  //       </div>
  //     </CardFooter>
  //   </div>
  // </Card>
//   );
// }


"use client";

import { ArrowUpRight, ArrowDownRight, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { updateDefaultAccount } from "@/actions/account";
import { toast } from "sonner";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault(); // Prevent navigation

    if (isDefault) {
      toast.warning("You need atleast 1 default account");
      return; // Don't allow toggling off the default account
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow group relative bg-gray-800">

      <Link href={`/account/${id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
          <CardTitle className="text-md font-medium capitalize text-gray-100">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-300">
            ${parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
