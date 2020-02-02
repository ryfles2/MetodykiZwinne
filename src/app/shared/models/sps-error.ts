export class SpsError {
  _id: number;
  _message: string;
  _state: number;
  _locker_id: number;

  constructor(id, message, state, locker_id) {
    this._id = id;
    this._message = message;
    this._state = state;
    this._locker_id = locker_id;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get message() {
    return this._message;
  }

  set message(message) {
    this._message = message;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  get locker_id() {
    return this._locker_id;
  }

  set locker_id(locker_id) {
    this._locker_id = locker_id;
  }
}
