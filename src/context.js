import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const INITIAL_Stage = {darkMode: false};

const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode }
        default:
            return state
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_Stage)

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}