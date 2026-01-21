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
    if (!text || text.trim() === "") return 0;

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

    return count / searchTextArray.length;
  };

  const getMatchingUsersArray = () => {
    const matchUsers: Record<
      string,
      {
        count: number;
        percent: number;
        exactMatch?: boolean;
      }
    > = {};

    users.forEach((user) => {
      const fioValues = Object.values(user.fio);
      fioValues.forEach((name) => {
        const percent = comparison(name, searchText);
        if (percent > 0.5) {
          if (!matchUsers[name]) {
            matchUsers[name] = {
              count: 1,
              percent,
              exactMatch: name.toLowerCase().includes(searchText.toLowerCase()),
            };
          } else {
            matchUsers[name].count++;
          }
        }
      });
    });

    return matchUsers;
  };

  const matchingUsers = Object.entries(getMatchingUsersArray()).sort((a, b) => {
    if (a[1].exactMatch && !b[1].exactMatch) return -1;
    if (!a[1].exactMatch && b[1].exactMatch) return 1;

    if (b[1].percent !== a[1].percent) {
      return b[1].percent - a[1].percent;
    }

    if (b[1].count !== a[1].count) {
      return b[1].count - a[1].count;
    }

    return a[0].localeCompare(b[0]);
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
