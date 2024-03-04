import { createContext, useReducer } from "react";
import authReducer, { AuthAction, AuthState } from "../reducers/authReducer";

const initialState: AuthState = {
  authenticatedUser: null,
  isLoading: false,
  error: "",
};

// Create a context
const AuthContext = createContext<{
  authState: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  authState: initialState,
  dispatch: () => null,
});

// Create a provider
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const contextValue = { authState, dispatch };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
