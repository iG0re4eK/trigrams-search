import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import usersData from "./data/UsersData";
import type { UserType } from "./type/UserType";

function App() {
  const [users, setUsers] = useState<UserType[]>(usersData);

  const handleSearchUser = (userName: string) => {
    const lowercasedSearch = userName.toLowerCase();
    const filtered = usersData.filter(
      (user) =>
        user.fio.firstName.toLowerCase().includes(lowercasedSearch) ||
        user.fio.secondName.toLowerCase().includes(lowercasedSearch) ||
        user.fio.middleName.toLowerCase().includes(lowercasedSearch),
    );
    setUsers(filtered);
  };

  const trigram = (text: string): string[] => {
    if (!text || text.length < 3) return [text];

    const result: string[] = [];
    for (let i = 0; i < text.length - 2; i++) {
      result.push(text.slice(i, i + 3).toLowerCase());
    }

    return result;
  };

  return (
    <>
      <Search
        searchUser={handleSearchUser}
        users={usersData}
        trigram={trigram}
      ></Search>
      <List users={users} trigram={trigram}></List>
    </>
  );
}

export default App;
