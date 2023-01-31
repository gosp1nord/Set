import Character from './character';
import Team from './team';

const player1 = new Character('Warrior');
const player2 = new Character('Warrior');
const player3 = new Character('Magician');
const player4 = new Character('Bowman');
const player5 = new Character('Priest');
const player6 = new Character('Ranger');
const party = new Team();
party.add(player1);
party.addAll(player1, player2, player3, player4, player5, player6);
