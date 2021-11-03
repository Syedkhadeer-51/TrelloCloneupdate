const cards = [
    {
      id: 'card-1',
      title: 'Make lists & cards',
    },
    {
      id: 'card-2',
      title: 'Add Dnd from react Dnd',
    },
    {
      id: 'card-3',
      title: 'commit repo',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Syeds Trello',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'second task',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;