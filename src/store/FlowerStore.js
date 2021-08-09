import { makeAutoObservable } from 'mobx'

export default class FlowerStore {
    constructor() {
        this._flowers = [
            {id: 1, name: `Rose`, text: 'Info about flower1...', img: 'https://pixabay.com/api/?key=22849846-8845f94e39fb8bff02e7224ca&q=yellow+flowers&image_type=photo&pretty=true'},
            {id: 2, name: `Chamomile`, text: 'Info about flower2...', img: 'https://pixabay.com/api/?key=22849846-8845f94e39fb8bff02e7224ca&q=yellow+flowers&image_type=photo&pretty=true'},
            {id: 3, name: `Aster`, text: 'Info about flower3...', img: 'https://pixabay.com/api/?key=22849846-8845f94e39fb8bff02e7224ca&q=yellow+flowers&image_type=photo&pretty=true'},
            {id: 4, name: `Orchid`, text: 'Info about flower4...', img: 'https://pixabay.com/api/?key=22849846-8845f94e39fb8bff02e7224ca&q=yellow+flowers&image_type=photo&pretty=true'}
        ]
        makeAutoObservable(this)
    }

    setFlowers(flowers) {
        this._flowers = flowers
    }

    get flowers() {
        return this._flowers
    }
}
