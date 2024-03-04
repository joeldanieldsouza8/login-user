import { createContext, useEffect, useReducer } from "react";
import userReducer, { UserAction, UserState } from "../reducers/userReducer";
import BASE_URL from "../utils/api";

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  currentUser: null,
  error: "",
};

// Create a context
const UsersContext = createContext<{
  usersState: UserState;
  dispatch: React.Dispatch<UserAction>;
}>({
  usersState: initialState,
  dispatch: () => null,
});

// Create a provider
function UsersProvider({ children }: { children: React.ReactNode }) {
  const [usersState, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    async function fetchUsers() {
      dispatch({ type: "request/start" });
      try {
        const response = await fetch(`${BASE_URL}/users`); // `http://localhost:3001/users
        const data = await response.json();
        console.log(data); // debug

        dispatch({ type: "users/loaded", usersPayload: data });
      } catch (error) {
        const errorMessage: string =
          error instanceof Error
            ? error.message
            : "There was an error fetching the users.";

        dispatch({ type: "request/fail", errorPayload: errorMessage });
      }
    }

    fetchUsers();
  }, []);

  const contextValue = { usersState, dispatch };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
