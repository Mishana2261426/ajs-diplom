export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if (new.target.name==='Character') throw 'Character cannot be created with new';// TODO: throw error if user use "new Character()"
  }
}
