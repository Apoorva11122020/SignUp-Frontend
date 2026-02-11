import apiClient from "@/lib/axios";
import {
  LoginFormData,
  SignupFormData,
  ForgotPasswordFormData,
  ResetPasswordFormData,
} from "../schemas";
import { User } from "@/features/user/types";

interface AuthResponse {
  token: string;
  user: User;
}

class AuthService {
  async login(credentials: LoginFormData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  }

  async signup(userData: SignupFormData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      "/auth/signup",
      userData
    );
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>("/user/profile");
    return response.data;
  }

  async requestPasswordReset(
    data: ForgotPasswordFormData
  ): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>(
      "/auth/forgot-password",
      data
    );
    return response.data;
  }

  async resetPassword(
    token: string,
    data: ResetPasswordFormData
  ): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>(
      "/auth/reset-password",
      {
        token,
        password: data.password,
      }
    );
    return response.data;
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }
}

export default new AuthService();
