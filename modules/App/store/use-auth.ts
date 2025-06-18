import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserProfile {
  email: string;
  username: string;
  fullname: string;
  lastLogin: Date;
}

interface AuthenticationState {
  user?: UserProfile | null;
  isAuth: boolean;
}

export const useAuthStore = create<AuthenticationState>()(
  persist((_) => ({ isAuth: false }), {
    name: "auth-persistent",
    storage: createJSONStorage(() => AsyncStorage),
  })
);
