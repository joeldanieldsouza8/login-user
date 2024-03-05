import useUsers from "../../../hooks/useUsers";
import Header from "../../Header/Header";
import SearchBar from "../../Search/SearchBar";
import Footer from "../../Footer/Footer";
import UserItem from "../UserItem/UserItem";

import logo from "../../../assets/images/moptro_logo/moptro_ logo.png";

import styles from "./UserList.module.css";

function UserList() {
  const { usersState } = useUsers();
  const { filteredUsers } = usersState;

  return (
    <div className={styles["user-list-container"]}>
      <Header logo={logo} />

      <SearchBar />

      <div className={styles["user-list"]}>
        {filteredUsers.map((user) => (
          <UserItem key={user.empId} user={user} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default UserList;
