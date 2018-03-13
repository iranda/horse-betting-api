const snacks = [
  {
    id: 'foo',
    name: 'Foolicious snack',
    requestedBy: 'JB',
    votes: [
      {
        user: 'Alvaro',
      },
      {
        user: 'Leire',
      }
    ],
  },
  {
    id: 'bar',
    name: 'Barlicious snack',
    requestedBy: 'Alvaro',
    votes: [
      {
        user: 'JB',
      },
      {
        user: 'Alvaro',
      },
      {
        user: 'Leire',
      }
    ]
  },
  {
    id: 'biz',
    name: 'Bizlicious snack',
    requestedBy: 'Leire',
    votes: [
      {
        user: 'Alvaro',
      }
    ]
  }
];

module.exports = snacks;
