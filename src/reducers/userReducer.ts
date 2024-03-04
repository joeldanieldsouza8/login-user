import { User } from "../types/userType";

export interface UserState {
  users: User[];
  filteredUsers: User[];
  isLoading: boolean;
  currentUser: User | null;
  error: string;
}

export type UserAction =
  | { type: "users/loaded"; usersPayload: User[] }
  | { type: "users/filter"; usersPayload: User[] }
  | { type: "request/start" }
  | { type: "request/fail"; errorPayload: string };

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "users/loaded": {
      return {
        ...state,
        isLoading: false,
        users: action.usersPayload,
        filteredUsers: action.usersPayload, 
      }; 
    }

    case "users/filter": {
      return { ...state, filteredUsers: action.usersPayload };
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

export default userReducer;
