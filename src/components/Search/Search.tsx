import { useState, type ChangeEvent } from "react";
import styles from "./Search.module.css";
import Trigram from "./Trigram/Trigram";
import type { UserType } from "../../type/UserType";

interface SearchProps {
  users: UserType[];
  searchUser: (userName: string) => void;
  trigram: (text: string) => string[];
}

function Search({ searchUser, users, trigram }: SearchProps) {
  const [text, setText] = useState<string>("");
  const [isTrigram, setIsTrigram] = useState<boolean>(false);

  const inputSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    setIsTrigram(true);
  };

  const clickSearch = () => {
    searchUser(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      clickSearch();
    }
  };

  return (
    <div className={`${styles["search-section"]}`}>
      <input
        className={`${styles["search-input"]}`}
        type="text"
        value={text}
        onChange={inputSearchText}
        onKeyDown={handleKeyPress}
        placeholder="Найти пользователя"
      />
      <button onClick={clickSearch} className={`${styles["search-button"]}`}>
        Найти
      </button>
      {text.length > 0 && isTrigram && (
        <Trigram
          trigram={trigram}
          users={users}
          searchText={text}
          onSelect={(selectedText) => {
            setText(selectedText);
            searchUser(selectedText);
            setIsTrigram(false);
          }}
        ></Trigram>
      )}
    </div>
  );
}

export default Search;
