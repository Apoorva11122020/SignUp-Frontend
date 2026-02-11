"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import ProfileCard from "@/features/user/components/ProfileCard";

export default function ProfilePage() {
  const { user, isLoading } = useAuth(true); // Require authentication

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to signin
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-primary-50 to-blue-100 py-12 px-4 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">
            Manage your profile and account settings
          </p>
        </div>
        
        <ProfileCard user={user} />
      </div>
    </div>
  );
}
