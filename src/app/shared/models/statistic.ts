export class Statistic {
  _id: string;
  _day: string;
  _used: number;

  constructor(id, day, used) {
    this._id = id;
    this._day = day;
    this._used = used;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get day() {
    return this._day;
  }

  set day(day) {
    this._day = day;
  }

  get used() {
    return this._used;
  }

  set used(used) {
    this._used = used;
  }
}
