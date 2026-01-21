import type { UserType } from "../../../type/UserType";
import styles from "./Item.module.css";

interface ItemProps {
  user: UserType;
  trigram: (text: string) => string[];
}

function Item({ user, trigram }: ItemProps) {
  return (
    <div className={`${styles["item"]}`}>
      <div className={`${styles["box"]} ${styles["visible"]}`}>
        <div className={`${styles["user-id"]}`}>{user.id}</div>
        <div className={`${styles["second-name"]}`}>{user.fio.secondName}</div>
        <div className={`${styles["first-name"]}`}>{user.fio.firstName}</div>
        <div className={`${styles["middle-name"]}`}>{user.fio.middleName}</div>
      </div>
      <div className={`${styles["box"]} ${styles["hidden"]}`}>
        <div className={`${styles["second-name"]}`}>
          {trigram(user.fio.secondName).map((el) => {
            return (
              <div key={el} className={`${styles["box-item"]}`}>
                {el}
              </div>
            );
          })}
        </div>
        <div className={`${styles["first-name"]}`}>
          {trigram(user.fio.firstName).map((el) => {
            return (
              <div key={el} className={`${styles["box-item"]}`}>
                {el}
              </div>
            );
          })}
        </div>
        <div className={`${styles["middle-name"]}`}>
          {trigram(user.fio.middleName).map((el) => {
            return (
              <div key={el} className={`${styles["box-item"]}`}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Item;
