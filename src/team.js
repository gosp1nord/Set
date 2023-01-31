export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Этот игрок уже в команде');
    }
    this.members.add(player);
  }

  addAll(...players) {
    players.forEach(
      (player) => {
        this.members.add(player);
      },
    );
  }

  toArray() {
    this.arrMembers = [];
    this.members.forEach(
      (item) => {
        this.arrMembers.push({ type: item.type });
      },
    );
  }
}
