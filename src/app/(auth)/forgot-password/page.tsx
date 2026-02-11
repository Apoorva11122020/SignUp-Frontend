"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";

export default function ForgotPasswordPage() {
  useAuth(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Forgot your password?</CardTitle>
          <p className="text-center text-gray-600 text-sm mt-2">
            Enter your email and we&apos;ll send you a link to reset your
            password.
          </p>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
          <p className="text-center text-sm text-gray-600 mt-4">
            Remembered your password?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary-600 hover:text-primary-700"
            >
              Back to sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

