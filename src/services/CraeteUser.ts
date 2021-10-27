//interfaces são formas de definir tipagem de conjuntos de dados objetos
interface TechObject {
  title: string;
  experience: number
}

interface CreateuserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObject>
}

export default function createUser({ name = '', email, password }: CreateuserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}