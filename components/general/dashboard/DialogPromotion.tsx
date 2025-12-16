"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@/components/ui/dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { User, Role } from "@prisma/client";
import { DropdownPromotion } from "./DropdownPromotion";
import { DropdownCharity } from "./DropdownCharity";
import { UpdateUserRole } from "@/lib/actions";

interface DialogPromotionProps {
  user: User | null;
  onUserUpdate?: (updatedUser: User) => void;
}

export function DialogPromotion({ user, onUserUpdate }: DialogPromotionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"ADMIN" | "STAFF" | "USER" | "">(user?.Role ?? "");
  const [selectedCharity, setSelectedCharity] = useState<"" | "Oxfam" | "Mind" | "Salvation Army" | "Cancer Research UK" | "British Heart Foundation">("");
  const [statusMessage, setStatusMessage] = useState("");

  const resetState = () => {
    setSelectedRole(user?.Role ?? "");
    setSelectedCharity("");
    setStatusMessage("");
  };

  const handleUpdate = async () => {
    if (!user) return;

    if (selectedRole === user.Role) {
      setStatusMessage(`User is already ${selectedRole}`);
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    if (selectedRole === "STAFF" && !selectedCharity) {
      setStatusMessage("Please select a charity for STAFF role.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    const charityMap: Record<string, number> = {
      "Oxfam": 1,
      "Mind": 2,
      "Salvation Army": 3,
      "Cancer Research UK": 4,
      "British Heart Foundation": 5,
    };

    const charityId = selectedRole === "STAFF" ? charityMap[selectedCharity] : undefined;

    const result = await UpdateUserRole(user.User_ID, selectedRole as Role, charityId);

    if (result.success) {
      setStatusMessage("User updated successfully!");
      if (onUserUpdate) {
        onUserUpdate({ ...user, Role: selectedRole as Role });
      }
      setTimeout(() => {
        setDialogOpen(false);
        resetState();
      }, 1000);
    } else {
      setStatusMessage(`Error: ${result.error}`);
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetState(); }}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-600 ml-[5%] hover:bg-emerald-700 w-[25%] xl:w-[10%] lg:w-[15%] truncate">Promote/Demote</Button>
      </DialogTrigger>
      <DialogContent className="w-[350px]">
        <DialogHeader>
          <DialogTitle className="font-bold">User Promotion</DialogTitle>
        </DialogHeader>
        {user ? (
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col">
              <span className="font-bold">Username</span>
              <span className="truncate">{user.Username}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Current Role</span>
              <span>{user.Role}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Updated Role</span>
              <DropdownPromotion selectedRole={selectedRole} onSelectRole={setSelectedRole} />
            </div>
            {selectedRole === "STAFF" && (
              <div className="flex flex-col">
                <span className="font-bold text-sm">Charity</span>
                <DropdownCharity selectedCharity={selectedCharity} onSelectCharity={setSelectedCharity} />
              </div>
            )}
          </div>
        ) : (
          <div>No user selected</div>
        )}

        <div className="mt-4 flex flex-col gap-2">
          {user ? <Button onClick={handleUpdate} className="bg-emerald-600 hover:bg-emerald-700">Update</Button> : <></>}

          {statusMessage && <div className="text-sm text-center text-gray-700">{statusMessage}</div>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
