import { AuthUser } from "../types/authType";

export interface AuthState {
  authenticatedUser: AuthUser | null;
  isLoading: boolean;
  error: string;
}

export type AuthAction =
  | { type: "auth/login"; userPayload: AuthUser }
  | { type: "auth/logout" }
  | { type: "request/start" }
  | { type: "request/fail"; errorPayload: string };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "auth/login": {
      return {
        ...state,
        isLoading: false,
        authenticatedUser: action.userPayload,
      };
    }

    case "auth/logout": {
      return { ...state, isLoading: false, authenticatedUser: null };
    }

    case "request/start": {
      return { ...state, isLoading: true, error: "" };
    }

    case "request/fail": {
      return { ...state, isLoading: false, error: action.errorPayload };
    }

    default: {
      return state;
    }
  }
}

export default authReducer;
