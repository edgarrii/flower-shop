import { makeAutoObservable } from "mobx";

export default class FlowerStore {
  constructor() {
    this._flowers = [];
    makeAutoObservable(this);
  }
}
