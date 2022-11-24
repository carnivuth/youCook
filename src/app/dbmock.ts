import { User } from './model/User';

export const users: User[] = [
  {
    username: 'matteo',
    password: 'prova',
    email: 'example@gmail.com',
    recipies: [
      {
        name: 'pollo al curry',
        description: ' pollo cotto in padella con il curry',
        ingredients: [
          {
            quantity: 10,
            ingridient: {
              name: 'pollo',
            },
          },
          {
            quantity: 5,
            ingridient: {
              name: 'latte',
            },
          },
          {
            quantity: 6,
            ingridient: {
              name: 'curry',
            },
          },
        ],
        steps: [
          {
            name: 'tagliare il pollo',
            description: 'tagliare il pollo a cubetti',
          },
          {
            name: 'infarinare il pollo',
            description: 'passare i cubetti di pollo nella farina',
          },
          {
            name: 'rosolare',
            description: 'rosolare il pollo fino a che non prende colore',
          },
          {
            name: 'aggiungere latte',
            description: 'aggiungere mezza tazza di latte',
          },
          {
            name: 'aggiunggere curry',
            description: 'aggiungere curry per insaporire',
          },
          {
            name: 'cottura',
            description: 'lasciar cuocere per 20 minuti',
          },
        ],
      },
    ],
    family: {
      name: 'famiglia',
      description: 'gruppo famiglia',
    },
  },
];
