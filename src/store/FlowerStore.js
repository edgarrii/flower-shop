import { makeAutoObservable } from "mobx";

export default class FlowerStore {
  constructor() {
    this._flowers = [];
    makeAutoObservable(this);
  }

  setFlowers(flowers) {
    this._flowers = flowers;
  }

  get flowers() {
    return this._flowers;
  }
}
