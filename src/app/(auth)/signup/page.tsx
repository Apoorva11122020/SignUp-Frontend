"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SignupForm from "@/features/auth/components/SignupForm";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function SignUpPage() {
  useAuth(false); // Redirect to profile if already authenticated

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Create Your Account</CardTitle>
          <p className="text-center text-gray-600 text-sm mt-2">
            Sign up to get started with Authify
          </p>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
