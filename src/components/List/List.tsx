import Item from "./Item/Item";
import styles from "./List.module.css";

interface Fio {
  firstName: string;
  middleName: string;
  secondName: string;
}

interface User {
  id: number;
  fio: Fio;
}

interface ListProps {
  users: User[];
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
