"use client";

import { useState } from "react";
import { FaUser, FaSignOutAlt, FaCog, FaCreditCard } from "react-icons/fa"; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface UserData {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserButtonProps {
  user: UserData | null;
  onLogout?: () => void | Promise<void>;
  onSettings?: () => void;
  onProfile?: () => void;
  onBilling?: () => void;
  showBadge?: boolean;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  showEmail?: boolean;
  showMemberSince?: boolean;
}

export default function UserButton({
  user,
  onLogout,
  onSettings,
  onProfile,
  onBilling,
  showBadge = false,
  badgeText = "Pro",
  badgeVariant = "default",
  size = "md",
  showEmail = true,
  showMemberSince = true,
}: UserButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await onSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserInitials = (name: string | null, email: string | null) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email.slice(0, 2).toUpperCase();
    }
    return "U";
  };

  const formatMemberSince = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  const sizeClasses = size === "sm" ? "h-8 w-8 text-xs" : size === "lg" ? "h-10 w-10 text-base" : "h-9 w-9 text-sm";

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`relative rounded-full border border-zinc-200 dark:border-zinc-800 focus-visible:outline-none transition-transform active:scale-95 cursor-pointer outline-none ${sizeClasses}`} disabled={isLoading}>
        <Avatar className="h-full w-full">
          <AvatarImage
            src={user.image || ""}
            alt={user.name || "User avatar"}
            className="object-cover"
          />
          <AvatarFallback className="bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold flex items-center justify-center">
            {getUserInitials(user.name, user.email)}
          </AvatarFallback>
        </Avatar>
        
        {showBadge && (
          <Badge
            variant={badgeVariant}
            className="absolute -bottom-1 -right-1 h-4 min-w-4 px-1 flex items-center justify-center rounded-full text-[10px] font-bold tracking-tight shadow-sm"
          >
            {badgeText}
          </Badge>
        )}
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-64 mt-2 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg" align="end">
        
        {/* ✅ FIX: DropdownMenuLabel ko hata kar primitive div lagaya hai taaki context error na aaye */}
        <div className="font-normal p-2 select-none outline-none">
          <div className="flex flex-col space-y-2.5">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 border border-zinc-100 dark:border-zinc-800">
                <AvatarImage
                  src={user.image || ""}
                  alt={user.name || "User avatar"}
                  className="object-cover"
                />
                <AvatarFallback className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 font-semibold text-sm flex items-center justify-center">
                  {getUserInitials(user.name, user.email)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col space-y-0.5 overflow-hidden">
                <p className="text-sm font-semibold truncate text-zinc-900 dark:text-zinc-50">
                  {user.name || "User"}
                </p>
                {showEmail && user.email && (
                  <p className="text-xs truncate text-zinc-500 dark:text-zinc-400">
                    {user.email}
                  </p>
                )}
              </div>
            </div>
            
            {showMemberSince && (
              <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 pt-2 text-[11px] text-zinc-400 dark:text-zinc-500">
                <span>Member since {formatMemberSince(user.createdAt)}</span>
                {showBadge && (
                  <Badge variant={badgeVariant} className="text-[10px] px-1.5 py-0 rounded-md font-medium tracking-wide">
                    {badgeText}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
        
        <DropdownMenuSeparator className="my-1 bg-zinc-100 dark:bg-zinc-900" />
        
        <div className="space-y-0.5">
          {onProfile && (
            <DropdownMenuItem onClick={onProfile} className="cursor-pointer flex items-center gap-2.5 px-2.5 py-2 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <FaUser className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
              <span>Profile</span>
            </DropdownMenuItem>
          )}
          
          {onBilling && (
            <DropdownMenuItem onClick={onBilling} className="cursor-pointer flex items-center gap-2.5 px-2.5 py-2 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <FaCreditCard className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
              <span>Billing</span>
            </DropdownMenuItem>
          )}
          
          {onSettings && (
            <DropdownMenuItem onClick={onSettings} className="cursor-pointer flex items-center gap-2.5 px-2.5 py-2 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <FaCog className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
              <span>Settings</span>
            </DropdownMenuItem>
          )}
        </div>
        
        <DropdownMenuSeparator className="my-1 bg-zinc-100 dark:bg-zinc-900" />
        
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoading}
          className="cursor-pointer flex items-center gap-2.5 px-2.5 py-2 text-sm rounded-lg text-red-600 dark:text-red-400 focus:bg-red-50 dark:focus:bg-red-950/30 focus:text-red-600 transition-colors"
        >
          <FaSignOutAlt className="h-3.5 w-3.5 shrink-0" />
          <span className="font-medium">{isLoading ? "Logging out..." : "Log out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
