"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/lib/hooks";
import type { User } from "@/features/user/types";

export default function AuthCallbackPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleCallback = async () => {
      // Get current Supabase session after OAuth redirect
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        console.error("Supabase auth callback error:", error);
        router.replace("/signin");
        return;
      }

      const { user: supabaseUser } = data.session;

      // Map Supabase user to our internal User type
      const mappedUser: User = {
        id: supabaseUser.id,
        email: supabaseUser.email ?? "",
        name:
          (supabaseUser.user_metadata as any)?.full_name ||
          (supabaseUser.user_metadata as any)?.name ||
          supabaseUser.email?.split("@")[0] ||
          "User",
        createdAt: supabaseUser.created_at ?? new Date().toISOString(),
      };

      // Mark user as authenticated in Redux state
      dispatch({ type: "auth/loginWithProvider", payload: mappedUser });

      // Set a token placeholder so existing auth hook logic treats the user as logged in.
      // NOTE: This is NOT used by the backend; it only prevents redirects on the frontend.
      if (typeof window !== "undefined") {
        localStorage.setItem("token", "supabase-oauth");
      }

      router.replace("/profile");
    };

    void handleCallback();
  }, [dispatch, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600 mx-auto" />
        <p className="text-gray-700 text-sm">
          Finishing Google sign-in, please wait...
        </p>
      </div>
    </div>
  );
}

