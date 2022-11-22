import { User } from './model/User';

export const users: User[] = [
  {
    username: 'matteo',
    password: 'prova',
    email: 'example@gmail.com',
    recipies: [
      {
        name: 'pollo al kurry',
        ingredients: [
            {
                quantity:10,
                ingridient:{
                    name:"pollo"

                }
            },
            {
                quantity:5,
                ingridient:{
                    name:"latte"

                }
            },
            {
                quantity:6,
                ingridient:{
                    name:"kurry"

                }
            }
        ],
      },
    ],
    family:{
        name:"famiglia",
        description:"gruppo famiglia"
    }
  },
];
