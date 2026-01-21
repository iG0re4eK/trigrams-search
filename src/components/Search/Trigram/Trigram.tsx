import type { UserType } from "../../../type/UserType";
import Variant from "./Variant/Variant";
import styles from "./Trigram.module.css";

interface TrigramProps {
  trigram: (text: string) => string[];
  users: UserType[];
  searchText: string;
  onSelect: (text: string) => void;
}

function Trigram({ trigram, users, searchText, onSelect }: TrigramProps) {
  const comparison = (text: string | undefined, searchText: string) => {
    if (!text || text.trim() === "") return false;

    const searchTextArray = trigram(searchText.toLowerCase());
    const textArray = trigram(text.toLowerCase());
    let count = 0;

    for (let i = 0; i < searchTextArray.length; i++) {
      for (let j = 0; j < textArray.length; j++) {
        if (searchTextArray[i] === textArray[j]) {
          count++;
        }
      }
    }

    return (count * 100) / searchTextArray.length > 0.5;
  };

  const getMatchingUsersArray = () => {
    const matchUsers: Record<string, number> = {};

    users.forEach((user) => {
      const fioValues = Object.values(user.fio);
      fioValues.forEach((name) => {
        if (comparison(name, searchText)) {
          if (matchUsers[name]) {
            matchUsers[name]++;
          } else {
            matchUsers[name] = 1;
          }
        }
      });
    });

    return matchUsers;
  };

  const matchingUsers = Object.entries(getMatchingUsersArray()).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(matchingUsers);

  return (
    <div className={`${styles["trigram"]}`}>
      {matchingUsers.map((user) => {
        return (
          <Variant
            onClick={() => onSelect(user[0])}
            key={user[0]}
            text={user[0]}
          ></Variant>
        );
      })}
    </div>
  );
}

export default Trigram;
