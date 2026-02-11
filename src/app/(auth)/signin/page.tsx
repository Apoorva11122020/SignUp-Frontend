"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import LoginForm from "@/features/auth/components/LoginForm";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function SignInPage() {
  useAuth(false); // Redirect to profile if already authenticated

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Sign In to Your Account</CardTitle>
          <p className="text-center text-gray-600 text-sm mt-2">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
