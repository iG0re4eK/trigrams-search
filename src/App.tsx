import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import type { UserType } from "./type/UserType";

function App() {
  const usersData: UserType[] = [
    {
      id: 1,
      fio: { firstName: "Иван", middleName: "Петрович", secondName: "Сидоров" },
    },
    {
      id: 2,
      fio: {
        firstName: "Анна",
        middleName: "Владимировна",
        secondName: "Ковалева",
      },
    },
    {
      id: 3,
      fio: {
        firstName: "Дмитрий",
        middleName: "Сергеевич",
        secondName: "Попов",
      },
    },
    {
      id: 4,
      fio: {
        firstName: "Елена",
        middleName: "Александровна",
        secondName: "Морозова",
      },
    },
    {
      id: 5,
      fio: {
        firstName: "Алексей",
        middleName: "Игоревич",
        secondName: "Кузнецов",
      },
    },
    {
      id: 6,
      fio: {
        firstName: "Ольга",
        middleName: "Дмитриевна",
        secondName: "Васильева",
      },
    },
    {
      id: 7,
      fio: {
        firstName: "Сергей",
        middleName: "Андреевич",
        secondName: "Петров",
      },
    },
    {
      id: 8,
      fio: {
        firstName: "Мария",
        middleName: "Викторовна",
        secondName: "Федорова",
      },
    },
    {
      id: 9,
      fio: {
        firstName: "Андрей",
        middleName: "Николаевич",
        secondName: "Волков",
      },
    },
    {
      id: 10,
      fio: {
        firstName: "Наталья",
        middleName: "Олеговна",
        secondName: "Семенова",
      },
    },
    {
      id: 11,
      fio: {
        firstName: "Павел",
        middleName: "Станиславович",
        secondName: "Лебедев",
      },
    },
    {
      id: 12,
      fio: {
        firstName: "Татьяна",
        middleName: "Борисовна",
        secondName: "Егорова",
      },
    },
    {
      id: 13,
      fio: {
        firstName: "Максим",
        middleName: "Романович",
        secondName: "Захаров",
      },
    },
    {
      id: 14,
      fio: {
        firstName: "Юлия",
        middleName: "Геннадьевна",
        secondName: "Павлова",
      },
    },
    {
      id: 15,
      fio: {
        firstName: "Артем",
        middleName: "Валерьевич",
        secondName: "Соколов",
      },
    },
    {
      id: 16,
      fio: {
        firstName: "Ирина",
        middleName: "Юрьевна",
        secondName: "Калинина",
      },
    },
    {
      id: 17,
      fio: {
        firstName: "Владимир",
        middleName: "Леонидович",
        secondName: "Алексеев",
      },
    },
    {
      id: 18,
      fio: {
        firstName: "Светлана",
        middleName: "Михайловна",
        secondName: "Орлова",
      },
    },
    {
      id: 19,
      fio: {
        firstName: "Георгий",
        middleName: "Анатольевич",
        secondName: "Титов",
      },
    },
    {
      id: 20,
      fio: {
        firstName: "Екатерина",
        middleName: "Павловна",
        secondName: "Комарова",
      },
    },
    {
      id: 21,
      fio: {
        firstName: "Кирилл",
        middleName: "Аркадьевич",
        secondName: "Беляев",
      },
    },
    {
      id: 22,
      fio: {
        firstName: "Александра",
        middleName: "Федоровна",
        secondName: "Громова",
      },
    },
    {
      id: 23,
      fio: {
        firstName: "Станислав",
        middleName: "Витальевич",
        secondName: "Данилов",
      },
    },
    {
      id: 24,
      fio: {
        firstName: "Людмила",
        middleName: "Григорьевна",
        secondName: "Жукова",
      },
    },
    {
      id: 25,
      fio: {
        firstName: "Роман",
        middleName: "Эдуардович",
        secondName: "Савельев",
      },
    },
    {
      id: 26,
      fio: {
        firstName: "Валентина",
        middleName: "Ярославович",
        secondName: "Романова",
      },
    },
    {
      id: 27,
      fio: {
        firstName: "Никита",
        middleName: "Ярославович",
        secondName: "Матвеев",
      },
    },
    {
      id: 28,
      fio: {
        firstName: "Вероника",
        middleName: "Руслановна",
        secondName: "Боброва",
      },
    },
    {
      id: 29,
      fio: {
        firstName: "Федор",
        middleName: "Сергеевич",
        secondName: "Мельников",
      },
    },
    {
      id: 30,
      fio: {
        firstName: "Алиса",
        middleName: "Артемовна",
        secondName: "Щербакова",
      },
    },
  ];

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
