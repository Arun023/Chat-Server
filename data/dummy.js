const chats = [
  {
    _id: 'c1',
    chatName: 'Alice & Bob',
    isGroupChat: false,
    users: [
      { _id: 'u1', name: 'Alice' },
      { _id: 'u2', name: 'Bob' },
    ],
  },
  {
    _id: 'c2',
    chatName: 'Project Team',
    isGroupChat: true,
    users: [
      { _id: 'u3', name: 'Charlie' },
      { _id: 'u4', name: 'Diana' },
      { _id: 'u5', name: 'Ethan' },
    ],
  },
  {
    _id: 'c3',
    chatName: 'Fiona & George',
    isGroupChat: false,
    users: [
      { _id: 'u6', name: 'Fiona' },
      { _id: 'u7', name: 'George' },
    ],
  },
  {
    _id: 'c4',
    chatName: 'Weekend Squad',
    isGroupChat: true,
    users: [
      { _id: 'u8', name: 'Hannah' },
      { _id: 'u9', name: 'Ivan' },
      { _id: 'u10', name: 'Jack' },
      { _id: 'u11', name: 'Karen' },
    ],
  },
];

module.exports = { chats };
