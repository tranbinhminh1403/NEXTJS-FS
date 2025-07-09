"use client";

import { signOut } from "@/auth/auth-client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignOut = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("User signed out successfully");
          router.push("/auth/sign-in");
        },
      },
    });
  };
  return (
    <Button variant="destructive" onClick={handleSignOut} disabled={isLoading}>
      {isLoading ? "Signing out..." : "Sign Out"}
    </Button>
  );
};
