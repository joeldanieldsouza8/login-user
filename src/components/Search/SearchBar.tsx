import useUsers from "@/hooks/useUsers";
import styles from "./SearchBar.module.css";
import { User } from "@/types/userType";

function SearchBar() {
  const { usersState, dispatch: userDispatch } = useUsers();
  const { users } = usersState;

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const searchTerm: string = event.target.value.toLowerCase();
    console.log(searchTerm); // debug

    const filteredUser: User[] = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    console.log(filteredUser); // debug

    userDispatch({ type: "users/filter", usersPayload: filteredUser });
  }

  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        placeholder="Search with name"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
