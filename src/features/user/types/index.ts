export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}
