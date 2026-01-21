interface Fio {
  firstName: string;
  middleName: string;
  secondName: string;
}

interface User {
  id: number;
  fio: Fio;
}

export type UserType = User;
