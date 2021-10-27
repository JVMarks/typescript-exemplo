import { Request, Response } from 'express';
import createUser from './services/CraeteUser';

export function helloword(request: Request, response: Response) {
  const user = createUser({
    email: "joao@",
    password: "121",
    techs: [
      'Node.js',
      { title: 'Java', experience: 100 },
    ]
  });

  return response.json(user)
}