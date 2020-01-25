export class SpsUser {
  _id: number;
  _login: string;
  _type: number;

  constructor(id, login, type) {
    this._id = id;
    this._login = login;
    this._type = type;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get login() {
    return this._login;
  }

  set login(login) {
    this._login = login;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }
}
