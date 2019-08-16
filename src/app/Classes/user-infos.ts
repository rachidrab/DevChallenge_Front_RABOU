import {Address} from './address';
import {Company} from './company';

export class UserInfos {
  private _id: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _phone: string;
  private _website: string;
  private _address: Address;
  private _company: Company;




  constructor(name: string) {

    this._name = name;

  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get website(): string {
    return this._website;
  }

  get address(): Address {
    return this._address;
  }

  get company(): Company {
    return this._company;
  }
}


