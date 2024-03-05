import { User } from "@/types/userType";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import ProductivityItem from "../ProductivityItem/ProductivityItem";

import styles from "./ProductivityList.module.css";

function ProductivityList() {
  const { authState } = useAuth();
  const { authenticatedUser } = authState;

  const { usersState } = useUsers();
  const { users } = usersState;

  const currentUser: User | undefined = users.find(
    (user: User) => user.email === authenticatedUser?.email
  );

  return (
    <div className={styles["productivity-list"]}>
      <h2>Employee Productivity Dashboard</h2>
      {currentUser ? (
        <ProductivityItem key={currentUser.empId} user={currentUser} />
      ) : (
        <p>No productivity data available.</p> // This is a placeholder, adjust as needed
      )}
    </div>
  );
}

export default ProductivityList;
