import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import Header from "../Header/Header";
import AlertDestructive from "../UI/AlertDestructive";

import { User } from "../../types/userType";

import BASE_URL from "../../utils/api";

import logo from "../../assets/images/Group3/Group 3.png";

function Login() {
  const navigate = useNavigate();

  const { authState, dispatch: authDispatch } = useAuth();
  const { isLoading, error } = authState;

  const [email, setEmail] = useState("arjun@example.com");
  const [password, setPassword] = useState("arjun123");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    authDispatch({ type: "request/start" });

    try {
      const response = await fetch(`${BASE_URL}/users`);
      const users = await response.json();

      const user: User = users.find(
        (user: User) => user.email === email && user.password === password
      );
      if (user) {
        authDispatch({ type: "auth/login", userPayload: user });

        navigate("/home", { replace: true });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      const errorMessage: string =
        error instanceof Error
          ? error.message
          : "An error occurred during login.";

      authDispatch({ type: "request/fail", errorPayload: errorMessage });
    }
  }

  return (
    <div className={styles["form-container"]}>
      <Header logo={logo} />
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.loginBtn}>
          <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        </div>

        {error && <AlertDestructive message={error} />}

        <p className={styles.title}>Forgot Password?</p>
      </form>
    </div>
  );
}

export default Login;
