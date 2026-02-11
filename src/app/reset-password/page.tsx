"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";
import Link from "next/link";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Invalid link</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 text-sm mb-4">
              This password reset link is invalid or missing. Please request a
              new link.
            </p>
            <p className="text-center text-sm text-gray-600">
              <Link
                href="/forgot-password"
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                Go to forgot password
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Reset your password</CardTitle>
          <p className="text-center text-gray-600 text-sm mt-2">
            Choose a new password for your account.
          </p>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm token={token} />
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

