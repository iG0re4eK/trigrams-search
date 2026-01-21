import type { UserType } from "../../type/UserType";
import Item from "./Item/Item";
import styles from "./List.module.css";

interface ListProps {
  users: UserType[];
  trigram: (text: string) => string[];
}

function List({ users, trigram }: ListProps) {
  return (
    <div className={`${styles["list"]}`}>
      {users.length === 0 && <div>Нету пользователей</div>}
      {users.map((user) => {
        return <Item key={user.id} user={user} trigram={trigram}></Item>;
      })}
    </div>
  );
}

export default List;
