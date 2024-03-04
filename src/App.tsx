import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import UserList from "./components/Users/UserList/UserList";
import useAuth from "./hooks/useAuth";
import NoPage from "./components/NoPage/NoPage";

function App() {
  const { authState } = useAuth();
  const { authenticatedUser } = authState;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        {authenticatedUser ? (
          <>
            <Route path="home" element={<Home />} />
            <Route path="users" element={<UserList />} />
          </>
        ) : (
          <Route path="login" element={<Login />} />
        )}

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
