import Character from '../character';
import Team from '../team';

test('test add', () => {
  const player1 = new Character('Warrior');
  const party = new Team();
  party.add(player1);
  expect(party.members).toEqual(new Set([player1]));
});

test('test error add', () => {
  expect(() => {
    const player1 = new Character('Warrior');
    const party = new Team();
    party.add(player1);
    party.add(player1);
  }).toThrowError();
});

test('test addAll', () => {
  const player1 = new Character('Warrior');
  const player2 = new Character('Warrior');
  const player3 = new Character('Magician');
  const player4 = new Character('Bowman');
  const party = new Team();
  party.addAll(player1, player1, player1, player2, player3, player4);
  expect(party.members).toEqual(new Set([player1, player2, player3, player4]));
});

test('test toArray', () => {
  const player1 = new Character('Warrior');
  const player2 = new Character('Warrior');
  const player3 = new Character('Magician');
  const player4 = new Character('Bowman');
  const player5 = new Character('Priest');
  const player6 = new Character('Ranger');
  const party = new Team();
  party.addAll(player1, player2, player3, player4, player5, player6);
  party.toArray();
  expect(party.arrMembers).toEqual([
    { type: 'Warrior' },
    { type: 'Warrior' },
    { type: 'Magician' },
    { type: 'Bowman' },
    { type: 'Priest' },
    { type: 'Ranger' },
  ]);
});
