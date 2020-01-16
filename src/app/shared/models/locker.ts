export class Locker {
  private _id: number;
  private _state: number;

  constructor(id, state) {
    this._id = id;
    this._state = state;
  }

  get id() {
    return this._id;
  }

  get state() {
    return this._state;
  }

  set id(id) {
    this._id = id;
  }

  set state(state) {
    this._state = state;
  }
}
