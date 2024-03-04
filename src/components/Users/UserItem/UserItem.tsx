import { User } from "../../../types/userType";

import styles from "./UserItem.module.css";

interface UserItemProps {
  user: User;
}

function UserItem({ user }: UserItemProps) {
  return (
    <>
      <div className={styles["user-card"]}>
        <div className={styles['user-details']}>
          <div className={styles.detail}>
            <strong>EMP ID :</strong> <span>{user.empId}</span>
          </div>
          <div className={styles.detail}>
            <strong>Name :</strong> <span>{user.name}</span>
          </div>
          <div className={styles.detail}>
            <strong>DOB :</strong> <span>{user.dob}</span>
          </div>
          <div className={styles.detail}>
            <strong>Role :</strong> <span>{user.role}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserItem;
