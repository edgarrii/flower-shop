import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './store/UserStore'
import FlowerStore from "./store/FlowerStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            flower: new FlowerStore()
        }}
    >
        <App/>
    </Context.Provider>,
    document.getElementById('root')
)
