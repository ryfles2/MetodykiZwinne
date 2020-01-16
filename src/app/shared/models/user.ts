export class User {
  private _username: string;
  private _isLogged: boolean;

  constructor() {
    this._username = '';
    this._isLogged = false;
  }

  get username() {
    return this._username;
  }

  get isLogged() {
    return this._isLogged;
  }

  set username(username) {
    this._username = username;
  }

  set isLogged(isLogged) {
    this._isLogged = isLogged;
  }
}
