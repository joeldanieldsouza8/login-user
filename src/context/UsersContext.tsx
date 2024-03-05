import { createContext, useReducer } from "react";
import userReducer, { UserAction, UserState } from "../reducers/userReducer";
// import BASE_URL from "../utils/api";

const users = [
  {
    empId: 1,
    name: "Arjun",
    email: "arjun@example.com",
    password: "arjun123",
    dob: "16-11-2000",
    role: "Software Engineer",
    productivity: {
      Monday: 4,
      Tuesday: 92,
      Wednesday: 122,
      Thursday: 93,
      Friday: 89,
      Saturday: 98,
    },
  },
  {
    empId: 2,
    name: "Mahesh",
    email: "mahesh@example.com",
    password: "mahesh123",
    dob: "15-01-2000",
    role: "Web Developer",
    productivity: {
      Monday: 5,
      Tuesday: 88,
      Wednesday: 110,
      Thursday: 97,
      Friday: 95,
      Saturday: 90,
    },
  },
];

const initialState: UserState = {
  users,
  filteredUsers: users,
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

  // useEffect(() => {
  //   async function fetchUsers() {
  //     dispatch({ type: "request/start" });
  //     try {
  //       const response = await fetch(`${BASE_URL}/users`); // `http://localhost:3001/users
  //       const data = await response.json();
  //       console.log(data); // debug

  //       dispatch({ type: "users/loaded", usersPayload: data });
  //     } catch (error) {
  //       const errorMessage: string =
  //         error instanceof Error
  //           ? error.message
  //           : "There was an error fetching the users.";

  //       dispatch({ type: "request/fail", errorPayload: errorMessage });
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  function fetchUsers() {
    dispatch({ type: "request/start" });
    try {
      dispatch({ type: "users/loaded", usersPayload: users });
    } catch (error) {
      const errorMessage: string =
        error instanceof Error
          ? error.message
          : "There was an error fetching the users.";

      dispatch({ type: "request/fail", errorPayload: errorMessage });
    }
  }

  const contextValue = { usersState, dispatch, fetchUsers };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
