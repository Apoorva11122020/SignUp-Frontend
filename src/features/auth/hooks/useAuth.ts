import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchCurrentUser } from "../authSlice";

export const useAuth = (requireAuth: boolean = false) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isLoading, isAuthenticated, error } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token && !user && !isLoading) {
      dispatch(fetchCurrentUser());
    }

    if (requireAuth && !isLoading && !isAuthenticated && !token) {
      router.push("/signin");
    }

    if (!requireAuth && isAuthenticated && token) {
      router.push("/profile");
    }
  }, [dispatch, user, isLoading, isAuthenticated, requireAuth, router]);

  return { user, isLoading, isAuthenticated, error };
};
